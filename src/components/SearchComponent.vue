<script>
export default {
  data() {
    return {
      searchName: '',
    };
  },
  methods: {
    searchPokemon() {
      // Emitir el evento con el nombre buscado
      this.$emit('search-by-name', this.searchName);
    },
  },
};
</script>


<template>
    <div class="search-container">
      <input v-model="searchName" type="text" class="search" placeholder="Search your Pokemon!" />
      <button @click.prevent="searchPokemon" class="searchButton">Search</button>
    </div>
  </template>

<style scoped>

.search-container{
    margin: 50px 500px;
    align-items: center;
    margin-top: 50px;

}

.searchButton{
  border-radius: 100px;
  border: 0.125rem solid rgba(27, 110, 236, 0.5);
  padding: 5px 20px;
  font-size: 14px;
  font-weight: 700;
  background-color: rgb(235, 245, 148);
  margin-left: 0.625rem;
  text-decoration: none;
}
a{
    text-decoration: none;
}


</style>
=======

