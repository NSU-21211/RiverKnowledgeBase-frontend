import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/api/river",
        name: "home-api",
        component: () => import("./components/Api.vue")
    },
    {
        path: "/api/river/search/:name",
        name: "river-list",
        component: () => import("./components/RiverList.vue")
    },
    {
        path: "/api/river/get/:name",
        name: "river-info",
        component: () => import("./components/RiverInfo.vue")
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;