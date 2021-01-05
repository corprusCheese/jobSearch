<template>
  <div class="container mt-5">
    <div id="vacancies" class="vacancies">
      <div v-for="item in this.allVacancies().items" :key="item.id"
           class="mt-3 mb-3 p-3 vacancy-item">
        <h3>{{ item.name }}</h3>
        <h5>{{ item.area.name}} </h5>
        <h4><a v-bind:href=item.employer.alternate_url> {{ item.employer.name}}</a> </h4>
        Когда создали: <h5>{{ moment(item.created_at).fromNow()}} </h5>
        <p>{{ item.salary !== null ? "от "+item.salary.from : ""}}
          {{item.salary !== null  ? "до " +item.salary.to : ""}}
          {{item.salary !== null ?
              (item.salary.currency === "RUR" ? " рублей" : " "+item.salary.currency)
              : null
          }}</p>
        Требования: <p v-html=item.snippet.requirement></p>
        Что делать: <p v-html=item.snippet.responsibility></p>
          <a v-bind:href=item.alternate_url> перейти на hh.ru</a>
      </div>
      <div id="pagination" class="mb-5" v-if="isNeedToShowButtons">
        <button id ="prevButton" class="btn btn-dark ml-1" style="height: 35px" type="text"
                aria-label="Search" v-on:click="prevVacancies">Предыдущие</button>
        <button id ="nextButton" class="btn btn-dark ml-1" style="height: 35px" type="text"
                aria-label="Search" v-on:click="nextVacancies">Следующие</button>
        <p style="margin-top: revert" v-if="pagesCount">{{ this.page + 1 }} страница из {{ pagesCount() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import moment from 'moment';

export default {
  name: 'Vacancies',
  data: function() {
    return {
      page: this.getCurrentPage()
    }
  },
  methods: {
    ...mapGetters(['allVacancies','getSearchText','getCurrentPage']),
    ...mapActions(['fetchVacancies']),
    moment: function (date) {
      return moment(date).locale('ru');
    },
    prevVacancies: function () {
      this.page > 0 ? this.page-- : this.page = 0;
      this.fetchVacancies({text: this.getSearchText(), page: this.page});
    },
    nextVacancies: function () {
      this.page < this.pagesCount() - 1 ? this.page++ : this.page = this.pagesCount() - 1;
      this.fetchVacancies({text: this.getSearchText(), page: this.page});
    },
    pagesCount: function () {
      let vacs = this.allVacancies()
      vacs = JSON.parse(JSON.stringify(vacs))
      return vacs.length !== 0 ? vacs.pages : 0
    },
  },
  computed: {
    isNeedToShowButtons: function () {
      return this.pagesCount() > 1;
    }
  }
}
</script>

<style>

</style>