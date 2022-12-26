import { useState } from 'react'
import Botao from '../Botao/botao'
import CampoTexto from '../CampoTexto/Campotexto'
import '../Formulario/formulario.css'
import ListaSuspensa from '../ListaSuspens/ListaSuspensa'

const Formulario = (props) => {

    const rotas = [
        "Top",
        "Mid",
        "Bot",
        "Selva"
    ]

    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [img, setImg] = useState('')
    const [rota, setRota] = useState('')

    function aoSalvar(e){
        e.preventDefault()

        props.aoCampeaoCadastrado({
            nome,
            tipo,
            img,
            rota
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="nome personagem" 
                />
                <CampoTexto
                    valor={tipo}
                    aoAlterado={valor => setTipo(valor)}
                    obrigatorio={true}
                    label="Tipo"
                    placeholder="tipo do personagem" 
                />
                <CampoTexto
                    valor={img}
                    aoAlterado={valor => setImg(valor)}
                    label="Imagem"
                    placeholder="imagem do personagem" 
                />
                <ListaSuspensa
                    valor={rota}
                    aoAlterado={valor => setRota(valor)} 
                    label="Rota" 
                    itens={rotas}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario