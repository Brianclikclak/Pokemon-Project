<!-- <script>
    import { ref, onMounted } from 'vue';
    import { PokemonList } from '../services/apiService.js';
    
    export default {
    name: 'CardComponent',
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

</script> -->

<!-- <template>
  <div class="poke-container">

    <div class="pokemon" v-for="pokemon in pokemons" :key="pokemon.name" @click="DetailCardComponent">
      <div class="card-face front-container">
        <div class="img-container">
          <img :src="pokemon.image" alt="">
        </div>
        <div class="info">
          <span class="number">#{{ pokemon.id }}</span> 
          <h3 class="name">{{ pokemon.name }}</h3> 
        </div>
      <div class="types">
        <div class="type" v-for="(type, index) in pokemon.types" :key="index" :style="{ backgroundColor: type.color }">
          {{ type.name }}
        </div>
      </div>   
    </div> 
  
    
    <div class="card-face back-container">
      <div class="img-container">
        <img :src="pokemon.image2" alt="">
      </div>
      <div class="back-info">
        <span class="height" data-prefix="Height:"> {{ pokemon.height }}</span> 
        <span class="weight" data-prefix="Weight:"> {{ pokemon.weight }}</span>
        <span data-prefix="HP:">{{ pokemon.stats.hp }}</span>
        <span data-prefix="Attack:">{{ pokemon.stats.attack }}</span>
        <span data-prefix="Defense:">{{ pokemon.stats.defense }}</span> 
        <span data-prefix="Special-Defense:">{{ pokemon.stats.specialDefense }}</span> 
        <span data-prefix="Special-Attack:">{{ pokemon.stats.specialAttack }}</span>
        <span data-prefix="Speed:">{{ pokemon.stats.speed }}</span>  

      </div> 
    </div> 
  </div> 
</div>
</template> -->


<!-- <style>

@import url("https://fonts.googleapis.com/css?family=Lato:300,400&display=swap");

* {
  box-sizing: border-box;
}

 body {
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: row;
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
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto;
}

.pokemon {
  background-color: rgb(235, 245, 148);
  
  border-radius: 10px;
  box-shadow: 0 3px 25px rgba(27, 110, 236, 0.5);
  transform-style: preserve-3d;
  transition: transform 0.4s;
  position: relative;
  width: 270px;
  height: 350px;  
  margin: 10px;
  perspective: 1000px;
}

.pokemon:hover {
      transform: rotateY(180deg);
}

.card-face{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.back-container{
  transform: rotateY(180deg);
}

.pokemon .img-container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
} 

.pokemon .img-container img {
  max-width: 90%;
  width: 300px;
} 


.pokemon .info {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 200px;
  margin: 0 auto;
}

.type{
  border-radius: 3px;
  padding: 8px;
  width: 80px;
  color: white;
  text-align: center;
} 

.back-info{
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  font-size: 25px;
  
}

.back-info span::before {
  content: attr(data-prefix);
  font-weight: bold;
  color: rgb(20, 93, 202);
  padding: 10px;
}

</style> -->




<template>
  <div>
    <FilterComponent @filter-by-type="handleFilterByType" />
    <SearchComponent @search-by-name="handleSearchByName" />

    <div class="poke-container">
      <div class="pokemon" v-for="pokemon in filteredPokemons" :key="pokemon.name" @click="toggleCard(pokemon)">
        <div class="card-face front-container">
          <div class="img-container">
            <img :src="pokemon.image" alt="">
          </div>
          <div class="info">
            <span class="number">#{{ pokemon.id }}</span>
            <h3 class="name">{{ pokemon.name }}</h3>
          </div>
          <div class="types">
            <div class="type" v-for="(type, index) in pokemon.types" :key="index" :style="{ backgroundColor: type.color }">
              {{ type.name }}
            </div>
          </div>
        </div>

        <div class="card-face back-container">
          <div class="back-info">
            <span class="height" data-prefix="Height:">{{ pokemon.height }}</span>
            <span class="weight" data-prefix="Weight:">{{ pokemon.weight }}</span>
            <span data-prefix="HP:">{{ pokemon.stats.hp }}</span>
            <span data-prefix="Attack:">{{ pokemon.stats.attack }}</span>
            <span data-prefix="Defense:">{{ pokemon.stats.defense }}</span>
            <span data-prefix="Special-Defense:">{{ pokemon.stats.specialDefense }}</span>
            <span data-prefix="Special-Attack:">{{ pokemon.stats.specialAttack }}</span>
            <span data-prefix="Speed:">{{ pokemon.stats.speed }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { PokemonList } from '../services/apiService.js';
import FilterComponent from './FilterComponent.vue';
import SearchComponent from './SearchComponent.vue';

export default {
  name: 'CardComponent',
  components: {
    FilterComponent,
    SearchComponent,
  },
  setup() {
    const pokemons = ref([]);
    const filteredPokemons = ref([]);
    const searchName = ref('');
    const selectedType = ref('');

    onMounted(async () => {
      pokemons.value = await PokemonList();
      filteredPokemons.value = pokemons.value;
    });

    const toggleCard = (pokemon) => {
      pokemon.showBack = !pokemon.showBack;
    };

    const handleFilterByType = (type) => {
      selectedType.value = type;
      if (selectedType.value !== '') {
        filteredPokemons.value = pokemons.value.filter((pokemon) =>
          pokemon.types.some((type) => type.name === selectedType.value)
        );
      } else {
        filteredPokemons.value = pokemons.value;
      }
    };

    const handleSearchByName = (name) => {
      searchName.value = name;
      if (searchName.value.trim() !== '') {
        filteredPokemons.value = pokemons.value.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchName.value.trim().toLowerCase())
        );
      } else {
        filteredPokemons.value = pokemons.value;
      }
    };

    return {
      filteredPokemons,
      toggleCard,
      handleFilterByType,
      handleSearchByName,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:300,400&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: row;
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
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto;
}

.pokemon {
  background-color: rgb(235, 245, 148);
  border-radius: 10px;
  box-shadow: 0 3px 25px rgba(27, 110, 236, 0.5);
  transform-style: preserve-3d;
  transition: transform 0.4s;
  position: relative;
  width: 270px;
  height: 350px;
  margin: 10px;
  perspective: 1000px;
}

.pokemon:hover {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.back-container {
  transform: rotateY(180deg);
}

.pokemon .img-container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
}

.pokemon .img-container img {
  max-width: 90%;
  width: 300px;
}

.pokemon .info {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

.types {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 200px;
  margin: 0 auto;
}

.type {
  border-radius: 3px;
  padding: 8px;
  width: 80px;
  color: white;
  text-align: center;
}

.back-info {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  font-size: 25px;
}

.back-info span::before {
  content: attr(data-prefix);
  font-weight: bold;
  color: rgb(20, 93, 202);
  padding: 10px;
}
</style>
