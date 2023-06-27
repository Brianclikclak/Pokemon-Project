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
      
      const pokemonDetails ={
      name: pokemon.name,
      id: pokemon.id.toString().padStart(3, '0'),
      image: pokemon.sprites.front_default,
      type: pokemon.types.map((type) => type.type.name).join(', '),
      colors: pokemon.types.map((type) => colors[type.type.name]),  
    }; 
  pokemons.push(pokemonDetails);  
  
  pokemons.forEach((pokemon) => {
    const pokemonColors = pokemon.colors;
    const pokemonTypeElements = document.querySelectorAll(`.${pokemon.name.toLowerCase()}-type`);

    pokemonTypeElements.forEach((element) => {
      element.style.color = pokemonColors[0]; // Asignar color al texto del tipo
      element.style.backgroundColor = pokemonColors[0]; // Asignar color de fondo al tipo
    });
  });

  console.log(pokemons);
    }  
  }  catch(error) {
          console.log("Error: No se pueden obtener los datos", error);
        }
  return pokemons;
}           
