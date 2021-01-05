import {HandlerFactory} from "@/classes/Handlers/factory/HandlerFactory";

export default {
    actions: {
        async fetchVacancies(context, {text, page}) {
            await (new HandlerFactory()).make("hh")
                .sendSearchRequest({
                    url: "/vacancies",
                    text: text,
                    page: page
                })
                .then((result) => {
                    context.commit('setVacancy', result.status === 200 ? result.data : [])
                    context.commit('setText', result.status === 200 ? text : "")
                    context.commit('setPage', result.status === 200 ? page : 0)
                })
        },
    },
    mutations: {
        setVacancy(state, vacancies) {
            state.vacancies = vacancies
        },
        setText(state, text) {
            state.text = text;
        },
        setPage(state, page) {
            state.page = page;
        }
    },
    state: {
        vacancies: [],
        text: "",
        page: 0
    },
    getters: {
        allVacancies(state) {
            return state.vacancies
        },
        vacanciesCount(state) {
            return state.vacancies.length
        },
        getSearchText(state) {
            return state.text
        },
        getCurrentPage(state) {
            return state.page;
        }
    }
}