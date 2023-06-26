
<script setup>
import Pokemon from '../services/apiService';
import { onBeforeMount, ref } from "vue";

const props = defineProps({
		name: {
			type: String,
			default: null,
		},
		url: {
			type: String,
			
		},
	});

  let pokeDetails = ref({});
	let pokemonImg = ref();
  let pokemonName = ref("");
	let pokemonId = ref();
	let pokemonType = ref();
	let pokeType = ref("");
	
	
    onBeforeMount(async () => {
      const response = await fetch(props.url);
      const pokemon = await response.json();
      console.log(pokemon);

      pokemon= pokeDetails.value;
      pokemonName.value=pokemon.name;
      pokemonImg.value = pokemon.value.sprites.other.home.front_default;
      pokemonId.value = pokemon.value.id;
      pokemonType.value = pokemon.value.types[0].type.name;
      pokeType = pokemonType.value;

    getColor(pokemon); {

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
      }
      return colors[pokeType];
    }
})
</script>

<template>
    <div>
      <div class="poke-container">
      <div class="pokemon" v-for="pokemon in Pokemon" :key="pokemon.id" :style="{ backgroundColor: getColor(pokemon) }">
          <div class="img-container">
            <img :src="pokemonImg" :alt="pokemonName">
          </div>
          <div class="info">
            <span class="number">{{ pokemonId.toString().padStart(3, '0') }}</span>
            <h3 class="name">{{ pokemonName }}</h3>
            <small class="type">Type: <span>{{ pokeType.join(', ') }}</span></small>
          </div>
        </div>
      </div>
   </div>
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
