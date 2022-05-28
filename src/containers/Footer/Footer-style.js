import styled from "styled-components";

//assets
import portal from '../../assets/img/fondo_footer.webp';

const FooterContainer = styled.footer`
    width:100%;
    min-heigth:300px;
    margin-top:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-image: url(${portal});
    background-repeat: no-repeat;
    background-clip: border-box;
    background-position: center;
    background-size: cover;

`;

export default FooterContainer;