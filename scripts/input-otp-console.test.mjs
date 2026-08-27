import assert from 'node:assert/strict';
import test from 'node:test';
import { chromium } from 'playwright';

test('Input OTP docs do not trigger a controlled input warning', async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const controlledInputWarnings = [];

  page.on('console', (message) => {
    if (
      message.type() === 'error' &&
      message.text().includes('both value and defaultValue props')
    ) {
      controlledInputWarnings.push(message.text());
    }
  });

  try {
    await page.goto('http://127.0.0.1:3000/docs/input-otp', {
      waitUntil: 'networkidle',
    });

    assert.deepEqual(controlledInputWarnings, []);
  } finally {
    await browser.close();
  }
});
