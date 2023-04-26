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
      type,
      setState: setName,
    },
    {
      label: 'Profission',
      type,
      setState: setProfission,
    },
    {
      label: 'Description',
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
        {inputsConfig.map(({ label, type, setState }) => {
          return <InputsField label={label} type={type} setState={setState} />
        })}
      </div>
    </form>
  )
}

export default Form
