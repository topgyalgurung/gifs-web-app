import React,{Component} from 'react';
import axios from 'axios';
import Gifcard from './Gifcard';
import './SearchField.css'

// Trending Search: http://api.giphy.com/v1/gifs/trending?api_key=
// Random Search:  http://api.giphy.com/v1/gifs/random?api_key=
// Regular Search http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=

class Gifs extends Component{
    constructor(props){
        super(props);
        this.state={
            rawresult:" ",
            rawdata:[], 
            inputapi:'http://api.giphy.com/v1/gifs/search?q=', //regular search
            //my api key
            apikey:"5qEOyuxaqFJaOdDihyMlaP4bRorM2hMF",  
        }
        //this.fetchData=this.fetchData.bind(this);
    }
    fetchData(){
        axios.get(this.state.inputapi+this.props.searchTerm+'&api_key='+this.state.apikey)
        .then(response=>{
            const rawresult=response.data
            this.setState({rawdata:rawresult["data"]});
        }).catch(error=>console.log(error));
    }
    componentDidUpdate(prevProps){
        if(prevProps.searchTerm!==this.props.searchTerm)
            this.fetchData();
    }
    render(){
        let gifdata=this.state.rawdata.map((d,i)=>{
            return(<div className="result" key={d.id}>
                <li><Gifcard inGiphData={d}/></li>
            </div>)
        })
        return(<div id="data">
            <p> {gifdata}</p>
        </div>)
    }
}
export default Gifs;