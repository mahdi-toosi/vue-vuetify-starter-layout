<script lang="ts" setup>
import { showToast, type Variant } from '@/composable/useToast'

const showSnackbar = (mode: Variant) => {
	showToast({
		mode,
		timeout: 99999,
		msg: `test ${mode} toast`,
	})
}
</script>

<template>
	<v-container class="about">
		<h1>This is an Test Toast page</h1>

		<div class="flex gap-5">
			<v-btn class="rounded-circle pa-4" color="primary" @click="showSnackbar('info')">
				test info toast
			</v-btn>

			<v-btn color="success" @click="showSnackbar('success')">test success toast</v-btn>

			<v-btn color="secondary" @click="showSnackbar('warning')">test warning toast</v-btn>

			<v-btn color="error" @click="showSnackbar('error')">test error toast</v-btn>
		</div>
	</v-container>
</template>
