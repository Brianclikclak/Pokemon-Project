<script>
export default {
  data() {
    return {
      searchName: '',
    };
  },
  methods: {
    searchPokemon() {
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

<style >

 .search-container{
   display: flex;
   justify-content: center;
   margin-top: 50px;

}

.searchButton{
  border-radius: 100px;
  border: 0.125rem solid rgba(27, 110, 236, 0.5);
  color: rgb(20, 93, 202);
  padding: 5px 20px;
  font-size: 14px;
  font-weight: 700;
  background-color: rgb(235, 245, 148);
  margin-left: 0.625rem;
  cursor: pointer;
}
a{
    text-decoration: none;
} 


</style>


