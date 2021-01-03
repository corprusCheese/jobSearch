import {HandlerFactory} from "@/classes/Handlers/factory/HandlerFactory";

export default {
    actions: {
        async fetchVacancies(context, text) {
            let vacancies = [];
            let factory = new HandlerFactory();
            await factory.make("hh")
                .sendSearchRequest({
                    url: "/vacancies",
                    text: text
                })
                .then((result) => {
                    vacancies = result.status === 200 ? result.data : []
                })
            context.commit('setVacancy', vacancies)
        },
    },
    mutations: {
        setVacancy(state, vacancies) {
            state.vacancies = vacancies
        },
    },
    state: {
        vacancies: []
    },
    getters: {
        allVacancies(state) {
            return state.vacancies
        },
        vacanciesCount(state) {
            return state.vacancies.length
        }
    }
}