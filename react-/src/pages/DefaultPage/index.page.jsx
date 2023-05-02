import DefaultContextPageProvider from './context'
import Form from './Components/Form'
import Card from './Components/Card'
import './styles.css'

const DefaultPage = () => {
  return (
    <DefaultContextPageProvider>
      <section className="container">
        <Form />
        <Card />
      </section>
    </DefaultContextPageProvider>
  )
}

export default DefaultPage
