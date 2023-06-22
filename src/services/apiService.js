import axios from 'axios'

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
  }