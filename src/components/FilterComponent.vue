<script>
export default {
  data() {
    return {
      selectedType: '',
    };
  },
  methods: {
    searchByType() {
      this.$emit('filter-by-type', this.selectedType);
      
    },
  },
  
};

</script>
<template>
    <form class="filter">
      <div class="filter__type">
        <label for="type" class="type__title"></label>
        <div class="search__container-filter">
          <select v-model="selectedType" name="type" id="type" class="type__select">
            <option value="" class="type__option" selected>Select type</option>
            <option value="fire" class="type__option">Fire</option>
            <option value="grass" class="type__option">Grass</option>
            <option value="electric" class="type__option">Electric</option>
            <option value="water" class="type__option">Water</option>
            <option value="ground" class="type__option">Ground</option>
            <option value="rock" class="type__option">Rock</option>
            <option value="fairy" class="type__option">Fairy</option>
            <option value="poison" class="type__option">Poison</option>
            <option value="bug" class="type__option">Bug</option>
            <option value="dragon" class="type__option">Dragon</option>
            <option value="psychic" class="type__option">Psychic</option>
            <option value="flying" class="type__option">Flying</option>
            <option value="normal" class="type__option">Normal</option>
            <option value="ghost" class="type__option">Ghost</option>
            <option value="fighting" class="type__option">Fighting</option>
            <option value="ice" class="type__option">Ice</option>
            <option value="steel" class="type__option">Steel</option>
            
          </select>
           <button @click.prevent="searchByType" class="search__button">Search Type</button> 
        </div>
      </div>
    </form>
  </template>




<style scoped>

button{
  border-radius: 100px;
  border: 0.125rem solid rgba(27, 110, 236, 0.5);
  color: rgb(20, 93, 202);
  padding: 5px 20px;
  font-size: 14px;
  font-weight: 700;
  background-color: rgba(255, 203, 5, 0.644);
  margin-left: 0.625rem;
  text-decoration: none;
  cursor: pointer;
  
}

.filter {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 50px 0px;
    }

.filter__search, .filter__type {
    margin-bottom: 20px;
}


.search__title, .type__title {
    font-weight: bold;
    font-size: 14px;
    margin-right: 10px;
    }

.search__input, .type__select {
    padding: 5px;
    border: 1px solid #ccc;        
    border-radius: 4px;
    }


</style>
