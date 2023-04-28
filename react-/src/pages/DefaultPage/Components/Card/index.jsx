import { useContext } from 'react'
import './styles.css'
import { SIZES } from './Card.data'
import { DefaultContextPage } from '../../context'
import DownloadButton from './DownloadButton'
import html2canvas from 'html2canvas'
import downloadjs from 'downloadjs'

const Card = () => {
  const { name, profission, description } = useContext(DefaultContextPage)

  const getSizeName = () => {
    const sizeName = name.length

    if (sizeName <= SIZES.MIN.LEN) {
      return SIZES.MIN.CLASS
    }

    if (sizeName >= SIZES.MAX.LEN) {
      return SIZES.MAX.CLASS
    }

    return SIZES.MEDIUM.CLASS
  }

  const downloadCard = async () => {
    const element = document.querySelector('.section-card')
    const canvas = await html2canvas(element, { scale: 2 })
    const dataURL = canvas.toDataURL('image/jpg')
    downloadjs(dataURL, 'card.jpg', 'image/jpg')
  }

  return (
    <>
      <section className="section-card">
        <h1 className={getSizeName()}>{name}</h1>
        <div>
          <p>{profission}</p>
          <p>{description}</p>
        </div>
      </section>
      <DownloadButton onClick={downloadCard} />
    </>
  )
}

export default Card
