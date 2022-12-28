import "../Campeos/campeos.css"

const Campeos = ({nome, tipo, img, corPrimaria})=>{
    return(
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor: corPrimaria}}>
                <img src={img} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{tipo}</h5>
            </div>
        </div>
    )
}

export default Campeos
