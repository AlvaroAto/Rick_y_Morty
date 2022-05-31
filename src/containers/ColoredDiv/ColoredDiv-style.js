import styled from "styled-components";

const ColoredDivContainer = styled.div`
    background: ${(props)=> props.color};
    border-radius: 8px;
    padding:20px;
    margin-top:10px; 

  
`;

export default ColoredDivContainer;