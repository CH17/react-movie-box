import React, { Component } from 'react';
import MovieModal from './components/MovieModal';

import './App.css';

class App extends Component {

  state = {
    isOpen:false,
    myBox: []
  }
 
  openModal = () => {
    this.setState({isOpen: true});
  }

  closeModal = () => {
    this.setState({isOpen: false});
  }

  myBoxData = (myData) => {
      //console.log(myData);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button className="add-button" onClick={this.openModal}>Add Movie to the Card</button>
        </p>
        <MovieModal 
          myBox = {this.myBoxData}
          isOpen={this.state.isOpen}
          closeModal= {this.closeModal}
        />
      </div>
    );
  }
}

export default App;
