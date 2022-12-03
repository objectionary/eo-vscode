/**@type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:node/recommended-module"
    ],
    rules: {
        'semi': [2, 'always'],
        'consistent-return': 'off',
        'no-process-exit': 'off',
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'node/no-unsupported-features/es-syntax': ['error', { 'ignores': ['modules'] }],
        'node/no-missing-import': 'off',
        'node/no-extraneous-import': 'off',
        'node/no-unpublished-import': 'off',
        'node/no-process-exit': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-hyphen-before-param-description': 'off'
    }
};