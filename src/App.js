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
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const estadoAtual = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
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
        />
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
    );
  }
}

export default App;
