import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Market from "../components/Market.vue";
import Profile from "../components/Profile.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/profile",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: Profile,
	},
	{
		path: "/market",
		component: Market,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
