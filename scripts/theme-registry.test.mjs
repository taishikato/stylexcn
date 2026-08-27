import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const root = new URL('../', import.meta.url);

test('theme can be installed as a self-contained registry item', () => {
  const item = JSON.parse(
    readFileSync(new URL('apps/docs/public/r/theme.json', root), 'utf8'),
  );

  assert.equal(item.name, 'theme');
  assert.equal(item.type, 'registry:lib');
  assert.deepEqual(item.registryDependencies, [
    'https://stylexcn.vercel.app/r/tokens.json',
  ]);
  assert.deepEqual(item.dependencies, ['@stylexjs/stylex']);
  assert.deepEqual(
    item.files.map(({ target }) => target),
    ['@lib/theme.stylex.ts'],
  );
  assert.match(item.files[0].content, /from ['"]@\/lib\/tokens\.stylex['"]/);
  assert.match(item.files[0].content, /stylex\.createTheme\(tokens/);
});
