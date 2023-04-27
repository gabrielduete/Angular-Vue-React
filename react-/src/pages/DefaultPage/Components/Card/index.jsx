import { useContext } from 'react'
import './styles.css'
import { SIZES } from './Card.data'
import { DefaultContextPage } from '../../context'

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

  return (
    <section className="section-card">
      <h1 className={getSizeName()}>{name}</h1>
      <div>
        <p>{profission}</p>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default Card
