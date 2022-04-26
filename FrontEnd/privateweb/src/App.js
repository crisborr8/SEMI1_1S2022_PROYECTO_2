import React, { Component } from 'react'
import Inicio from './Inicio/Inicio';
import Login from './Login/Login';

class App extends Component {
  constructor(props){
      super(props);
      this.state  = {
        isLogged: false
      }
  }
  manejoIsLogged = (logged) => {
    this.setState({isLogged: logged})
  }
  render() {
      return(
          <>
          {this.state.isLogged === false && <Login isLogged={this.manejoIsLogged}>{this.state.isLogged}</Login>}
          {this.state.isLogged === true && <Inicio></Inicio>}
          </>
      )
  }
}

export default App;
