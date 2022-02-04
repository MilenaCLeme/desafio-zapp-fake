import React from 'react';
import './App.css';
import Conversa from './components/Conversa';
import Header from './components/Header';
import ListContatos from './components/ListContatos';
import contatos from './api/contato';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ativo: true,
      contatoConversa: 1,
      contatos, 
    };

    this.buttonDesativarEAtiva = this.buttonDesativarEAtiva.bind(this);
    this.contatoAtivo = this.contatoAtivo.bind(this);
    this.buttonAtivar = this.buttonAtivar.bind(this);
    this.modificarAsConversar = this.modificarAsConversar.bind(this);
  }

  buttonDesativarEAtiva() {
    this.setState({
      ativo: false,
    });
  }

  buttonAtivar() {
    this.setState({
      ativo: true,
    });
  }

  contatoAtivo(index) {
    this.setState({
      contatoConversa: index,
    });
  }

  modificarAsConversar(texto, index1) {
    const text = {
      quem: 'Eu',
      fala: texto,
    }

    const { contatos } = this.state;
    const newContatos = [...contatos];

    newContatos.forEach(({conversa}, index) => {
      if (index === index1) {
        const newConversa = [...conversa, text];
        newContatos[index].conversa = newConversa
      }
    });

    this.setState({
      contatos: newContatos,
    })
  }

  render() {
    const { ativo, contatoConversa, contatos } = this.state;
    return (
      <div className="oneTelInicio">
        {
          ativo === false ? null :
          <div className="twoTelInicio">
            <Header buttonDesativa={ this.buttonDesativarEAtiva } />
            <ListContatos contatos={ contatos } contatoAtivo={ this.contatoAtivo } />
          </div>
        }
        <Conversa
          index={ contatoConversa }
          ativo={ ativo }
          contatos={ contatos }
          buttonAtivar={ this.buttonAtivar }
          modificarAsConversar={ this.modificarAsConversar }
        />
      </div>
    );
  }
}

export default App;
