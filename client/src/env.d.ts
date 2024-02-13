import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'

declare global {
  interface ImportMetaEnv {
    VITE_API_BASE_URL: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }

  // @see https://github.com/testing-library/jest-dom/issues/427#issuecomment-1110985202
  namespace jest {
    interface Matchers<R> extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
  }
}