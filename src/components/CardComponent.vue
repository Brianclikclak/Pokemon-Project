
<script>
    import { ref, onMounted } from 'vue';
    import { fetchPokemonList } from '../services/apiService.js';
    
    export default {
    name: 'CardComponent',
    setup(){
        const pokemons = ref([]);
    
    onMounted(async() => {
        pokemons.value= await fetchPokemonList();
        });
      
    return {
        pokemons,
    };
},
    };

</script>

<template>
  <div class="poke-container">
   
    <div v-for="pokemon in pokemons" :key="pokemon.name" >
        <span class="number">{{ pokemon.id }}</span> 
        <h3>{{ pokemon.name }}</h3>
    </div>
</div>
    <!--   
 <div class="info">
   <div class="img-container">
         <img :src="pokemons.image" :alt="pokemonData.name"/>
              
    </div>
            
          
  </div>-->
   
        
         <!--
                  
            
          
            <h3 class="name">{{ pokemon.name }}</h3>
            <small class="type">Type: <span>{{ pokeType.join(', ') }}</span></small>
          </div>
          </div>
          </div>
          toString().padStart(3, '0')
          -->
        
      
  
  </template>


<style setup>

@import url("https://fonts.googleapis.com/css?family=Lato:300,400&display=swap");

* {
  box-sizing: border-box;
}

body {
  background: #efefbb;
  background: linear-gradient(to right, #d4d3dd, #efefbb);
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
}

h1 {
  letter-spacing: 3px;
}

.poke-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.pokemon {
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  padding: 20px;
  text-align: center;
}

.pokemon .img-container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
  margin: 0 auto;
}

.pokemon .img-container img {
  max-width: 90%;
  margin-top: 20px;
}

.pokemon .info {
  margin-top: 20px;
}

.pokemon .info .number {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.8em;
}

.pokemon .info .name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
}
</style>
