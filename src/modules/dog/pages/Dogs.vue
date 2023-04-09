<script setup lang="ts">
// vue
import { onMounted, ref } from 'vue'
// utils
import { useRepositoryContext } from '@/repositories'
// components
import AppImage from '@/components/AppImage.vue'
// types
import type { Dog } from '@/repositories/dogs/types'

const { dogs: dogsRepo } = useRepositoryContext()

const count = ref(2)
const loading = ref(false)
const dogs = ref([] as Dog[])
async function showDogImage() {
	loading.value = true
	const result = await dogsRepo.getDogs({ count: count.value })
	loading.value = false

	if (result) dogs.value = result
}

onMounted(() => {
	showDogImage()
})
</script>

<template>
	<v-container>
		<form
			class="flex flex-col gap-5 items-center justify-center"
			@submit.prevent="showDogImage"
		>
			<v-text-field v-model="count" class="w-52" label="Count" />

			<v-btn type="submit" :loading="loading">show me some shibes</v-btn>
		</form>

		<div class="mt-5 flex flex-wrap justify-center gap-5">
			<template v-if="loading">
				<v-progress-circular :size="128" indeterminate />
			</template>

			<template v-else-if="dogs.length">
				<AppImage
					v-for="dog in dogs"
					:key="dog"
					cover
					style="min-width: 20rem"
					class="rounded-lg"
					:src="dog"
				/>
			</template>

			<template v-else>you dont have any shibes</template>
		</div>
	</v-container>
</template>
