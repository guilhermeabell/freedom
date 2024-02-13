import React, { useState } from 'react'
import { Alert, Snackbar, SnackbarCloseReason } from '@mui/material'
import { useSnackStore } from '@/modules/common/api/snackbar.store'

export function Snackbars() {
  const snack = useSnackStore.use.snack()
  const [prevSnack, setPrevSnack] = useState(snack)
  const [open, setOpen] = useState(false)
  const clearMessage = useSnackStore.use.clearMessage()

  const handleClose = (_: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
    clearMessage()
  }

  const hasNewSnackToShow = !!snack && snack !== prevSnack
  if (hasNewSnackToShow) {
    if (open) {
      setOpen(false)
    } else {
      setPrevSnack(snack)
      setOpen(true)
    }
  }

  return (
    <Snackbar
      key={prevSnack?.key ?? undefined}
      autoHideDuration={5000}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'top',
      }}
    >
      <Alert onClose={(event) => handleClose(event)} severity={prevSnack?.severity}>
        {prevSnack?.message}
      </Alert>
    </Snackbar>
  )
}
