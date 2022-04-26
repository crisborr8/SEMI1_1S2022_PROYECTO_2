import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    constructor(props){
        super(props);
        this.state  = {
            usr: "",
            psw: ""
        }
    }
    ingresar(){
        console.log(this.state.usr);
        console.log(this.state.psw);
        this.props.isLogged(true);
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.ingresar();
        }
      }

    setUsr(evt){
        this.setState({
            usr: evt.target.value
        });
    }
    setPsw(evt){
        this.setState({
            psw: evt.target.value
        });
    }
    render() {
        return(
            <>
                <div class="container">
                    <div class="top"></div>
                    <div class="bottom"></div>
                    <div class="center">
                        <h2>Login</h2>
                        <input value={this.state.usr} onChange={evt => this.setUsr(evt)} type="email" placeholder="e-mail" onKeyDown={this._handleKeyDown}/>
                        <input value={this.state.psw} onChange={evt => this.setPsw(evt)} type="password" placeholder="contraseña" onKeyDown={this._handleKeyDown}/>
                        <h2>&nbsp;</h2>
                    </div>
                </div>
            </>
        )
    }
}

export default Login