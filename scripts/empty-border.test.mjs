import assert from 'node:assert/strict';
import test from 'node:test';
import { chromium } from 'playwright';

test('Empty does not render a border by default', async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto('http://127.0.0.1:3000/docs/empty', {
      waitUntil: 'networkidle',
    });

    const empty = page.locator('[data-slot="empty"]').first();
    await assert.doesNotReject(() => empty.waitFor());

    const borderWidths = await empty.evaluate((element) => {
      const style = getComputedStyle(element);
      return [
        style.borderTopWidth,
        style.borderRightWidth,
        style.borderBottomWidth,
        style.borderLeftWidth,
      ];
    });

    assert.deepEqual(borderWidths, ['0px', '0px', '0px', '0px']);
  } finally {
    await browser.close();
  }
});
