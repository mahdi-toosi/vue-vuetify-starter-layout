<script setup lang="ts">
import { ref, watch, nextTick, computed, onMounted } from 'vue'
import meta from './Meta'
import { useTheme } from 'vuetify/lib/framework.mjs'
// Stores
import { useGlobalStore, useDashboardStore } from '@/store'
// Components
import TheToast from './components/TheToast.vue'
import DrawerComponent from '@/components/DrawerComponent.vue'
import AppBarMenuComponent from '@/components/AppBarMenuComponent.vue'
// assets
import logo from '@/assets/logo.svg'
//types
import type { WritableComputedRef } from 'vue'

/** Vuetify Theme */
const theme = useTheme()

// const { msg, show, hideToast } = useToastStore()
const globalStore = useGlobalStore()
const dashboardStore = useDashboardStore()

/** drawer visibility */
const drawer = ref<boolean>(false)

/** loading overlay visibility */
const loading: WritableComputedRef<boolean> = computed({
	get: () => globalStore.loading,
	set: v => globalStore.setLoading(v),
})

/** Appbar progressbar value */
const progress = computed(() => globalStore.progress)

/** Toggle Dark mode */
const isDark = computed(() => (dashboardStore.isDark ? 'dark' : 'light'))

/** Theme Color (Sync browser theme color to vuetify theme color) */
const themeColor = computed(() => theme.computedThemes.value[isDark.value].colors.primary)

// When loading overlay value change, force redraw screen.
watch(loading, async () => nextTick())

onMounted(() => {
	loading.value = false
	// eslint-disable-next-line no-console
	console.log('version:', meta.version)
})
</script>

<template>
	<v-app :theme="isDark">
		<v-navigation-drawer v-model="drawer" temporary>
			<drawer-component />
		</v-navigation-drawer>

		<v-app-bar>
			<v-app-bar-nav-icon @click="drawer = !drawer" />
			<v-app-bar-title tag="h1">Vuetify3 Application</v-app-bar-title>
			<v-spacer />
			<app-bar-menu-component />

			<v-progress-linear
				v-show="loading"
				:active="loading"
				:indeterminate="progress === null"
				:model-value="progress !== null ? progress : 0"
				color="blue-accent-3"
			/>
		</v-app-bar>

		<v-main>
			<router-view v-slot="{ Component, route }">
				<component :is="Component" :key="route.path" />
			</router-view>
		</v-main>

		<!-- TOAST -->
		<TheToast />
		<!-- END TOAST -->

		<v-footer app elevation="3">
			<span class="mr-5">2023 &copy;</span>
		</v-footer>
	</v-app>

	<teleport to="head">
		<meta name="theme-color" :content="themeColor" />
		<link rel="icon" :href="logo" type="image/svg+xml" />
	</teleport>
</template>

<style lang="scss">
@import '@/assets/styles/main.scss';
</style>
