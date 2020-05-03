import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        component: () =>
            import("../views/Portfolio.vue")
    },
    {
        path: "/blog",
        name: "Blog",
        component: () =>
            import("../views/Blog.vue")
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/contact",
        name: "Contact",
        component: () =>
            import("../views/Contact.vue")
    },
];

const router = new VueRouter({
    routes
});

export default router;