import React from "react";

//styled-components
import ModalContentContainer from "./ModalContent-style";

const ModalContent = ({ id, name, status, specie, type, gender, origin, location}) => {
    return(
        <ModalContentContainer>
            <p className="expediente">{ `Numero de expediente: `+ id }</p>
            <p className="name">{`Nombre: `+ name }</p>
            <p className="status">{`Estado: `+ status }</p>
            <p className="specie">{`Especie: `+ specie }</p>
            <p className="type">{`Tipo: `+ type }</p>
            <p className="gender">{`Genero: `+ gender }</p>
            <p className="origin">{`Origen: `+ origin[`name`]}</p>           
            <p className="location"> {`Localización: `+ location[`name`]}</p> 
       </ModalContentContainer>
    );
};

export default ModalContent;