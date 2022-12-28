import { useState } from 'react'
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario/Fomulario'
import Rota from './componentes/Rota/Rota'

function App() {

  const rotas = [
    {
      nome: "Top",
      corFundo: "#C6E2FF",
      corPrimaria: "#1E90FF"
    },
    {
      nome: "Mid",
      corFundo: "#D8BFD8",
      corPrimaria: "#9400D3"
    },
    {
      nome: "Bot",
      corFundo: "#FFF3B0",
      corPrimaria: "#FF5400"
    },
    {
      nome: "Sup",
      corFundo: "#F08080",
      corPrimaria: "#DC143C"
    },
    {
      nome: "Selva",
      corFundo: "#98FB98",
      corPrimaria: "#00CD00"
    },
  ]

  const [campeos, setCampeos] = useState([])

  function novoCampeaoCadastrado(campeao){
    console.log(campeao)
    setCampeos([...campeos, campeao])
  }

  return (
    <div className='app'>

      <Banner/>
      <Formulario rotas={rotas.map(rota => rota.nome)} aoCampeaoCadastrado={campeao=> novoCampeaoCadastrado(campeao)}/>
      {rotas.map(rota => <Rota
        key={rota.nome} 
        nome={rota.nome} 
        corFundo={rota.corFundo} 
        corPrimaria={rota.corPrimaria}
        campeos={campeos.filter(campeao => campeao.rota === rota.nome)}
      />)}

    </div>
  )
}

export default App
