<script setup lang="ts">
import { useDashboardStore } from '@/store'

/** Config Store */
const dashboardStore = useDashboardStore()
</script>

<template>
	<!-- Toggle Dark mode -->
	<v-btn icon="mdi-theme-light-dark" @click="dashboardStore.toggleTheme" />
</template>
