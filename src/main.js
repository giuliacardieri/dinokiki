import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import VueGtag from "vue-gtag"
import routes from './routes'

Vue.config.productionTip = false

const router = new VueRouter({ mode: 'history', routes,
	scrollBehavior () {
	return { x: 0, y: 0 }
	}
})

Vue.use(VueRouter)
Vue.use(VueMeta)

Vue.use(VueGtag, {
	config: { id: process.env.GOOGLE_ANALYTICS }
});

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
