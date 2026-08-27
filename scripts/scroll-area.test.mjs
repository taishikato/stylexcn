import assert from 'node:assert/strict';
import test from 'node:test';
import { chromium } from 'playwright';

test('horizontal Scroll Area only renders its overflowing scrollbar', async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto('http://127.0.0.1:3000/docs/scroll-area', {
      waitUntil: 'networkidle',
    });

    const horizontalArea = page.locator('[data-slot="scroll-area"]').nth(1);
    const scrollbars = horizontalArea.locator(
      '[data-slot="scroll-area-scrollbar"]',
    );

    await assert.doesNotReject(() => scrollbars.first().waitFor());
    assert.equal(await scrollbars.count(), 1);
    assert.equal(await scrollbars.first().getAttribute('data-orientation'), 'horizontal');
  } finally {
    await browser.close();
  }
});
