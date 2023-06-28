import axios from 'axios';

const colors = {
  fire: '#FD4217',
  grass: '#228F41',
  electric: '#eed535',
  water: '#2F72FF',
  ground: '#ab9842',
  rock: '#a38c21',
  fairy: '#fdb9e9',
  poison: '#8F49FF',
  bug: '#729F3F',
  dragon: '#53a4cf',
  psychic: '#f366b9',
  flying: '#3dc7ef',
  fighting: '#d56723',
  normal: '#A4ACAF',
  ghost : '#7b62a3',
  ice : '#51c4e7',
  steel : '#9eb7b8',
}; 

export async function PokemonList() {
  const cont = 150;
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  const pokemons = [];

  try {
    for (let i = 1; i <= cont; i++) {
      const response = await axios.get(apiUrl + i);
      const pokemon = response.data;
      console.log(pokemon);

      const pokemonDetails = {
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase(),
        id: pokemon.id.toString().padStart(3, '0'),
        image: pokemon.sprites.front_default,
        image2: pokemon.sprites.front_shiny,
        experience: pokemon.base_experience,
        height: pokemon.height,
        weight: pokemon.weight,
        /*area: pokemon.location_area_encounters,
         stats: {
          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
          speed: pokemon.stats[5].base_stat,
        }, */
        types: pokemon.types.map((type) => ({
          name: type.type.name,
          color: colors[type.type.name],
        })),
      };

      pokemons.push(pokemonDetails);
    }

    return pokemons;

  } catch (error) {
    console.log("Error: No se pueden obtener los datos", error);
    return [];
  }
}