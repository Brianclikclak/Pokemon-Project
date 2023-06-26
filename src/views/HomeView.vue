

<script >

import CardComponent from '../components/CardComponent.vue';

    <div class="poke-container">
      <div class="pokemon" v-for="pokemon in pokemonData" :key="pokemon.id" :style="{ backgroundColor: getColor(pokemon) }">
        <div class="img-container">
          <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        </div>
        <div class="info">
          <span class="number">{{ formatNumber(pokemon.id) }}</span>
          <h3 class="name">{{ pokemon.name }}</h3>
          <small class="type">Type: <span>{{ getPokemonType(pokemon) }}</span></small>
        </div>
      </div>
    </div>
  </div>
</template>


export default {

  name: 'Homeview',
  components: {
    CardComponent,
  },
};

  data() {
    return {
      pokemonData: []
    };
  },
  mounted() {
    this.fetchPokemon();
  },
  methods: {
    async fetchPokemon() {
      const pokemonCount = 150;
      const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
      for (let i = 1; i <= pokemonCount; i++) {
        try {
          const response = await fetch(apiUrl + i);
          const pokemon = await response.json();
          this.createPokemonCard(pokemon);
        } catch (error) {
          console.error(error);
        }
      }
    },
    createPokemonCard(pokemon) {
      this.pokemonData.push(pokemon);
    },
    getColor(pokemon) {
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
        normal: '#F5F5F5'
      };
      const types = pokemon.types.map(type => type.type.name);
      const type = types[0];
      return colors[type];
    },
    formatNumber(number) {
      return number.toString().padStart(3, '0');
    },
    getPokemonType(pokemon) {
      const types = pokemon.types.map(type => type.type.name);
      return types.join(', ');
    }
  }
  }
</script>

<style>
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


</script>


<template>
  <CardComponent/>
</template>

.pokemon .info .name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
}
</style>
