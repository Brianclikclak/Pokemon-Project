<script>
    import { ref, onMounted } from 'vue';
    import { PokemonList } from '../services/apiService.js';
    export default {
    name: 'DetailCard',
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
    
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato:300,400&display=swap");




</style>

  