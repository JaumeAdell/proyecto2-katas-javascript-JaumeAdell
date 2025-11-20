const img = document.querySelector(".random-image");

const randomId = Math.floor(Math.random() * 151) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
  .then((response) => response.json())
  .then((pokemon) => {
    const imageUrl = pokemon.sprites.other["official-artwork"].front_default;

    img.src = imageUrl;
    img.alt = pokemon.name;
  })
  .catch((err) => console.error("Error cargando el Pokémon:", err));
