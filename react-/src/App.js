import "./App.css"
import Home from "./views/home/Home"
import HomeClass from "./views/home/HomeClass"

function App() {
  return (
    <div className="App">
      <Home msg="Oi sou o Componente Home #01" />
      <HomeClass msg="Oi sou o Componente Home #02" />
    </div>
  )
}

export default App
