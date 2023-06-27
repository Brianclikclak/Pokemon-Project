

import axios from 'axios';

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


export async function fetchPokemonList(){
  const cont = 150;
  const apiUrl="https://pokeapi.co/api/v2/pokemon/";
  const pokemons =[];
  try{
    for (let i = 1; i <= cont ; i++) {
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

    console.log(pokemons);
    }  
  }  catch(error) {
          console.log("Error: No se pueden obtener los datos", error);
        }
  return pokemons;
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



