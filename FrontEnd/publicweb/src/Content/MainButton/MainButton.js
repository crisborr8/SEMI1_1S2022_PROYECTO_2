import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ParticleEffectButton from 'react-particle-effect-button'

import './MainButton.css'

class MainButton extends Component {
    constructor(props){
        super(props);
        this.state  = {
            hidden: false,
            animating: false
        }
    }

    render() {
        const {
            hidden,
            animating
        } = this.state

        return (
            <>
                <video autoPlay muted loop id="myVideo">
                    <source src="./MainBackground.mp4" type="video/mp4"/>
                </video>
                <div
                className="buttons-div-container"
                >
                    <ParticleEffectButton
                    hidden={hidden}
                    onComplete={this._onAnimationComplete}
                    >
                        <button
                        className="particle-effect-button"
                        onClick={this._onToggle}
                        >
                            Ingresar
                        </button>
                    </ParticleEffectButton>
                </div>
            </>
        )
    }

    _onToggle = () => {
        if (this.state.animating) return

        this.setState({
            hidden: !this.state.hidden,
            animating: true
        })
    }

    _onAnimationComplete = () => {
        this.setState({
            animating: false
        })
        this.props.clickedBtn(true)
    }
}

export default MainButton