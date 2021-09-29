import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.config.productionTip = false

const router = new VueRouter({ mode: 'history', routes,
	scrollBehavior () {
	return { x: 0, y: 0 }
	}
})

Vue.use(VueRouter)

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
