import { useContext } from 'react'
import './styles.css'
import InputsField from './InputField'
import { DefaultContextPage } from '../../context'
import DownloadButton from './DownloadButton'
import html2canvas from 'html2canvas'
import downloadjs from 'downloadjs'

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
      max: 22,
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

  const downloadCard = async () => {
    const element = document.querySelector('.section-card')
    const canvas = await html2canvas(element, { scale: 2 })
    const dataURL = canvas.toDataURL('image/jpg')
    downloadjs(dataURL, 'card.jpg', 'image/jpg')
  }

  return (
    <form className="wrapper-form" onSubmit={(e) => e.preventDefault()}>
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
      <DownloadButton onClick={downloadCard} />
    </form>
  )
}

export default Form
