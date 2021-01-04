<template>
  <div class="container mt-5">
    <div id="vacancies">
      <div v-for="item in this.allVacancies().items" :key="item.id"
           class="mt-3 mb-3 p-3"
           style="border: 1px solid black; border-radius: 5px">
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
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import moment from 'moment';

export default {
  name: 'Vacancies',
  methods: {
    ...mapGetters(['allVacancies']),
    moment: function (date) {
      return moment(date).locale('ru');
    },
  }
}
</script>

<style>

</style>