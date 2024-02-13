import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Snackbars } from '.'
import { useSnackStore } from '../../api/snackbar.store'

function Component() {
  const showMessage = useSnackStore.use.showMessage()

  return (
    <>
      <button type="button" onClick={() => showMessage({ message: 'Teste 1', severity: 'info' })}>
        Teste 1
      </button>
      <button type="button" onClick={() => showMessage({ message: 'Teste 2', severity: 'success' })}>
        Teste 2
      </button>
      <Snackbars />
    </>
  )
}

describe('<Snackbars />', () => {
  it('should be able to show consecutive snackbars', async () => {
    // Arrange
    const user = userEvent.setup()
    render(<Component />)

    // Act
    await user.click(screen.getByText('Teste 1'))
    expect((await screen.findAllByRole('alert'))[0]).toHaveTextContent('Teste 1')

    // Assert
    await user.click(screen.getByText('Teste 2'))
    expect((await screen.findAllByRole('alert'))[0]).toHaveTextContent('Teste 2')
  })
})
