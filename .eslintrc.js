module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'jest': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Buffer': true,
        'test': true
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'no-console': 'off',
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};