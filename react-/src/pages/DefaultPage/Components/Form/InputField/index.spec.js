import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import InputsField from '.'

describe('<InputsField />', () => {
  it('should render input text correctly', () => {
    render(<InputsField label="test" type="text" />)

    const label = screen.getByText('test')
    const input = screen.getByLabelText('test')

    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('should render textarea correctly', () => {
    render(<InputsField label="Description" type="text" />)

    const input = screen.getByLabelText('Description')

    expect(input).toBeInTheDocument()
  })
})
