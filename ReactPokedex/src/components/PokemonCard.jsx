import PropTypes from "prop-types";

import "../styles/pokemonCard.css";

function PokemonCard({ pokemon }) {
  return (
    <figure className="card">
      {!pokemon.imgSrc ? (
        <p>? ? ?</p>
      ) : (
        <img className="card-img" src={pokemon.imgSrc} alt={pokemon.name} />
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }),
};

export default PokemonCard;
