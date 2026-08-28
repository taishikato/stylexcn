import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const catalogUrl = new URL('../apps/docs/src/catalog.ts', import.meta.url);

test('every component Usage example uses consistent two-space indentation', async () => {
  const catalog = await readFile(catalogUrl, 'utf8');
  const componentCount = [...catalog.matchAll(/\n\s+slug: ['"][^'"]+['"]/g)].length;
  const examples = [...catalog.matchAll(/\n\s+usage: `([\s\S]*?)`,/g)].map(
    ([, code]) => code,
  );

  assert.equal(examples.length, componentCount, 'every component must have a Usage example');

  for (const code of examples) {
    assert.equal(code, code.trim(), 'examples must not start or end with blank space');
    assert.doesNotMatch(code, /\t/, 'examples must use spaces instead of tabs');
    assert.doesNotMatch(code, / +$/m, 'examples must not contain trailing spaces');

    for (const line of code.split('\n')) {
      const leadingSpaces = line.match(/^ */)?.[0].length ?? 0;
      assert.equal(
        leadingSpaces % 2,
        0,
        `indentation must be a multiple of two spaces: ${line}`,
      );
    }
  }
});
