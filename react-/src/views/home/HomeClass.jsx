import React, { Component } from "react"

class HomeClass extends Component {
  state = {
    legenda: "Estou no React (Classe)",
  }

  resetLegenda() {
    this.setState({
      legenda: "Estou no React (Classe)!!!",
    })
  }

  render() {
    return (
      <>
        <h1>{this.props.msg}</h1>
        <h2>{this.state.legenda}</h2>
        <input
          type="text"
          value={this.state.legenda}
          onChange={(e) => this.setState({ legenda: e.target.value })}
        />
        <button onClick={() => this.resetLegenda()}>Reset Legenda</button>
      </>
    )
  }
}

export default HomeClass
