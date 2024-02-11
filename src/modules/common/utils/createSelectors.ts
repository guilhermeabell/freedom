import { StoreApi, UseBoundStore } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer T } ? S & { use: { [K in keyof T]: () => T[K] } } : never

// @see: https://docs.pmnd.rs/zustand/guides/auto-generating-selectors
export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>
  store.use = {}
  Object.keys(store.getState()).forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(store.use as any)[key] = () => store((s) => s[key as keyof typeof s])
  })
  return store
}
