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

test('theme provider installs with its StyleX theme dependency', () => {
  const item = JSON.parse(
    readFileSync(
      new URL('apps/docs/public/r/theme-provider.json', root),
      'utf8',
    ),
  );

  assert.equal(item.name, 'theme-provider');
  assert.equal(item.type, 'registry:component');
  assert.deepEqual(item.registryDependencies, [
    'https://stylexcn.vercel.app/r/theme.json',
  ]);
  assert.deepEqual(item.dependencies, ['@stylexjs/stylex', 'next-themes']);
  assert.deepEqual(
    item.files.map(({ target }) => target),
    ['@components/theme-provider.tsx'],
  );
});
