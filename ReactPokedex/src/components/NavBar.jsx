import PropTypes from "prop-types";

import "../styles/navBar.css";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  if (pokemonIndex === 3) {
    console.log("Pika pika !!!");
  }

  return (
    <nav>
      {pokemonIndex > 0 && (
        <button className="btn_previous" onClick={handleClickPrevious}>
          Précédent
        </button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button className="btn_next" onClick={handleClickNext}>
          Suivant
        </button>
      )}

      <ul>
        {pokemonList.map((pokemon, index) => (
          <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
            {!pokemon.imgSrc ? `?` : <img src={pokemon.imgSrc} alt={pokemon.name} />}
          </button>
        ))}
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
};

export default NavBar;
