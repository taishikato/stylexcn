import assert from 'node:assert/strict';
import test from 'node:test';
import { chromium } from 'playwright';

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
