import React from 'react';

class Form extends React.Component {
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
      // hasTrunfo: false,
      // isSaveButtonDisabled: false,
      // onInputChange: (),
      // onSaveButtonClick (),
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
    const estado = this.state;
    return (
      <div className="container-cadastro">
        <h2>Adicione sua carta</h2>
        <form className="form">
          <label htmlFor="cardName">
            Nome da Carta
            <input
              data-testid="name-input"
              type="text"
              id="cardName"
              className="elemento-form"
              name="cardName"
              value={ estado.cardName }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="cardDescription">
            Descrição
            <input
              data-testid="description-input"
              type="textarea"
              id="cardDescription"
              className="elemento-form"
              name="cardDescription"
              value={ estado.cardDescription }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="Taijutsu">
            Taijutsu
            <input
              data-testid="attr1-input"
              type="number"
              id="Taijutsu"
              className="elemento-form"
              name="cardAttr1"
              value={ estado.cardAttr1 }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="Genjutsu">
            Genjutsu
            <input
              data-testid="attr2-input"
              type="number"
              id="Genjutsu"
              className="elemento-form"
              name="cardAttr2"
              value={ estado.cardAttr2 }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="Ninjutsu">
            Ninjutsu
            <input
              data-testid="attr3-input"
              type="number"
              id="Ninjutsu"
              className="elemento-form"
              name="cardAttr3"
              value={ estado.cardAttr3 }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="Imagem">
            Imagem
            <input
              data-testid="image-input"
              type="test"
              id="Imagem"
              className="elemento-form"
              name="cardImage"
              value={ estado.cardImage }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="selecionarRadidade">
            Raridade
            <select
              data-testid="rare-input"
              id="selecionarRaridade"
              className="elemento-form"
              name="cardRare"
              value={ estado.cardRare }
              onChange={ this.handleChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          <label htmlFor="checkbox">
            SuperTrunfo
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="checkbox"
              className="elemento-form"
              name="cardTrunfo"
              value={ estado.cardTrunfo }
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="submit"
            data-testid="save-button"
            className="elemento-form"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
