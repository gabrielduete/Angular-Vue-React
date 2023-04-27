import { useContext } from 'react'
import './styles.css'
import InputsField from './InputField'
import { DefaultContextPage } from '../../context'

const Form = () => {
  const { setName, setProfission, setDescription } =
    useContext(DefaultContextPage)

  const type = 'text'

  const inputsConfig = [
    {
      label: 'Name',
      max: 8,
      type,
      setState: setName,
    },
    {
      label: 'Profission',
      max: 18,
      type,
      setState: setProfission,
    },
    {
      label: 'Description',
      max: 200,
      type,
      setState: setDescription,
    },
  ]

  return (
    <form className="wrapper-form">
      <h1 data-testid="form_title">
        Set <span>Informations</span>
      </h1>
      <div>
        {inputsConfig.map(({ label, type, max, setState }) => {
          return (
            <InputsField
              label={label}
              type={type}
              max={max}
              setState={setState}
            />
          )
        })}
      </div>
    </form>
  )
}

export default Form
