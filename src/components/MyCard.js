import React, { Component } from 'react';

class MyCard extends Component {

    render(){
               
        return(
                <div className="card_movie"> 
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
                        <div className="add-to-box-btn" onClick={this.ToBox}>Remove</div>  
                    </div>
                     <div className="clear"></div>
                </div>
                </div>
        );
    };
    
}

export default MyCard;