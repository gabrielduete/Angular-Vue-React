import { useContext } from 'react'
import './styles.css'
import { DefaultContextPage } from '../../context'

const Card = () => {
  const { name, profission, description } = useContext(DefaultContextPage)

  return (
    <section className="section-card">
      <h1>{name}</h1>
      <div>
        <p>{profission}</p>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default Card
