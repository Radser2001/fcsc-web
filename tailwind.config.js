module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  important: true,
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    screens: {
      sm1: '340px',
      sm2: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        white: '#ffffff',
        fcsc: {
          blue: '#1c1364', // genuine fcsc blue aka blue_dark
          blue_light: '#33306f',
          orange: '#f15a24', // genuine fcsc orange aka orange_dark
          orange_light: '#feb6a8',
        },
      },
      boxShadow: {
        ds1: '10px 4px 20px rgba(0, 0, 0, 0.25)',
        ds2: '0px 0px 20px rgba(155, 155, 155, 0.4)',
        ds3: '0px 0px 40px rgba(120, 120, 100, 0.4)',
        noOffset: '0 0px 10px 0px rgba(0, 0, 0, 0.25)',
        noOffset_lighter: '0 0px 5px 0px rgba(0, 0, 0, 0.25)',
        noOffset_thicker: '0 0px 6px 3px rgba(0, 0, 0, 0.25)',
      },
      aspectRatio: {
        1.25: '1.25',
        1.5: '1.5',
        2.5: '2.5',
        3.5: '3.5',
        4.5: '4.5',
        5.5: '5.5',
      },
      scale: {
        115: '1.15',
      },
      margin: {
        '4%': '4%',
        '5%': '5%',
        '8%': '8%',
        '10%': '10%',
        '20vw': '20vw',
        '20vh': '20vh',
        '25vh': '25vh',
        '20%': '20%',
        full: '100%',
      },
      height: {
        '35vh': '35vh',
        '84vh-32': 'calc(84vh - 32px)',
        '84vh': '84vh',
        '85vh-50': 'calc(85vh - 50px)',
        '85vh': '85vh',
        '95vh': '95vh',
        '15vw': '15vw',
        '20vw': '20vw',
      },
      width: {
        '40%': '40%',
        '77%': '77%',
        '85%': '85%',
        '88%': '88%',
        27: '27px',
        '15vw': '15vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '100vw': '100vw',
      },
      minHeight: {
        '84vh': '84vh',
        '85vh': '85vh',
        '90vh': '90vh',
        '95vh': '95vh',
      },
      maxHeight: {
        '35vh': '35vh',
        '65vh': '65vh',
        '84vh-50': 'calc(84vh - 50px)',
        '95vh': '95vh',
        '100vh': '100vh',
      },
    },
  },
  variants: {
    extend: {
      gradientColorStops: ['active'],
      height: ['group-hover'],
      brightness: ['hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
