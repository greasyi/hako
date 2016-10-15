module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'airbnb',
  'plugins': [],
  'rules': {
    'arrow-parens': [2, 'always'],
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    'comma-dangle': [2, 'never'],
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-sort-props': 2,
    'linebreak-style': 0,
    'max-len': [2, 120],
    'no-underscore-dangle': [2, {'allowAfterThis': true}],
    'object-curly-spacing': [2, 'never'],
    'quotes': [2, 'single'],
    'space-before-function-paren': 0
  }
};
