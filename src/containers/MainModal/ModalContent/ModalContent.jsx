import React from "react";

//styled-components
import ModalContentContainer from "./ModalContent-style";

const ModalContent = ({ id, name, status, species, type, gender, origin, location}) => {
    return(
        <ModalContentContainer>
            <h2 className="name">{ name }</h2>
            <div className="content">        
                <p className="expediente"><span>Número de expediente</span>{ `: `+id }</p>            
                {(status !=='unknown')? <p className="status"><span>Estado</span>{ `: `+status }</p> : <p className="status"><span>Estado</span>{`: -desconocido-` }</p>}
                {(species !== undefined)? <p className="species"><span>Especie</span>{ `: `+species }</p> : <p className="species"><span>Especie</span>{`: -indefinida-` }</p>}
                {type && <p className="type"><span>Tipo</span>{ `: `+type }</p>}
                <p className="gender"><span>Género</span>{`: `+ gender }</p>
                {(origin !== undefined)? <p className="origin"><span>Origen</span>{`: `+ origin }</p> : <p className="origin"><span>Origen</span>{`: -indefinido-` }</p>}     
                {(location !== undefined)? <p className="location"><span>Localización</span>{`: `+ location }</p> : <p className="location"><span>Localización</span>{`: -indefinida-` }</p>}
            </div>                                
       </ModalContentContainer>
    );
};

export default ModalContent;