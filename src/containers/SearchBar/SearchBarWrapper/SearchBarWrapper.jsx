import React from "react";

// styled-components
import SearchBarWrapperContainer from "./SearchBarWrapper-style";

const SearchBarWrapper = ({children}) => {
    return(
        <SearchBarWrapperContainer>
            {children}
        </SearchBarWrapperContainer>
    );
};

export default SearchBarWrapper;