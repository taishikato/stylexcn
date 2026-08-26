import * as stylex from "@stylexjs/stylex";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPONENTS, getComponent } from "../../../src/catalog";
import { chrome } from "../../../src/chrome.stylex";
import { ComponentDemo } from "../../../src/demos";

type PageProps = {
  params: Promise<{ component: string }>;
};

export function generateStaticParams() {
  return COMPONENTS.map((item) => ({ component: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { component } = await params;
  const doc = getComponent(component);
  if (!doc) return { title: "Not found" };
  return { title: doc.name };
}

export default async function ComponentPage({ params }: PageProps) {
  const { component } = await params;
  const doc = getComponent(component);
  if (!doc) notFound();

  return (
    <>
      <h1 {...stylex.props(chrome.pageTitle)}>{doc.name}</h1>
      <p {...stylex.props(chrome.lead)}>{doc.description}</p>
      <h2 {...stylex.props(chrome.sectionTitle)}>Preview</h2>
      <ComponentDemo slug={doc.slug} />
      <h2 {...stylex.props(chrome.sectionTitle)}>Usage</h2>
      <pre {...stylex.props(chrome.code)}>
        <code>{doc.usage}</code>
      </pre>
    </>
  );
}
