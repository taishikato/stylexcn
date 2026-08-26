"use client";

import * as stylex from "@stylexjs/stylex";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@stylexcn/components/button";
import { chrome } from "./chrome.stylex";

type InstallCommandProps = {
  command: string;
  secondary?: string;
  hint?: string;
};

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}

function CommandRow({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div {...stylex.props(chrome.installRow)}>
      <pre {...stylex.props(chrome.installPre)}>
        <span {...stylex.props(chrome.installPrompt)} aria-hidden="true">
          ${" "}
        </span>
        <code>{command}</code>
      </pre>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label={copied ? "Copied" : "Copy command"}
        onClick={async () => {
          const ok = await copyText(command);
          if (!ok) return;
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1500);
        }}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </Button>
    </div>
  );
}

export function InstallCommand({
  command,
  secondary,
  hint,
}: InstallCommandProps) {
  return (
    <div {...stylex.props(chrome.installStack)}>
      <CommandRow command={command} />
      {secondary ? <CommandRow command={secondary} /> : null}
      {hint ? <p {...stylex.props(chrome.installHint)}>{hint}</p> : null}
    </div>
  );
}
