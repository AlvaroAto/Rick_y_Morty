import styled from "styled-components";

const SearchBarContainer = styled.form`

max-width:100%;
min-height:fit-content;
max-height:100%;
padding:10px;
color: #efefef;
display:flex;    
align-items:center;          
justify-content: center;
gap: 20px;
flex-wrap:wrap;
font-family: PatrickHand-Regular; 
color: white;
font-weight: 600;
letter-spacing: 1px;
line-height: 1rem;

input{
    background-color: #00B1B7;
    border: 3px solid #AAD5E8;
    border-radius: 12px;
    padding:3px 5px;
    font-family: PatrickHand-Regular; 
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1rem;
    ::placeholder{  
        color:white;          
    }
    &#buscar{
        padding: 3px 20px;
        background-color: #0A94CF;
        border: 1px solid #EFEFEF;
        border-radius: 15px;
        cursor:pointer;
        transition: all .4s;
        &:hover{
            background-color:#AAD5E8;
            color: #0A94CF;
            text-shadow:0 0 3px #efefef;
        }
    }
    @media (max-width:620px){  
        height:100%;          
        display:inline-block;       
        background-size: cover;
        div.filter{
            height:100%;
            padding:10px 0;
        }
    }
`;
    
export default SearchBarContainer;