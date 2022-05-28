import styled from "styled-components";

const ColoredDivContainer = styled.div`
    background: ${(props)=> props.color};
    border-radius: 8px;
    padding:20px;
`;

export default ColoredDivContainer;