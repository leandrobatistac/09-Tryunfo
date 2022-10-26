import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="form">
          <label htmlFor="cardName">
            Nome da Carta
            <input data-testid="name-input" type="text" id="cardName" />
          </label>

          <label htmlFor="cardDescription">
            Descrição
            <input data-testid="description-input" type="textarea" id="cardDescription" />
          </label>

          <label htmlFor="Taijutsu">
            Taijutsu
            <input data-testid="attr1-input" type="number" id="Taijutsu" />
          </label>

          <label htmlFor="Genjutsu">
            Genjutsu
            <input data-testid="attr2-input" type="number" id="Genjutsu" />
          </label>

          <label htmlFor="Ninjutsu">
            Ninjutsu
            <input data-testid="attr3-input" type="number" id="Ninjutsu" />
          </label>

          <label htmlFor="Imagem">
            Imagem
            <input data-testid="image-input" type="test" id="Imagem" />
          </label>

          <label htmlFor="selecionarRadidade">
            Raridade
            <select data-testid="rare-input" id="selecionarRaridade">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          <label htmlFor="checkbox">
            SuperTrunfo
            <input data-testid="trunfo-input" type="checkbox" id="checkbox" />
          </label>

          <button type="submit" data-testid="save-button">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
