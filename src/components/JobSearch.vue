<template>
  <div class="container">
    <form class="form-inline d-flex justify-content-center md-form form-sm mt-5">
      <b-icon-search></b-icon-search>
      <input id ="searchInput" class="form-control form-control-sm m-3 w-50 h-35" style="height: 35px" type="text" placeholder="Нажми"
             aria-label="Search" v-on:click="showSearchPreset">
      <div style="width: max-content">
      <button id="searchButton" type="button" class="btn btn-dark d-none" style="height: 35px"
      v-on:click="sendQueryToHhSite">Найти</button>
      <button id ="showButton" class="btn btn-dark d-none" style="height: 35px" type="text"
             aria-label="Search" v-on:click="showHideSetting">Настройки</button>
      </div>
    </form>
    <div class="search-preset" id="preset">
      <p style="text-align: center; margin: 20px; color: gray; font-size: 18px">Опиши себя..</p>
      <div class="row">
        <div class="search-option col-4">
          <label for="grade">Грейд</label>
          <select class="form-control" v-model="selectedGrades" id="grade">
            <option v-for="grade in grades" v-bind:value="grade.name" v-bind:key="grade.id">{{ grade.name }}</option>
          </select>
        </div>
        <div class="search-option col-4">
          <label for="language">Язык</label>
          <select class="form-control" v-model="selectedLanguages" id="language">
            <option v-for="language in languages" v-bind:value="language.name" v-bind:key="language.id">{{ language.name }}</option>
          </select>
        </div>
        <div class="search-option col-4">
          <label for="spec">Кто ты?</label>
          <select class="form-control" v-model="selectedSpec" id="spec">
            <option v-for="spec in specs" v-bind:value="spec.name" v-bind:key="spec.id">{{ spec.name }}</option>
          </select>
        </div>
      </div>
      <div class="ok-rank d-none" style="border: 1px solid green">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
             x="0px" y="0px"
             width="70.3px"
             height="70.301px"
               viewBox="0 0 70.3 70.301"
             style="enable-background:new 0 0 70.3 70.301;" xml:space="preserve">
        <g>
          <path class="st0"
                d="m 22.415077,40.934734 c 10.069026,20.389914 10.069026,17.389914 14.069026,16.389914 6.037651,-38.63337 11.037651,-38.63337 11.037651,-40.63337"/>
        </g>
        </svg>
      </div>
    </div>
    <Vacancies></Vacancies>
  </div>
</template>

<script>
import {HandlerFactory} from "@/classes/Handlers/factory/HandlerFactory";
import {mapGetters, mapActions, mapMutations} from "vuex"
import Vacancies from "./Vacancies"

export default {
  name: 'JobSearch',
  components: {
    Vacancies
  },
  data: () => {
    return {
      handlerFactory: HandlerFactory,
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
        {id: 2, name: "Frontend"}
      ]
    }
  },
  methods: {
    ...mapActions(['fetchVacancies', 'refresh']),
    ...mapGetters(['allVacancies', "isAllSet", "getIsOkShowed",
      "getSelectedSpec","getSelectedLanguages", "getSelectedGrades", "getSearchInput"]),
    ...mapMutations(['setIsOkShowed']),
    getStore: function () {
      return this.$store.state
    },
    showSearchPreset: function() {
      //elements
      let block = document.getElementById("preset");
      let input = document.getElementById("searchInput");
      let searchButton = document.getElementById("searchButton");
      let showButton = document.getElementById("showButton");
      //actions
      block.classList.add('search-preset-show');
      block.classList.remove('d-none');
      input.placeholder = "Ответь на вопросы ниже или напиши поисковую строку сам";
      searchButton.classList.remove('d-none');
      showButton.classList.remove('d-none');
      //
      input.value = this.getSearchInput()
      if (this.getIsOkShowed()) {
        this.hideOk()
      }
    },
    showHideSetting: function() {
      let block = document.getElementById("preset");
      if (block.classList.contains('d-none')) {
        block.classList.add('search-preset-show');
        block.classList.remove('d-none')
      } else {
        block.classList.add('d-none')
        this.hideOk()
      }
    },
    showOk: function() {
      let ok = document.getElementsByClassName("ok-rank")[0];
      ok.classList.remove('d-none');
      this.setIsOkShowed(true);
    },
    hideOk: function() {
      let ok = document.getElementsByClassName("ok-rank")[0];
      ok.classList.add('d-none');
    },
    removeChooseView: function() {
      let block = document.getElementById("preset");
      block.classList.add('d-none');
    },
    sendQueryToHhSite: function() {
      let text = document.getElementById("searchInput").value.trim();
      this.fetchVacancies({text:text, page:0})
      .then(() => {
        console.log(this.allVacancies())
        if (this.allVacancies() !== []) {
          this.removeChooseView();
          this.hideOk();
        }
      })
    },
  },
  updated: function () {
    document.getElementById("searchInput").value = this.getSearchInput();
    if (this.isAllSet() && this.getIsOkShowed() === false) {
      this.showOk()
    }
  },
  computed: {
    selectedGrades: {
      get() {
        return this.$store.state.jobSearch.selectedGrades
      },
      set(value) {
        this.$store.dispatch('refresh',{grades:value})
      }
    },
    selectedLanguages: {
      get() {
        return this.$store.state.jobSearch.selectedLanguages
      },
      set(value) {
        this.$store.dispatch('refresh',{languages:value})
      }
    },
    selectedSpec: {
      get() {
        return this.$store.state.jobSearch.selectedSpec
      },
      set(value) {
        this.$store.dispatch('refresh',{spec:value})
      }
    },
    searchInput: {
      get() {
        return this.$store.state.jobSearch.searchInput
      },
      set(value) {
        this.$store.commit('setSearchInput', value)
      }
    },
  }
}
</script>
