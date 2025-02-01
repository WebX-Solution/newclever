/// <reference types="vite/client" />

declare module 'vite-plugin-static-copy' {
  interface StaticCopyOptions {
    targets: Array<{
      src: string;
      dest: string;
    }>;
  }

  export function viteStaticCopy(options: StaticCopyOptions): Plugin;
}
