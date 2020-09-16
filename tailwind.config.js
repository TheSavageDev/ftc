module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    fontFamily: {
      sans: ["Inter var", "system-ui", "sans-serif"],
    },
    colors: {
      blue: '#3f5fa3',
      teal: '#3f705f',
      orange: '#d67f49',
      burntOrange: '#a85925',
      white: '#fffff0',
      grey: '#f3f3f3',
      black: '#232323',
      overlay: 'rgba(0, 0, 0, 0.6)',
      failure: '#e74c3c',
      success: '#2ecc71',
      warning: '#f1c40f',
      info: '#316fbf',
    }
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "last"],
  },
}
