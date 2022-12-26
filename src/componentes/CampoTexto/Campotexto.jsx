import '../CampoTexto/campotexto.css'

const CampoTexto = (props)=>{

    function aoDigitar(evento){
      props.aoAlterado(evento.target.value)
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto