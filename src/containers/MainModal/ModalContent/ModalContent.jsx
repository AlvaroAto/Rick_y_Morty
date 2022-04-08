import React from "react";

//styled-components
import ModalContentContainer from "./ModalContent-style";

const ModalContent = ({ id, name, status, specie, type, gender, origin, location}) => {
    return(
        <ModalContentContainer>
            <h2 className="name">{ name }</h2>
            <div className="content">        
                <p className="expediente">{ `Número de expediente: `+ id }</p>            
                {(status !=='unknown')? <p className="status">{`Estado: `+ status }</p> : <p className="status">{`Estado: -desconocido-` }</p>}
                {(specie !== undefined)? <p className="specie">{`Especie: `+ specie }</p> : <p className="specie">{`Especie: -indefinida-` }</p>}
                {type && <p className="type">{`Tipo: `+ type }</p>}
                <p className="gender">{`Género: `+ gender }</p>
                {(origin[`name`] !== undefined)? <p className="origin">{`Origen: `+ origin[`name`] }</p> : <p className="origin">{`Origen: -indefinido-` }</p>}     
                {(location[`name`] !== undefined)? <p className="location">{`Origen: `+ location[`name`] }</p> : <p className="location">{`Localización: -indefinida-` }</p>}
            </div>                                
       </ModalContentContainer>
    );
};

export default ModalContent;