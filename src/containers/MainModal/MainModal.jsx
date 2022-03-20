import React from "react";

//components
import HeaderH2 from "../../components/Text/Headers/HeaderH2";

//styled-components
import MainModalContainer from "./MainModal-style";

const MainModal = ({ children, handleClick }) =>{
    return(
        <MainModalContainer>
            <div className="modal-wrapper">
                <div className="topbar">
                    <HeaderH2 text="Base de datos de la Ciudadela"></HeaderH2>
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