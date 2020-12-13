<template>
  <div>
    <div style="background: #091d3e;">
    <nav class="custom-nav">
      <router-link to='/info'>О проекте</router-link>
      <br>
      <router-link to='/search'>Поиск вакансий</router-link>
    </nav>
    </div>
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
  border-bottom: 1.5px solid black;
  text-align: center;
  background-image: url("/../images/stars.jpg");
}

.custom-nav a{
  color: whitesmoke;
}
.custom-nav a:hover{
  color: orange;
  text-decoration: none;
}

</style>