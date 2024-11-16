module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,

  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindAttributes: ['className'],
}
