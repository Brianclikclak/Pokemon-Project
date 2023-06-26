

import axios from 'axios';


export async function fetchPokemonList(){
  const cont =150;
  const apiUrl="https://pokeapi.co/api/v2/pokemon/";
  const pokemons =[];
  try{
    for (let i = 1; i <= cont ; i++) {
      const response = await axios.get(apiUrl + i);
      const pokemon = response.data;
      const pokemonDetails ={
      name: pokemon.name,
      id: pokemon.id,
      image: pokemon.sprites.front_default,
      type: pokemon.types[0].type.name,
    };
    pokemons.push(pokemonDetails);  
    console.log(pokemons);
    }
  }  catch(error) {
          console.log("Error: No se pueden obtener los datos", error);
        };
  return pokemons;
}           


export function Pokemones(){
    pokeDetails.value = pokemonData;
		pokemonImg.value = pokemonData.value.sprites.other.home.front_default;
		pokemonId.value = pokemonData.value.id;
		pokemonType.value = pokemonData.value.types[0].type.name;
		pokeType = pokemonType.value;

    return Pokemones();    
  }  
  

export function colorPokemon(){
  
  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
  };
    const types = pokemon.types.map(type => type.type.name);
    const type = types[0];
    return colors[type];
                       
  }

    
/*import axios from 'axios'

export default {
    name: 'Pokemon',
    data(){
      return{
        posts:[]
      }
    },
    mounted(){
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"')

      .then(function(response){
        //let vue = this;
        this.posts= response.data;
        console.log(this.posts)
      })
    }
  }*/



