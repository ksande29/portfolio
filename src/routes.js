import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'

export const routes = [
    { path: '/', component: Home},
    { path: '/projects', component: Projects},
    { path: '/resume', component: Resume},
    { path: '/contact', component: Contact}
];