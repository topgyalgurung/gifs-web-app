import React, {Component} from 'react';
import "./SearchField.css"

import Gifs from './Gifs'

class SearchField extends Component{
    constructor(props){
        super(props);
        this.state={
            input:" ",
            result:" ",
        }
    }
    handleChange=(e)=>{
        this.setState({result:e.target.value})
    }
    search=()=>{
        this.setState((state)=>({
            input:state.result
        }))
    }
    render(){
        return(
        <div>
            <h1 className="header">GIPHY SEARCH </h1>
            <h3> Type any giphy and Press Enter</h3>
            <div id="input"  > 
                 <input id="input" value={this.state.result} onChange={this.handleChange} /> 
                {/* load trending results */}
                 <button onClick={this.search}> Enter</button>    
                 <h5>List of Search Results: </h5>
            <Gifs searchTerm={this.state.input}/>
            </div>   
        </div>)
    }
}
export default SearchField;