import React, { Component } from 'react';
import MyCard from './MyCard';

class MyCards extends Component {

    render(){
        console.log(this.props.myBox);
        if(! this.props.myBox) return <h2>Nothing yet!!</h2>
        return(
                <div className="card_movie"> 
                    {
                    this.props.myBox.map( (movie, key) => {
                        return <MyCard  
                                    key= {movie.id} 
                                    index= {key}
                                    movie={movie}
                                />
                    })
                }
                <div className="clear"></div>
                </div>
        );
    };
    
}

export default MyCards;