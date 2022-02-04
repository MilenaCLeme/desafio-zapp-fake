import React from 'react';

class TextoConversa extends React.Component {
  render() {
    const { conversa, contato } = this.props;
    return (
      <div className='caixaDeConversa textoDeConversaCaixa'>
        {
          conversa.map(({quem, fala}) => (
            <div className={contato !== quem ? 'caixaTextoPE' : 'caixaTextoC'}>
              <div className='caixaDoTexo'>
                <p className='textoPrinc'>{ quem }</p>
                <p>{ fala }</p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default TextoConversa;
