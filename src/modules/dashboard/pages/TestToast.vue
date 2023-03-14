<script lang="ts" setup>
import { showToast, type Mode } from '@/composable/useToast'

function onShowToast(mode: Mode) {
	showToast({
		mode,
		msg: `test ${mode} toast`,
	})
}
</script>

<template>
	<v-container class="about">
		<h1 class="mb-5">This is an Test Toast page</h1>

		<div class="flex gap-5">
			<v-btn color="primary" @click="onShowToast('info')">test info toast</v-btn>

			<v-btn color="success" @click="onShowToast('success')">test success toast</v-btn>

			<v-btn color="warning" @click="onShowToast('warning')">test warning toast</v-btn>

			<v-btn color="error" @click="onShowToast('error')">test error toast</v-btn>

			<v-btn color="secondary" @click="onShowToast('secondary')">test secondary toast</v-btn>
		</div>
	</v-container>
</template>
