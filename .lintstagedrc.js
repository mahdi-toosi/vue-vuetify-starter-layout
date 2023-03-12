module.exports = {
	'**/*.{ts,js,vue}': fileNames =>
		`cross-env NODE_ENV=production eslint --ext .js,.ts,.vue ${fileNames.join(' ')} --fix`,
	'**/*': fileNames => `prettier -u --write ${fileNames.join(' ')} --fix`,
	'**/*.{css,scss,vue}': fileNames => `stylelint ${fileNames.join(' ')}`,
}
