import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { chromium } from 'playwright';
import { createServer } from 'vite';

const root = new URL('../', import.meta.url);

async function startThemeProviderFixture() {
  const fixtureDir = fileURLToPath(
    new URL('fixtures/theme-provider/', import.meta.url),
  );
  const server = await createServer({
    configFile: fileURLToPath(new URL('vite.config.ts', root)),
    logLevel: 'silent',
    root: fixtureDir,
    server: {
      host: '127.0.0.1',
      port: 0,
      strictPort: false,
    },
  });
  await server.listen();

  const address = server.httpServer?.address();
  assert.ok(address && typeof address === 'object');

  return {
    server,
    url: `http://127.0.0.1:${address.port}`,
  };
}

async function readSystemTheme(browser, colorScheme) {
  const context = await browser.newContext({ colorScheme });
  const page = await context.newPage();
  const consoleErrors = [];

  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.addInitScript(() => {
    window.localStorage.setItem('stylexcn-theme', 'system');
  });
  await page.goto('http://127.0.0.1:3000/docs', {
    waitUntil: 'networkidle',
  });

  const pageTheme = await page.evaluate(() => ({
    backgroundColor: getComputedStyle(document.body).backgroundColor,
    dark: document.documentElement.classList.contains('dark'),
  }));

  await context.close();
  return { ...pageTheme, consoleErrors };
}

test('system theme follows the operating system color scheme', async () => {
  const browser = await chromium.launch({ headless: true });

  try {
    const light = await readSystemTheme(browser, 'light');
    const dark = await readSystemTheme(browser, 'dark');

    assert.equal(light.dark, false);
    assert.equal(dark.dark, true);
    assert.notEqual(light.backgroundColor, dark.backgroundColor);
    assert.deepEqual(light.consoleErrors, []);
    assert.deepEqual(dark.consoleErrors, []);
  } finally {
    await browser.close();
  }
});

test('forced system theme synchronizes the dark and StyleX classes', async () => {
  const fixture = await startThemeProviderFixture();
  const browser = await chromium.launch({ headless: true });

  try {
    const context = await browser.newContext({ colorScheme: 'dark' });
    const page = await context.newPage();
    await page.goto(fixture.url);
    await page.locator('[data-theme-state]').waitFor({ state: 'attached' });
    await page.waitForFunction(
      () =>
        document.querySelector('[data-theme-state]')?.getAttribute(
          'data-resolved-theme',
        ) === 'dark',
    );

    const themeState = await page.evaluate(() => {
      const state = document.querySelector('[data-theme-state]');
      const expectedStyleXClasses =
        state?.getAttribute('data-stylex-theme-classes')?.split(/\s+/) ?? [];

      return {
        dark: document.documentElement.classList.contains('dark'),
        expectedStyleXClasses,
        missingStyleXClasses: expectedStyleXClasses.filter(
          (className) =>
            !document.documentElement.classList.contains(className),
        ),
      };
    });

    assert.equal(themeState.dark, true);
    assert.notEqual(themeState.expectedStyleXClasses.length, 0);
    assert.deepEqual(themeState.missingStyleXClasses, []);
    await context.close();
  } finally {
    await browser.close();
    await fixture.server.close();
  }
});
