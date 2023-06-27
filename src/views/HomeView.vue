
<script setup >

import pokeLogo from '../assets/images/pokeLogo.vue';
import CardComponent from '../components/CardComponent.vue';  
/* import DetailCardComponent from '../components/DetailCardComponent.vue'; */


</script>


<template>
  <div class="logo">
            <a href="/"><pokeLogo/></a>
        </div>
  <form class="filter">
        <div class="filter__search">
            <label for="search" class="search__title">Search by name </label>
            <div class="filter__container-search">
                <input type="text" id="search" class="search__input">
                <button class="search__button"> Search Pokémon</button>
            </div>
        </div>

        <div class="filter__type">
             <label for="type" class="type__title">Search by type</label>
             <div class="search__container-filter">
             <select name="type" id="type" class="type__select">
                <option value=""  class="type__option" selected>Select type </option>
                 <option value="fire"  class="type__option">Fire</option>
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

             <button class="search__button">Search Type</button>
                    
                
        </div>
    </div>
    </form>
  <CardComponent/>
</template>


