import React, { Component } from 'react'
import Inicio from './Content/Inicio/Inicio';
import MainButton from './Content/MainButton/MainButton';

class App extends Component {
  constructor(props){
      super(props);
      this.state  = {
        clickedBtn: false
      }
  }
  manejoClickedBtn = (button) => {
    this.setState({clickedBtn: button})
  }
  render() { 
      return(
          <>
          {this.state.clickedBtn === false && <MainButton clickedBtn={this.manejoClickedBtn}>{this.state.clickedBtn}</MainButton>}
          {this.state.clickedBtn === true && <Inicio></Inicio>}
          </>
      )
  }
}

export default App;
