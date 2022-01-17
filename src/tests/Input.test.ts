import '@testing-library/jest-dom'
import { render } from '@testing-library/svelte'
import Input from '$lib/index'

describe('Input component', () => {
  it('Input Has Placeholder', () => {
    const { getByPlaceholderText } = render(Input, {
      placeholder: 'Hello Sveltio',
    })
    expect(getByPlaceholderText('Hello Sveltio')).toBeInTheDocument()
  })
})
