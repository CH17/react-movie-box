import React, { Component } from 'react';

class Movie extends Component {

    ToBox = () => {
        this.props.sendAddToBox(this.props.movie, this.props.index );
    }

    render(){
        
        return(
                <div className="movie"> 
                    <div className="left-box">
                        <img src={"http://image.tmdb.org/t/p/w185_and_h278_bestv2/"+this.props.movie.poster_path} alt= {this.props.movie.title}/>
                    </div>
                    <div className="right-box">
                        <div className="info">
                            <div className="ratings">{this.props.movie.vote_average.toFixed(1)}</div>
                            <div className="title">{this.props.movie.title}</div>
                            <div className="release-date">{this.props.movie.release_date}</div>
                        </div>
                        <div className="description">{this.props.movie.overview}</div>
                        <div className="add-to-box-btn" onClick={this.ToBox}>Add to Box</div>  
                    </div>
                     <div className="clear"></div>
                </div>
        );
    };
    
}

export default Movie;