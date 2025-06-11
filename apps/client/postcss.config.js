export default {
  plugins: {
    'postcss-import': {
      filter: (path) => path.endsWith('.css'), // Only process CSS files
    },
    tailwindcss: {},
    autoprefixer: {},
  },
}
