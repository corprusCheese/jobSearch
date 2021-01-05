export default {
    actions: {
        refresh(context, {grades = "", languages = "", spec = ""}) {
            if (grades!==""){
                context.commit('setSelectedGrades', grades)
            }
            if (spec!=="") {
                context.commit('setSelectedSpec', spec)
            }
            if (languages!=="") {
                context.commit('setSelectedLanguages', languages)
            }
            context.commit('setSearchInputBySelected')
        }
    },
    mutations: {
        setSelectedGrades(state, grades) {
            state.selectedGrades = grades;
        },
        setSearchInput(state, input) {
            state.searchInput = input;
        },
        setSelectedSpec(state, spec) {
            state.selectedSpec = spec;
        },
        setSelectedLanguages(state, languages) {
            state.selectedLanguages = languages;
        },
        setIsOkShowed(state, isOkShowed) {
            state.isOkShowed = isOkShowed;
        },
        setSearchInputBySelected(state) {
            let array = [];
            state.searchInput = ""
            array.push(state.selectedGrades.length ? state.selectedGrades : null,
                state.selectedLanguages.length ? state.selectedLanguages : null,
                state.selectedSpec.length ? state.selectedSpec : null);
            array.forEach((value) => {state.searchInput += value ? " " + value : ""});
        },
    },
    state: {
        selectedGrades: [],
        selectedLanguages: [],
        selectedSpec: [],
        searchInput: "",
        isOkShowed: false,
    },
    getters: {
        getSelectedGrades(state) {
            return state.selectedGrades;
        },
        getSearchInput(state) {
            return state.searchInput;
        },
        getSelectedSpec(state) {
            return state.selectedSpec;
        },
        getSelectedLanguages(state) {
            return state.selectedLanguages;
        },
        getIsOkShowed(state) {
            return state.isOkShowed;
        },
        isAllSet(state) {
            return state.selectedGrades.length
                && state.selectedLanguages.length
                && state.selectedSpec.length
        }
    }
}