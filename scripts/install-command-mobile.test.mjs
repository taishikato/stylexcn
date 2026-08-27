import assert from 'node:assert/strict';
import test from 'node:test';
import { chromium, devices } from 'playwright';

test('mobile install commands keep the configured small text size', async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ ...devices['iPhone 13'] });

  try {
    await page.goto('http://127.0.0.1:3000/docs', {
      waitUntil: 'networkidle',
    });

    const commandStyles = await page
      .locator('pre[data-slot="install-command"] code')
      .evaluateAll((elements) =>
        elements.map((element) => {
          const styles = getComputedStyle(element);

          return {
            fontSize: styles.fontSize,
            textSizeAdjust: styles.webkitTextSizeAdjust,
          };
        }),
      );

    assert.ok(commandStyles.length > 0);
    assert.deepEqual(
      commandStyles,
      commandStyles.map(() => ({
        fontSize: '12px',
        textSizeAdjust: '100%',
      })),
    );
  } finally {
    await browser.close();
  }
});
