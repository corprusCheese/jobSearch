import JobSearch from './components/JobSearch.vue';
import ProjectInfo from './components/ProjectInfo.vue';

const routes = [
    { path: '/info', component: ProjectInfo },
    { path: '/search', component: JobSearch },
];
export default routes;
