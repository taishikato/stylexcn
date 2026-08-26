"use client";

import * as stylex from "@stylexjs/stylex";
import { useRouter } from "next/navigation";
import { Button } from "@stylexcn/components/button";
import { chrome } from "./chrome.stylex";
import { HeroLive } from "./demos";

export function HomePage() {
  const router = useRouter();

  return (
    <main {...stylex.props(chrome.hero)}>
      <div {...stylex.props(chrome.heroGrid)}>
        <div>
          <div {...stylex.props(chrome.kicker)}>stylexcn</div>
          <h1 {...stylex.props(chrome.heroTitle)}>
            StyleX で組んだ
            <br />
            shadcn New York
          </h1>
          <p {...stylex.props(chrome.heroCopy)}>
            Tailwind ではなく StyleX で、公式 shadcn/ui New York v4
            と同じ見た目を目指したコンポーネントキットです。ここは目で見て、手で触るためのサイトです。
          </p>
          <div {...stylex.props(chrome.heroActions)}>
            <Button type="button" onClick={() => router.push("/docs")}>
              Docs を開く
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/docs/button")}
            >
              Button を見る
            </Button>
          </div>
        </div>
        <HeroLive />
      </div>
    </main>
  );
}
