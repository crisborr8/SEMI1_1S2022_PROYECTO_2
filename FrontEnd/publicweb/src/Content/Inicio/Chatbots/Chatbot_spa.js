import React, { Component } from 'react'
import './Chatbot.css'

class Chatbot_spa extends Component {
  constructor(props){
        super(props);
        this.state = {
            mensajes: []
        };
  }
  componentDidMount(){
    var msj = [
      {
        class: 'chat__conversation-board__message-container reversed',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcFaQjC7naERCbOviYjMqb8m8r27STidFUE_OL2lC1dGpEos34SN7mZpqDzLz91wOS1A&usqp=CAU',
        mensaje: 
          <>
            <img src='https://randomuser.me/api/portraits/men/10.jpg'/>
            Criminal: Nombre
            <br/>
            Peligrosidad: •••
            <br/>
            Recompensa: $$$
          </>
      },
      {
        class: 'chat__conversation-board__message-container',
        foto: 'https://www.nicepng.com/png/detail/13-136710_anonymous-browsing-user.png',
        mensaje: 'Mensaje numero 1 desde el bot enviando a el usuario final je je je'
      },
      {
        class: 'chat__conversation-board__message-container',
        foto: 'https://www.nicepng.com/png/detail/13-136710_anonymous-browsing-user.png',
        mensaje: 'Mensaje numero 1 desde el bot enviando a el usuario final je je je'
      },
      {
        class: 'chat__conversation-board__message-container',
        foto: 'https://www.nicepng.com/png/detail/13-136710_anonymous-browsing-user.png',
        mensaje: 'Mensaje numero 1 desde el bot enviando a el usuario final je je je'
      },
      {
        class: 'chat__conversation-board__message-container reversed',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcFaQjC7naERCbOviYjMqb8m8r27STidFUE_OL2lC1dGpEos34SN7mZpqDzLz91wOS1A&usqp=CAU',
        mensaje: 'Mensaje numero 2 desde el usuario final enviando a el bot je je je'
      }
    ]
    this.setState({mensajes: msj})
  }
  render(){
    return (
      <>
        <div class="--dark-theme" id="chat">
          <div class="chat__conversation-board">
            {this.state.mensajes.map(msj => (
              <div class={msj.class}>
                <div class="chat__conversation-board__message__person">
                  <div class="chat__conversation-board__message__person__avatar"><img src={msj.foto} alt="Monika Figi"/></div><span class="chat__conversation-board__message__person__nickname">Monika Figi</span>
                </div>
                <div class="chat__conversation-board__message__context">
                  <div class="chat__conversation-board__message__bubble"> <span>{msj.mensaje}</span></div>
                </div>
              </div>                       
            ))}

          </div>
          <div class="chat__conversation-panel">
            <div class="chat__conversation-panel__container">
              <input class="chat__conversation-panel__input panel-item" placeholder="Escriba su mensaje..."/>
              <button class="chat__conversation-panel__button panel-item btn-icon send-message-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="1036">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default Chatbot_spa;