import Campeos from "../Campeos/Campeos"
import "../Rota/rota.css"

const Rota = (props)=>{

    const corFundo = {backgroundColor: props.corFundo}

    return(
       props.campeos.length > 0 ? <section className="rota" style={corFundo}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="campeos">            
                {props.campeos.map(campeao => <Campeos key={campeao.nome} corPrimaria={props.corPrimaria} nome={campeao.nome} tipo={campeao.tipo} img={campeao.img}/>)}
            </div>
        </section>
        :''
    )
}

export default Rota
