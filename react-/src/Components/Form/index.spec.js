import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Card from '.'

describe('<Card />', () => {
  const setup = () => render(<Card />)

  it('should render title correctly', () => {
    setup()

    const title = screen.getByText('Set Informations')

    expect(title).toBeIntheDocument()
  })

  it('should render button correctly', () => {
    setup()

    const button = screen.getByAltText('CREATE CARD')

    expect(button).toBeIntheDocument()
  })

  it('should render inputs correctly', () => {
    setup()

    //...
  })

  it('should create card when clicked button', () => {
    setup()

    //...
  })
})
