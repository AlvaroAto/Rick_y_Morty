import styled from "styled-components";


//assets
import circuit from '../../../assets/img/circuit_board.webp';

const SearchBarWrapperContainer = styled.div`
width:100%;
    
background-image: url(${circuit});
background-repeat: no-repeat;
background-clip: border-box;
background-position: center;
background-size: cover;
border-radius: 0 0 8px 8px;  
box-shadow:0 4px 5px rgba(166, 241, 254, 0.4);   
text-align:center;

`;

export default SearchBarWrapperContainer;