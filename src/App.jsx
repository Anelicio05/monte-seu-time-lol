import { useState } from 'react'
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario/Fomulario'

function App() {

  const [campeoes, setCampeos] = useState([])

  function novoCampeaoCadastrado(campeao){
    console.log(campeao)
    setCampeos([...campeoes, campeao])
  }

  return (
    <div className='app'>
      <Banner/>
      <Formulario  aoCampeaoCadastrado={campeao=> novoCampeaoCadastrado(campeao)}/>
    </div>
  )
}

export default App
