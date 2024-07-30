tailwind.config = {
theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      colors: {
        'very-dark': 'hsl(233, 47%, 7%)',
        'dark-desaturated': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'white': 'hsl(0, 0%, 100%)',
        'slightly-transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'stat-heading-white': 'hsla(0, 0%, 100%, 0.6)',
      },
      screens: {
        'sm': '320px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'below-md': {'max': '768px'} // custom breakpoint for below 768px
      },
    },
  },
  plugins: [],
}