import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

/** Pinia Store */
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia

// Pinia Stores

import useGlobalStore from './Global'
import useDashboardStore from './Dashboard'

export { useGlobalStore, useDashboardStore }
