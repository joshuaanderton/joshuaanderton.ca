const tailwindColors = require('tailwindcss/colors'),
      defaultTheme = require('tailwindcss/defaultTheme')

const colors = {
  sage: {
    DEFAULT: '#A4B1A0',
    '50': '#EFF1EE',
    '100': '#E4E8E3',
    '200': '#CFD6CD',
    '300': '#B9C3B6',
    '400': '#A4B1A0',
    '500': '#869881',
    '600': '#6A7B65',
    '700': '#505D4C',
    '800': '#353E32',
    // '850': '#242a22',
    '900': '#1B1F19'
  },
  sagechrome: {
    DEFAULT: '#A7ABA6',
    '50': '#FFFFFF',
    '100': '#FAFAFA',
    '200': '#E5E6E5',
    '300': '#D1D3D0',
    '400': '#BCBFBB',
    '500': '#A7ABA6',
    '600': '#8B9089',
    '700': '#6F746D',
    '800': '#535752',
    '900': '#373A37'
  },
  lavender: {
    DEFAULT: '#9788A9',
    '50': '#F4F3F6',
    '100': '#EAE7ED',
    '200': '#D5CFDC',
    '300': '#C0B7CB',
    '400': '#ACA0BA',
    '500': '#9788A9',
    '600': '#7B6990',
    '700': '#5F5170',
    '800': '#43394F',
    // '850': '#3A3144',
    '900': '#28222F'
  },
  lavenderchrome: {
    DEFAULT: '#98929F',
    '50': '#F4F4F5',
    '100': '#EAE9EB',
    '200': '#D5D3D8',
    '300': '#C1BEC5',
    '400': '#ACA8B2',
    '500': '#98929F',
    '600': '#7C7584',
    '700': '#605B66',
    '800': '#444048',
    '900': '#28262B'
  },
  teal: {
    DEFAULT: '#1DA5A5',
    '50': '#D4F7F7',
    '100': '#C2F4F4',
    '200': '#A0EEEE',
    '300': '#7DE8E8',
    '400': '#5AE2E2',
    '500': '#38DCDC',
    '600': '#23C7C7',
    '700': '#1DA5A5',
    '800': '#157575',
    '900': '#0C4545'
  },
  tealChrome: {
    DEFAULT: '#447E7E',
    '50': '#DEEDED',
    '100': '#D1E6E6',
    '200': '#B6D8D8',
    '300': '#9CC9C9',
    '400': '#81BBBB',
    '500': '#67ADAD',
    '600': '#529898',
    '700': '#447E7E',
    '800': '#305A5A',
    '900': '#1D3535'
  }
}

module.exports = {
  darkMode: 'class',
  
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],

  theme: {
    extend: {
      fontFamily: {
        'sans': ['ModernEra', ...defaultTheme.fontFamily.sans],
        'mono': ['ModernEraMono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        theme: colors.teal,
        chrome: colors.tealChrome,
        'theme-tp': colors.sage,
        'chrome-tp': colors.sagechrome,
        'theme-jab': colors.lavenderchrome,
        'chrome-jab': tailwindColors.neutral
      }
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  
}
