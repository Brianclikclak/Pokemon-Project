<script>
    import { ref, onMounted } from 'vue';
    import { PokemonList } from '../services/apiService.js';
    
    export default {
    name: 'DetailCardComponent',
    setup(){
        const pokemons = ref([]);
    
    onMounted(async() => {
        pokemons.value= await PokemonList();
        });
      
    return {
        pokemons,
        
    };
},

    };

</script>

<template>
<!-- <h2><img src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png" alt=""></h2> -->
<div class="logo">
            <a href="/"><pokeLogo/></a>
        </div>
  <div class="poke-container">
    <div class="pokemon" v-for="pokemon in pokemons" :key="pokemon.name" >      <div class="img-container">
        <img :src="pokemon.image2" alt="">
      </div>
      <div class="info">

        <span class="experience">#{{ pokemon.experience }}</span> 
        <span class="height">#{{ pokemon.height }}</span> 
        <span class="weight">#{{ pokemon.weight }}</span> 
        <span class="area">#{{ pokemon.area }}</span> 
        <h3 class="name">{{ pokemon.name }}</h3> 
        
      </div>
      <!-- <small class="type" :style="{ backgroundColor: pokemon.colors[0] }"><span>{{ pokemon.type }}</span></small> -->
      <div class="types">
        <div class="type" v-for="(type, index) in pokemon.types" :key="index" :style="{ backgroundColor: type.color }">
          {{ type.name }}
        </div>
      </div>
       
      
        

        
    </div>


  </template>


<style>

@import url("https://fonts.googleapis.com/css?family=Lato:300,400&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-image: url(../assets/images/container_bg.png);
}

h2 {
  display: flex;
  justify-content: center;
}

.poke-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.pokemon {
  background-color: #c0bfbf;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  padding: 20px;
  text-align: center;
}

.pokemon .img-container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  text-align: center;
  margin: 0 auto;
}

.pokemon .img-container img {
  max-width: 90%;
  margin-top: 20px;
  width: 200px;
    
   
    

    
}


.pokemon .info {
  margin-top: 20px;
}

.pokemon .info .number {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.8em;
  font-weight: bold;
  color: #4b4b4b;
}

.pokemon .info .name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
}
.types{
  justify-content: center;
    max-width: 200px;
    text-align: center;
    display: flex;
    gap: 5px;
}


.type{
  border-radius: 3px;
  padding: 8px;
  width: 80px;
  color: white;
  
  
}
</style>

  
