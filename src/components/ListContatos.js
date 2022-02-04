import React from 'react';

class ListContatos extends React.Component {
  render() {
    const { contatoAtivo, contatos } = this.props;
    return (
      <div className='caixa'>
        {
          contatos.map(({contato, mensagem, foto}, index) => (
            <button
              type="submit"
              className='bottonContato' 
              key={ index } 
              onClick={ () => {
                contatoAtivo(index)
              } }
            >
              <img className='imgListContato' src={ foto } alt="" />
              <div className='textContato'>
                <p id='nome'>{ contato }</p>
                <p>{ mensagem }</p>
              </div>
            </button>
          ))
        }
      </div>
    )
  }
}

export default ListContatos;
