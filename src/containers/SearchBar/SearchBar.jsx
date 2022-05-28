import React from "react";

// styled-components
import SearchBarContainer from "./SearchBar-style";

const SearchBar = ()=>{
    return(
        <SearchBarContainer>
            <input type="text" name="name" placeholder="Search by name"/>    
          <div className="filter">
            <label className="title">Status</label>
            <div className="options">
              <div className="row">
                <input 
                  type="radio" 
                  id="allstatus"
                  name="status" 
                  defaultChecked="checked"
                  value="" 
                  />
                <label htmlFor="all">all</label>
                <input 
                  type="radio" 
                  id="alive"
                  name="status" 
                  value="Alive" 
                />
                <label htmlFor="alive">alive</label>                  
              </div>
              <div className="row">   
                <input 
                  type="radio" 
                  id="dead"
                  name="status" 
                  value="Dead" 
                />
                <label htmlFor="dead">dead</label>               
                <input 
                  type="radio" 
                  id="unknown"
                  name="status" 
                  value="Unknown" 
                />
                <label htmlFor="unknown">unknown</label>                  
                
              </div>
            </div>
          </div>        
          <div className="filter">
            <label className="title">Gender</label>
            <div className="options">
              <div className="row">
                <input 
                  type="radio" 
                  id="allgender"
                  name="gender" 
                  defaultChecked="checked"
                  value="" 
                />
                <label htmlFor="all">all</label>
                <input 
                  type="radio" 
                  id="male"
                  name="gender" 
                  value="Male" 
                />
                <label htmlFor="male">male</label>
                <input 
                  type="radio" 
                  id="female"
                  name="gender" 
                  value="Female" 
                />
                <label htmlFor="female">female</label>
              </div>
              <div className="row">
                <input 
                  type="radio" 
                  id="genderless"
                  name="gender" 
                  value="Genderless" 
                />
                <label htmlFor="genderless">genderless</label>
                <input 
                  type="radio" 
                  id="unknown"
                  name="gender" 
                  value="Unknown" 
                />
                <label htmlFor="unknown">unknown</label>                  
              </div>
            </div>
          </div>
          <input type="submit" value="buscar" id="buscar" />
        </SearchBarContainer>
    );
};

export default SearchBar;