<template>
  <div>
    <nav class="custom-nav">
      <router-link to='/info'>О проекте</router-link>
      <br>
      <router-link to='/search'>Поиск вакансий</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
.custom-nav {
  margin-bottom: 50px;
  padding: 20px;
  border-bottom: 1.5px solid darkred;
  text-align: center;
}

.custom-nav a{
  color: darkred;
}
.custom-nav a:hover{
  color: red;
  text-decoration: none;
}

</style>