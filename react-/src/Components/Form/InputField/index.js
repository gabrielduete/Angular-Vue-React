import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

const InputsField = ({ label, type }) => {
  return (
    <>
      <label className="inputField-label">{label}</label>
      <input className="inputField-input" type={type} />
    </>
  )
}

InputsField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
}

export default InputsField
