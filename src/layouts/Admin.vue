<script setup lang="ts">
// Vue
import { ref } from 'vue'
// Components
import TheSidebar from '@/components/TheSidebar.vue'
import AppBarMenuComponent from '@/components/AppBarMenuComponent.vue'

/** drawer visibility */
const drawer = ref<boolean>(false)
</script>

<template>
	<v-app-bar>
		<v-app-bar-nav-icon @click="drawer = !drawer" />
		<v-app-bar-title tag="h1">Vuetify3 Application</v-app-bar-title>
		<v-spacer />
		<app-bar-menu-component />
	</v-app-bar>

	<v-navigation-drawer v-model="drawer" temporary>
		<TheSidebar />
	</v-navigation-drawer>

	<v-main>
		<router-view v-slot="{ Component, route }">
			<component :is="Component" :key="route.path" />
		</router-view>
	</v-main>

	<v-footer app elevation="3">
		<span class="mr-5">2023 &copy;</span>
	</v-footer>
</template>

<style>
.v-navigation-drawer__scrim {
	inset: 0px !important;
}
</style>
