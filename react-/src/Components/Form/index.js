import React from 'react'
import './styles.css'
import InputsField from './InputField'
import { inputsConfig } from './Form.data'

const Form = () => {
  return (
    <form className="wrapper-form">
      <h1>
        Set <span>Informations</span>
      </h1>
      <div>
        {inputsConfig.map(({ label, type }) => {
          return <InputsField label={label} type={type} />
        })}
      </div>
      <button>TESTE</button>
    </form>
  )
}

export default Form
