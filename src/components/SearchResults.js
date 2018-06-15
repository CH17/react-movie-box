import React, { Component } from 'react';
import Movie from './Movie';


class SearchResults extends Component {
    

  
    render(){
        
        if(! this.props.movieData) return <h2>Nothing yet!!</h2>
        return(           
            <div id="movieresults" className="movieresults">           
                {
                    this.props.movieData.map( (movie, key) => {
                        return <Movie  
                                    key= {movie.id} 
                                    index= {key}
                                    movie={movie}
                                    sendAddToBox = {this.props.sendAddToBox}
                                />
                    })
                }
                <div className="clear"></div>
            </div>
        );
    };
    
}

export default SearchResults;