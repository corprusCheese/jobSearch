<template>
  <div>
    <form class="form-inline d-flex justify-content-center md-form form-sm mt-5">
      <b-icon-search></b-icon-search>
      <input class="form-control form-control-sm ml-3 w-50" type="text" placeholder="Нажми"
             aria-label="Search" v-on:click="showSearchPreset">
    </form>
    <div class="search-preset" id="preset">
      <p style="text-align: center; margin: 20px; color: gray; font-size: 20px">Можешь написать запрос или просто выбрать, что хочешь..</p>
      <div class="search-option">
        <label for="grade">Грейд</label>
        <select class="form-control-sm w-25 m-3" v-model="selectedGrades" id="grade" >
          <option v-for="grade in grades" v-bind:value="grade.name" v-bind:key="grade.id">{{ grade.name }}</option>
        </select>
      </div>
      <div class="search-option">
        <label for="language">Язык</label>
        <select class="form-control-sm w-25 m-3" v-model="selectedLanguages" id="language" >
          <option v-for="language in languages" v-bind:value="language.name" v-bind:key="language.id">{{ language.name }}</option>
        </select>
      </div>
      <div class="search-option">
        <label for="language">Кто ты?</label>
        <select class="form-control-sm w-25 m-3" v-model="selectedLanguages" id="spec" >
          <option v-for="spec in specs" v-bind:value="spec.name" v-bind:key="spec.id">{{ spec.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobSearch',
  data: () => {
    return {
      selectedGrades: [],
      selectedLanguages: [],
      grades: [
        {id: 0, name: "junior"},
        {id: 1, name: "middle"},
        {id: 2, name: "senior"}
      ],
      languages: [
        {id: 0, name: "PHP"},
        {id: 1, name: "C#"},
        {id: 2, name: "Java"},
        {id: 3, name: "JavaScript"},
        {id: 4, name: "Python"},
        {id: 5, name: "Delphi"},
      ],
      specs: [
        {id: 0, name: "Fullstack"},
        {id: 1, name: "Backend"},
        {id: 2, name: "Frontend"},
        {id: 3, name: "Тупой лох-вкатыш с курсов"},
      ]
    }
  },
  props: {
  },
  methods: {
    showSearchPreset: () => {
      let block = document.getElementById("preset");
      block.classList.add('search-preset-show');
    }
  }
}
</script>

<style>
.search-preset {
  width: 100%;
  height: 50px;
  /*border-top: darkred 1px solid;*/
  margin: 20px auto;
  display: none;
}

.search-preset-show {
  display: block;
  animation: showBlock 1s linear forwards;
}

.search-option {
  display: inline;
  margin-left: 5px;
  margin-right: 5px;
}

@keyframes showBlock {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
