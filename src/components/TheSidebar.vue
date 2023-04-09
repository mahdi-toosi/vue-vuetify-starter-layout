<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

interface DrawerMenuItem {
	/** Item Name */
	title: string | '-'
	/** Item Icon */
	icon?: string
	/** Router Location */
	to?: RouteLocationRaw
	/** is active */
	active?: boolean
	/** Sub Items */
	items?: DrawerMenuItem[]
}

/** Drawer menu items */
const items: DrawerMenuItem[] = [
	{
		title: 'Home',
		icon: 'mdi-home',
		to: { name: 'Home' },
	},
	{
		title: '-', // Divider
	},
	{ title: 'Test Toast', icon: 'mdi-message-fast-outline', to: { name: 'About' } },
	{
		title: 'Dogs List',
		icon: 'mdi-dog',
		items: [
			{
				title: 'Dogs',
				icon: 'mdi-dog',
				to: { name: 'Dogs' },
			},
		],
	},
	{
		title: 'Disabled Item',
		icon: 'mdi-cancel',
		// empty `to` value becomes to disabled item
	},
]
</script>

<template>
	<v-list nav>
		<template v-for="item in items" :key="item.title">
			<v-divider v-if="item.title === '-'" />
			<template v-else>
				<!-- Menu Item -->
				<v-list-item
					v-if="!item.items"
					:disabled="!item.to"
					:prepend-icon="item.icon"
					:title="item.title"
					:to="item.to"
					link
				/>
				<!-- Sub menu -->
				<v-list-group v-else-if="item.items" v-model="item.active">
					<template #activator="{ props }">
						<v-list-item v-bind="props" :prepend-icon="item.icon" :title="item.title" />
					</template>
					<!-- Sub menu item -->
					<template v-for="subItem in item.items" :key="subItem.title">
						<v-divider v-if="subItem.title === '-'" />

						<VListItem
							v-else
							:disabled="!subItem.to"
							:prepend-icon="subItem.icon"
							:title="subItem.title"
							:to="subItem.to"
							link
						/>
					</template>
				</v-list-group>
			</template>
		</template>
	</v-list>
</template>
