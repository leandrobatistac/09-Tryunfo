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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form className="form">
        <h2 className="titulo-adicione">Adicione sua carta</h2>
        <label className="sub-titulo form-name-titulo" htmlFor="cardName">
          Nome
          <br />
          <input
            data-testid="name-input"
            type="text"
            id="cardName"
            className="form-name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label className="sub-titulo" htmlFor="cardDescription">
          Descrição
          <br />
          <textarea
            data-testid="description-input"
            id="cardDescription"
            maxLength={ 170 }
            placeholder="Insira sua descrição aqui aqui..."
            className="form-description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label className="sub-titulo form-atr-label" htmlFor="Taijutsu">
          Taijutsu
          <input
            data-testid="attr1-input"
            type="number"
            id="Taijutsu"
            className="form-atr-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label className="sub-titulo form-atr-label" htmlFor="Genjutsu">
          Ninjutsu
          <input
            data-testid="attr2-input"
            type="number"
            id="Genjutsu"
            className="form-atr-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label className="sub-titulo form-atr-label" htmlFor="Ninjutsu">
          Genjutsu
          <input
            data-testid="attr3-input"
            type="number"
            id="Ninjutsu"
            className="form-atr-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label className="sub-titulo form-atr-label" htmlFor="Imagem">
          Imagem
          <input
            data-testid="image-input"
            type="test"
            id="Imagem"
            className="form-atr-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label className="sub-titulo" htmlFor="selecionarRadidade">
          Raridade
          <br />
          <select
            data-testid="rare-input"
            id="selecionarRaridade"
            className="form-rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <div className="container-botao">
          { hasTrunfo ? (<span>Você já tem um Super Trunfo em seu baralho</span>)
            : (
              <label className="sub-titulo SuperTrunfo" htmlFor="checkbox">
                SuperTrunfo
                <input
                  data-testid="trunfo-input"
                  type="checkbox"
                  id="checkbox"
                  className="form-checkbox-input"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                {' '}
              </label>)}

          <button
            type="button"
            data-testid="save-button"
            className="form-button-input"
            name="onSaveButtonClick"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
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
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

Form.defaultProps = {
  hasTrunfo: false,
  isSaveButtonDisabled: false,
};
