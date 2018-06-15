import React, {Component} from 'react';
import Modal from 'react-modal';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const API_KEY = "c27989434465db1206d292c9a2d14ba5";
const API_ENDPOINT = "https://api.themoviedb.org/";

class MovieModal extends Component {

    state = {
        movieData:[],
        boxData: []
      }

    getMovies = (query) => {
       
       if(query.length > 3){
            
         let API_URL = `${API_ENDPOINT}3/search/movie?query=${query}&api_key=${API_KEY}`;
       
         fetch(API_URL)
            .then(response => response.json())
            .then( response => {                
                 this.setState({
                     movieData: response.results
                 })
            })
       }       

    }

    getAddToBox = (boxMovie, index) =>{


        var newBoxArray = this.state.boxData.slice();
        newBoxArray.push(boxMovie);

          this.setState({
            movieData: this.state.movieData.filter((_, i) => i !== index),
            boxData: newBoxArray
          });

        this.props.myBox(this.state.boxData);
        
    }

    render(){
        return(
            <Modal
            isOpen= {!!this.props.isOpen}
            contentLabel ="Movie Modal"
            ariaHideApp={false}
           >
           
           <SearchBar sendQuery = { this.getMovies }/>
           <SearchResults 
                movieData = { this.state.movieData }
                sendAddToBox = {this.getAddToBox}
            />
       
            <p> <button onClick= {this.props.closeModal} className="cls-btn">Close</button></p>   
           </Modal>
        );
    };
    
}
export default MovieModal;
