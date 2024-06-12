module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  requirePragma: false,
  insertPragma: false,
  htmlWhitespaceSensitivity: 'ignore',
  endOfLine: 'lf',
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],

  // @trivago/prettier-plugin-sort-imports
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^(?!.*[.]css$)[./].*$',
    '[.]css$',
  ],
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,

  // prettier-plugin-tailwindcss
  tailwindFunctions: ['twMerge'],
}
