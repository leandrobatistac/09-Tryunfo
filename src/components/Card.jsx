import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div>
        <div className="bloco-branco">
          <div className="bloco-verde">
            <div className="name-container">
              <p data-testid="name-card" className="card-name">{ cardName }</p>
            </div>
            <div className="image-container">
              <img
                data-testid="image-card"
                className="card-image"
                src={ cardImage }
                alt={ cardName }
              />
            </div>

            <div className="description">
              <p data-testid="description-card" className="card-dsc">{cardDescription}</p>
            </div>
            <div className="atributos">
              <p
                data-testid="attr1-card"
                className="card-atr1 atributo"
              >
                Tai....................................
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                { cardAttr1 }

              </p>
              <p
                data-testid="attr2-card"
                className="card-atr2 atributo"
              >
                Nin....................................
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                { cardAttr2 }

              </p>
              <p
                data-testid="attr3-card"
                className="card-atr3 atributo"
              >
                Gen....................................
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp;
                { cardAttr3 }

              </p>
              <p
                data-testid="rare-card"
                className="card-rare"
              >
                { cardRare }

              </p>
            </div>
            { cardTrunfo === true && <p data-testid="trunfo-card">Super Trunfo</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
