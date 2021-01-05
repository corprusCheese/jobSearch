<template>
  <div>
    <div class="header">
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
</style>