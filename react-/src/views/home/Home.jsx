import React, { useState } from "react"

const Home = (props) => {
  // const legenda = useState("Estou no React") retorna array
  const [legenda, setLegenda] = useState("Estou no React")

  const resetLegenda = () => {
    setLegenda("Estou no React")
  }

  return (
    <>
      <h1>{props.msg}</h1>
      <h2>{legenda}</h2>

      <input
        type="text"
        value={legenda}
        onChange={(event) => setLegenda(event.target.value)}
      />

      <button onClick={resetLegenda}>Reset Legenda</button>
    </>
  )
}

export default Home
