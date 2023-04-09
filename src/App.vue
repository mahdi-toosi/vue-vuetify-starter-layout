<script setup lang="ts">
// vue
import { computed, onMounted, defineAsyncComponent } from 'vue'
// utils
import meta from './Meta'
import { useRepositoryProvider } from './repositories'
import { useTheme } from 'vuetify/lib/framework.mjs'
import { useGlobalStore, useDashboardStore } from '@/store'
// components
import TheToast from './components/TheToast.vue'
// assets
import logo from '@/assets/logo.svg'

const AdminLayout = defineAsyncComponent(() => import('@/layouts/Admin.vue'))

// define and uses
useRepositoryProvider()
const themeInstance = useTheme()
const globalStore = useGlobalStore()
const dashboardStore = useDashboardStore()

const loading = computed(() => globalStore.loading)
const progress = computed(() => globalStore.progress)
const theme = computed(() => (dashboardStore.isDark ? 'dark' : 'light'))
const themeColor = computed(() => themeInstance.computedThemes.value[theme.value].colors.primary)
// end define and uses

onMounted(() => {
	// eslint-disable-next-line no-console
	console.log('version:', meta.version)
})
</script>

<template>
	<v-app :theme="theme">
		<!-- PAGE LOADING -->
		<v-progress-linear
			v-show="loading"
			:active="loading"
			:indeterminate="progress === null"
			:model-value="progress !== null ? progress : 0"
		/>
		<!-- END PAGE LOADING -->

		<!-- LAYOUTS -->
		<template v-if="$route.meta.layout === 'admin'">
			<AdminLayout />
		</template>
		<!-- END LAYOUTS -->

		<!-- TOAST -->
		<TheToast />
		<!-- END TOAST -->
	</v-app>

	<teleport to="head">
		<meta name="theme-color" :content="themeColor" />
		<link rel="icon" :href="logo" type="image/svg+xml" />
	</teleport>
</template>

<style lang="scss">
@import '@/assets/styles/main.scss';
</style>
