import 'server-only';

import * as stylex from '@stylexjs/stylex';
import { codeToHtml, type BundledLanguage } from 'shiki';
import { chrome } from './chrome.stylex';

type CodeBlockProps = {
  code: string;
  language?: BundledLanguage;
};

export function normalizeCodeIndentation(code: string): string {
  const lines = code
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) =>
      line.replace(/^[ \t]+/, (indentation) =>
        indentation.replace(/\t/g, '  '),
      ),
    );

  while (lines[0]?.trim() === '') lines.shift();
  while (lines.at(-1)?.trim() === '') lines.pop();

  const indentation = lines
    .filter((line) => line.trim() !== '')
    .map((line) => line.match(/^ */)?.[0].length ?? 0);
  const commonIndentation =
    indentation.length > 0 ? Math.min(...indentation) : 0;

  return lines
    .map((line) => line.slice(commonIndentation).trimEnd())
    .join('\n');
}

export async function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const normalizedCode = normalizeCodeIndentation(code);
  const highlightedCode = await codeToHtml(normalizedCode, {
    lang: language,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    transformers: [
      {
        pre(node) {
          node.properties['data-slot'] = 'highlighted-code';
        },
      },
    ],
  });

  return (
    <div
      data-slot='code-block'
      {...stylex.props(chrome.code)}
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
}
