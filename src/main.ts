import store from './store'
import { createApp } from 'vue'
import context from '@/bootstrap/context'
import bootstrap from '@/bootstrap'
import router, { registerRoutes } from './router'
import vuetify from './vuetify'
import App from './App.vue'

async function init() {
	const app = createApp(App)
	await bootstrap(context)

	app.use(store)
	app.use(vuetify)

	registerRoutes(context.Router.routes)
	app.use(router)

	// Run!
	router.isReady().then(() => {
		app.mount('#app')
	})
}

init()
