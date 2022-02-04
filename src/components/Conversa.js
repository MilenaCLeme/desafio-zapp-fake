import React from 'react';
import { BsList } from "react-icons/bs";
import TextoConversa from './TextoConversa';

class Conversa extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      texto: '',
    }

    this.changeText = this.changeText.bind(this);
    this.clearText = this.clearText.bind(this);
  }

  changeText({ target }) {
    const text = target.value;
    this.setState({
      texto: text,
    });
  }

  clearText() {
    this.setState({
      texto: ''
    });
  }

  render() {
    const { index, ativo, buttonAtivar, contatos, modificarAsConversar } = this.props
    const { texto } = this.state;
    const { contato, foto, conversa } = contatos[index]
    return (
      <div className={ativo === false ? 'caixaApareceTrue' : 'caixaApareceFalse'}>
        <div className={ativo === false ? 'caixaConversaHeader2' : 'caixaConversaHeader'}>
          {
            ativo === true ? null :
            <button
              type='button'
              className='bottoniniciou'
              onClick={ buttonAtivar }
            >
            <BsList />
            </button>
          }
          <img className='imgListContato' src={ foto } alt="" />
          <p>{ contato }</p>
        </div>
        <div className='caixaDeConversa'>
          <TextoConversa conversa={ conversa } contato={ contato } />
        </div>
        <div className='caixaDeTexto'>
          <input
            type='text'
            className='inputEscrita inputCaixa'
            value={ texto }
            onChange={ this.changeText }
          />
          <button
            type="button"
            className='buttonEnviar'
            onClick={() => {
              modificarAsConversar(texto, index);
              this.clearText();
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    );
  }
}

export default Conversa;
