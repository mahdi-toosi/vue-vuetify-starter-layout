<script setup lang="ts">
import { show, hideToast, toast } from '@/composable/useToast'
</script>

<template>
	<v-snackbar
		v-model="show"
		:color="toast.mode"
		location="bottom left"
		:timeout="toast.timeout"
		@update:model-value="hideToast"
	>
		{{ toast.msg }}
		<template v-if="!toast.hideCloseButton" #actions>
			<v-btn icon @click="hideToast">
				<v-icon>mdi-close</v-icon>
			</v-btn>
		</template>
	</v-snackbar>
</template>
