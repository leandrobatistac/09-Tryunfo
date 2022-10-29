import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: 'https://i.imgur.com/sZLuwH8.png',
      cardRare: 'normal',
      cardTrunfo: false,
      cardSalvas: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.salvarCarta = this.salvarCarta.bind(this);
    this.temTrunfo = this.temTrunfo.bind(this);
    this.cartasCriadas = this.cartasCriadas.bind(this);
    this.removerCarta = this.removerCarta.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleButton() {
    const maximo = 90;
    const total = 210;
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    if (
      cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
      || Number(cardAttr1) > maximo
      || Number(cardAttr2) > maximo
      || Number(cardAttr3) > maximo
      || Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > total
      || Number(cardAttr1) < 0
      || Number(cardAttr2) < 0
      || Number(cardAttr3) < 0
    ) {
      return true;
    }
  }

  salvarCarta(event) {
    event.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardSalvas,
    } = this.state;
    const cartaAtual = {
      name: cardName,
      description: cardDescription,
      atr1: cardAttr1,
      atr2: cardAttr2,
      atr3: cardAttr3,
      image: cardImage,
      rare: cardRare,
      trunfo: cardTrunfo,
    };
    cardSalvas.push(cartaAtual);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
    });
  }

  temTrunfo() {
    const { cardSalvas } = this.state;
    return cardSalvas.filter((carta) => carta.trunfo === true).length;
  }

  removerCarta(cardName) {
    const { cardSalvas } = this.state;
    const listraFiltrada = cardSalvas.filter((element) => element.name !== cardName);
    this.setState({
      cardSalvas: listraFiltrada,
    });
  }

  cartasCriadas(atuais) {
    return atuais.map((carta) => (
      <div className="carta-adicionada" key={ carta.name }>
        <Card
          key={ carta.name }
          cardName={ carta.name }
          cardDescription={ carta.description }
          cardAttr1={ carta.atr1 }
          cardAttr2={ carta.atr2 }
          cardAttr3={ carta.atr3 }
          cardImage={ carta.image }
          cardRare={ carta.rare }
          cardTrunfo={ carta.trunfo }
        />
        <button
          className="button-excluir"
          type="submit"
          onClick={ () => this.removerCarta(carta.name) }
          data-testid="delete-button"
        >
          Excluir
        </button>
      </div>
    ));
  }

  render() {
    const estadoAtual = this.state;
    let error;
    if (this.temTrunfo() > 0 && estadoAtual.cardTrunfo === true) {
      error = true;
    }

    return (
      <div>
        <div className="elipse-18" />
        <div className="elipse-16" />
        <main className="container-global">
          <section className="container-logo">
            <img
              src="https://uploaddeimagens.com.br/images/004/080/491/original/logo_tryunfo.png?1666915957"
              alt="logo-trybe"
              className="logo-trybe"
            />
          </section>
          <div className="box-branco">
            <section className="container-form">
              <Form
                cardName={ estadoAtual.cardName }
                cardDescription={ estadoAtual.cardDescription }
                cardAttr1={ estadoAtual.cardAttr1 }
                cardAttr2={ estadoAtual.cardAttr2 }
                cardAttr3={ estadoAtual.cardAttr3 }
                cardImage={ estadoAtual.cardImage }
                cardRare={ estadoAtual.cardRare }
                onInputChange={ this.handleChange }
                isSaveButtonDisabled={ this.handleButton() }
                onSaveButtonClick={ this.salvarCarta }
                hasTrunfo={ error || undefined }
                cardTrunfo={ estadoAtual.cardTrunfo }
              />
            </section>

            <section className="container-card">
              <h2 className="titulo-preview">Pré-Visualização</h2>
              <Card
                cardName={ estadoAtual.cardName }
                cardDescription={ estadoAtual.cardDescription }
                cardAttr1={ estadoAtual.cardAttr1 }
                cardAttr2={ estadoAtual.cardAttr2 }
                cardAttr3={ estadoAtual.cardAttr3 }
                cardImage={ estadoAtual.cardImage }
                cardRare={ estadoAtual.cardRare }
                cardTrunfo={ estadoAtual.cardTrunfo }
                onInputChange={ this.handleChange }
              />
            </section>
          </div>
          <h2 className="titulo-todas-cartas">Todas as Cartas</h2>
          <section className="container-baralho">
            { this.cartasCriadas(estadoAtual.cardSalvas) }
          </section>
        </main>

      </div>
    );
  }
}

export default App;
