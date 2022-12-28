import "../Campeos/campeos.css"

const Campeos = ({nome, tipo, img})=>{
    return(
        <div className="colaborador">
            <div className="cabecalho">
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
