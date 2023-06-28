<template>
    <div class="search-container">
        <input type="text" class="search" placeholder="Busca tu pokemon!"/>
        <button class="searchButton"><RouterLink to="/DetailCardComponent">Search</RouterLink></button>
        <RouterView/>
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


</style>