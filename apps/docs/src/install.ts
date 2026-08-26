export const REGISTRY_ORIGIN = "https://stylexcn.vercel.app";

export function registryItemUrl(name: string) {
  return `${REGISTRY_ORIGIN}/r/${name}.json`;
}

export function addUrlCommand(name: string) {
  return `pnpm dlx shadcn@latest add ${registryItemUrl(name)}`;
}

export function addNamespaceCommand(name: string) {
  return `pnpm dlx shadcn@latest add @stylexcn/${name}`;
}

export function registerNamespaceCommand() {
  return `pnpm dlx shadcn@latest registry add @stylexcn=${REGISTRY_ORIGIN}/r/{name}.json`;
}

export function listRegistryCommand() {
  return `pnpm dlx shadcn@latest list ${REGISTRY_ORIGIN}/r/registry.json`;
}
