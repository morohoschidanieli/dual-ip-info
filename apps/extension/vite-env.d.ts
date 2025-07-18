/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHANGELOG_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
