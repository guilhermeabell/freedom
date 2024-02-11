import { AlertColor } from '@mui/material'

export type SnackbarMessage = {
  message: string
  severity?: AlertColor
  key?: string
}

export type Product = {
  id: string
  name: string
  image: string
}
