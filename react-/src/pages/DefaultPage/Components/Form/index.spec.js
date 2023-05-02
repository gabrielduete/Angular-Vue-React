import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { inputsConfig } from './Form.data'

import Form from '.'

describe('<Form />', () => {
  const arrayTexts = inputsConfig.map((input) => input.label)

  it('should render title correctly', () => {
    render(<Form />)

    const tittle = screen.getByTestId('form_title')

    expect(tittle).toBeInTheDocument()
  })

  it.each(arrayTexts)('should return %s', (label) => {
    render(<Form />)

    expect(screen.getByText(label)).toBeInTheDocument()
  })
})
