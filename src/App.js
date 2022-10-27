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
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      cardSalvas: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.salvarCarta = this.salvarCarta.bind(this);
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

  render() {
    const estadoAtual = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="container-global">
          <div className="container-formulario">
            <Form
              cardName={ estadoAtual.cardName }
              cardDescription={ estadoAtual.cardDescription }
              cardAttr1={ estadoAtual.cardAttr1 }
              cardAttr2={ estadoAtual.cardAttr2 }
              cardAttr3={ estadoAtual.cardAttr3 }
              cardImage={ estadoAtual.cardImage }
              cardRare={ estadoAtual.cardRare }
              cardTrunfo={ estadoAtual.cardTrunfo }
              onInputChange={ this.handleChange }
              isSaveButtonDisabled={ this.handleButton() }
              onSaveButtonClick={ this.salvarCarta }
            />
          </div>
          <div className="container-carta">
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
          </div>
        </div>

      </div>
    );
  }
}

export default App;
