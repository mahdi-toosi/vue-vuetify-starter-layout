module.exports = {
	env: {
		node: true,
		es2022: true,
		browser: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'@vue/typescript/recommended',
		'plugin:vuetify/base',
		'@vue/prettier',
	],
	rules: {
		'vue/require-default-prop': 'off',
		'vue/v-on-event-hyphenation': 'off',
		'@typescript-eslint/no-extra-semi': 'off',
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/consistent-type-imports': 'error',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
	},
	settings: {
		vite: { configPath: './vite.config.ts' },
		'import/parsers': { '@typescript-eslint/parser': ['*.ts', '*.tsx'] },
		'import/resolver': {
			node: true,
			typescript: true,
			alias: {
				map: [
					['@', './src'],
					['~', './node_modules'],
				],
			},
			extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue'],
		},
	},
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
	},
}
