import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {top: 0}
    }
});

router.beforeEach((to, from, next) => {
    let title = 'Guillaume Goossens';
    if(to.meta && to.meta.title){
        title = <string>to.meta.title;
    }
    document.title = title;
    next();
});

export default router;