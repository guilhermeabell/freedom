import { create } from 'zustand'
import { createSelectors } from '../../common/utils/createSelectors'
import { SnackbarMessage } from '../types'

export type SnackbarState = {
  snack: SnackbarMessage | null
  showMessage: (message: SnackbarMessage) => void
  clearMessage: () => void
}

const snackbarStore = create<SnackbarState>((set) => ({
  snack: null,
  showMessage: ({ message, severity = 'info', key = crypto.randomUUID() }) => set({ snack: { message, severity, key } }),

  clearMessage: () => set({ snack: null }),
}))

export const useSnackStore = createSelectors(snackbarStore)
