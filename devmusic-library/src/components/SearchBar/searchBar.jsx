//input onChange={props.handleChange} 
import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function SearchBar(props){
    return(
        <div>
            <form>
                <input type="text" onChange={props.handleChange}/>
            </form>
        </div>
    )
}
export default SearchBar;

 

