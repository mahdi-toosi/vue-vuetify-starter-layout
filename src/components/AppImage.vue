<script setup lang="ts">
import placeHolderImg from '@/assets/images/image-placeholder.webp'
defineProps<{ src: string }>()
</script>

<template>
	<v-img class="mx-auto" :lazy-src="placeHolderImg" :src="src">
		<template #placeholder>
			<div class="flex items-center justify-center h-full">
				<v-progress-circular color="grey-lighten-4" indeterminate />
			</div>
		</template>
	</v-img>
</template>
