import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
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
              value={ cardName }
              onChange={ onInputChange }
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
              value={ cardDescription }
              onChange={ onInputChange }
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
              value={ cardAttr1 }
              onChange={ onInputChange }
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
              value={ cardAttr2 }
              onChange={ onInputChange }
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
              value={ cardAttr3 }
              onChange={ onInputChange }
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
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="selecionarRadidade">
            Raridade
            <select
              data-testid="rare-input"
              id="selecionarRaridade"
              className="elemento-form"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
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
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <button
            type="submit"
            data-testid="save-button"
            className="elemento-form"
            name="onSaveButtonClick"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
