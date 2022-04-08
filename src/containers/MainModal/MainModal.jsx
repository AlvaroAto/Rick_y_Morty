import React from "react";

//components
// import HeaderH2 from "../../components/Text/Headers/HeaderH2";

//styled-components
import MainModalContainer from "./MainModal-style";

const MainModal = ({  img, children, handleClick }) =>{
    return(
        <MainModalContainer>
            <img src={ img } alt="" />
            <div className="modal-wrapper">
                <div className="topbar">                    
                    <p>Base de datos de la Ciudadela</p>
                    <span onClick={()=> handleClick()}>X</span>
                </div>
                <div className="body">
                    { children }
                </div>
            </div>
        </MainModalContainer>
    );
};

export default MainModal;