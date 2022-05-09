import React from "react";
import SearchContainer from "./Search-style";

const Search = ({ children }) =>{
    return(
        <SearchContainer>
            {children}
        </SearchContainer>
    );
};

export default Search;