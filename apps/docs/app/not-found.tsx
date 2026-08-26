import * as stylex from "@stylexjs/stylex";
import { chrome } from "../src/chrome.stylex";

export default function NotFound() {
  return (
    <main {...stylex.props(chrome.hero)}>
      <h1 {...stylex.props(chrome.pageTitle)}>Not found</h1>
      <p {...stylex.props(chrome.lead)}>このページはありません。</p>
    </main>
  );
}
