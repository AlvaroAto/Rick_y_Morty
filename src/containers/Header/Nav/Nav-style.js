import styled from "styled-components";

const NavContainer = styled.nav`
    a{
        font-weight: bold;
        margin: 0 10px;
        font-size: 1.2rem;
        color: ${(props) => props.color}
    }
`;

export default NavContainer;