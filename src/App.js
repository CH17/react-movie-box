import React, { Component } from 'react';
import MovieModal from './components/MovieModal';
import MyCard from './components/MyCards';

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
    this.setState({myBox: myData});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Welcome to Moivezo</h1>
        </header>

        <div className="card-wrapper">
              <MyCard
                myBox={this.state.myBox}
              />
        </div>
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
