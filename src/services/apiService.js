class Pokemon {
  #pokemon;
  url = "https://pokeapi.co/api/v2/pokemon/";

  async fetchAll(){
      try {
          const response = await fetch(this.url);
          const json = await response.json();

          let pokemonData = [];

          for( const pokemon of json.results ){
              pokemonData.push( pokemon );
          }
          
          return pokemonData;

      } catch (error) {
          console.error(error);
      }
  }
}
  


export  default Pokemon;

/*import axios from 'axios'

export default {
    name: 'Inicio',
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


