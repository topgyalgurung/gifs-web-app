import React, {Component} from 'react';
import "./SearchField.css"

class Gifcard extends Component{
    constructor(props){
        super(props);
        let{
            id,
            images=[""],
            title,
        }=this.props.inGiphData;
        this.state={
            id,
            title,
            images,
        }
    }
    output=()=>{
        console.log("Here you go");
    }
    render(){
        return(
        <div>
            <div>
            <video id={this.state.id} src={this.state.images["preview"]["mp4"]}autoPlay loop onMouseOver={this.output}/>
            <p id="text">{this.state.title.substring(0,this.state.title.length-3)}</p>
            </div> <br/>
            
        </div>
        );
    }
}
export default Gifcard;