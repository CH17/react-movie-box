import React, { Component } from 'react';

class SearchBar extends Component {


    sendQuery = () => {       
       let query = this.refs.query.value;
       this.props.sendQuery(query);
    }


    render(){
        return(
            <div>
                <input type="text" placeholder="Search Movie..." ref="query" name="query" className="searchbar" onChange={this.sendQuery}/>
            </div>
        );
    };
    
}

export default SearchBar;