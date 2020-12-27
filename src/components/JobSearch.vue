<template>
  <div class="container">
    <form class="form-inline d-flex justify-content-center md-form form-sm mt-5">
      <b-icon-search></b-icon-search>
      <input id ="searchInput" class="form-control form-control-sm m-3 w-50 h-35" style="height: 35px" type="text" placeholder="Нажми"
             aria-label="Search" v-on:click="showSearchPreset">
      <button id="searchButton" type="button" class="btn btn-dark d-none" style="height: 35px"
      v-on:click="sendQueryToSite">Найти</button>
    </form>
    <div class="search-preset" id="preset">
      <p style="text-align: center; margin: 20px; color: gray; font-size: 18px">Опиши себя по лычкам и я дам тебе новую..</p>
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
      <div class="ok-rank d-none">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
             x="0px" y="0px"
             width="70.3px"
             height="70.301px"
               viewBox="0 0 70.3 70.301"
             style="enable-background:new 0 0 70.3 70.301;" xml:space="preserve">
        <g>
          <path class="st0"
                d="m 24.415077,45.934734 c 10.069026,20.389914 10.069026,17.389914 14.069026,16.389914 6.037651,-38.63337 11.037651,-38.63337 11.037651,-40.63337"/>
        </g>
        </svg>
        <p>Поздравляю, ты <b>петух</b>.</p>
      </div>
    </div>
  </div>
</template>

<script>
import {HandlerFactory} from "@/classes/Handlers/factory/HandlerFactory";

export default {
  name: 'JobSearch',
  data: () => {
    return {
      selectedGrades: [],
      selectedLanguages: [],
      selectedSpec: [],
      searchInput: "",
      searchData: null,
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
        {id: 2, name: "Frontend"},
        {id: 3, name: "Тупой лох-вкатыш с курсов"},
      ]
    }
  },
  methods: {
    showSearchPreset: () => {
      //elements
      let block = document.getElementById("preset");
      let input = document.getElementById("searchInput");
      let searchButton = document.getElementById("searchButton");
      //actions
      block.classList.add('search-preset-show');
      input.placeholder = "Ответь на вопросы ниже или напиши поисковую строку сам";
      searchButton.classList.remove('d-none');
    },
    sendQueryToSite: function() {
      let text = document.getElementById("searchInput").value.trim();
      this.handlerFactory.prototype.make("hh").sendSearchRequest("/vacancies", text)
          .then((result) => {
            if (result.status === 200) {
              this.searchData = result.data;
            }
          })
    }
  },
  updated: function() {
    let array = [];
    this.searchInput = "";
    array.push(this.selectedGrades.length?this.selectedGrades:null,
        this.selectedLanguages.length?this.selectedLanguages:null,
        this.selectedSpec.length?this.selectedSpec:null);

    array.forEach((value) => {
      if (value) {
        this.searchInput += " " + value;
      }
    })

    let input = document.getElementById("searchInput");

    input.value = this.searchInput;

    if (this.selectedGrades.length && this.selectedLanguages.length && this.selectedSpec.length) {
      let ok = document.getElementsByClassName("ok-rank")[0];
      ok.classList.remove('d-none');
    }
  }
}
</script>

<style>

</style>
