import callstackConfig from "@callstack/eslint-config/react.flat.js";
// false-positives below:
// eslint-disable-next-line import/no-unresolved
import cspellConfigs from "@cspell/eslint-plugin/configs";
// eslint-disable-next-line import/no-unresolved
import tsEslintParser from "@typescript-eslint/parser";

import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config} */
export default [
	{
		ignores: [
			"dist",
			"coverage",
			".nyc_output",
			".github",
			"docs",
			"pages/dist-demos",
			"pages/dist-e2e",
			"src/util/typings.d.ts",
		],
	},
	...callstackConfig,
	cspellConfigs.recommended,
	{
		rules: {
			"@cspell/spellchecker": [
				"warn",
				{
					cspell: {
						import: ["cspell.json"],
					},
				},
			],
		},
	},
	{
		files: ["*.ts", "*.tsx", "*.d.ts"],
		languageOptions: {
			parser: tsEslintParser,
			parserOptions: {
				project: "./tsconfig.eslint.json",
			},
		},
	},
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
	{
		rules: {
			"import/order": "off", // handled by prettier & @trivago/prettier-plugin-sort-imports
			"prettier/prettier": ["error"],
			"import/no-extraneous-dependencies": [
				"error",
				{
					devDependencies: [
						"**/tests/**/*.ts",
						"**/tests/**/*.js",
						"**/*.spec.js",
						"**/*.spec.jsx",
						"**/*.spec.ts",
						"**/*.spec.tsx",
						"*.config.js",
						"*.config.mjs",
						"*.config.ts",
						"pages/**/*.ts",
						"pages/**/*.js",
						"scripts/**/*.ts",
					],
				},
			],
		},
	},
];
