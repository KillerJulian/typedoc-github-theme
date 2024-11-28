import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: ['*', '!src']
	},
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname
			}
		}
	},
	{
		files: ['*.js'],
		...tseslint.configs.disableTypeChecked
	},
	{
		rules: {
			eqeqeq: 'error',
			curly: 'error',
			yoda: 'error',
			'linebreak-style': ['error', 'unix'],
			'space-infix-ops': 'error',
			'space-unary-ops': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/consistent-type-exports': 'error',
			'@typescript-eslint/no-import-type-side-effects': 'error'
		}
	},
	prettierConfig
);
