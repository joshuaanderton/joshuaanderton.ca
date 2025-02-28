const tailwindColors = require('tailwindcss/colors'),
      defaultTheme = require('tailwindcss/defaultTheme')

const colors = {
  sage: {
    DEFAULT: '#a4b1a0',
    '50': '#f7f7f6',
    '100': '#ebeeea',
    '200': '#d7ddd5',
    '300': '#a4b1a0',
    '400': '#909d8b',
    '500': '#6e7e69',
    '600': '#576653',
    '700': '#475144',
    '800': '#3b4338',
    '900': '#30382f',
    '950': '#181c17',
  },
  sagechrome: {
    DEFAULT: '#a7aba6',
    '50': '#f8f8f8',
    '100': '#f0f0f0',
    '200': '#e3e5e3',
    '300': '#d0d2cf',
    '400': '#a7aba6',
    '500': '#989c97',
    '600': '#7f847e',
    '700': '#696d68',
    '800': '#595c58',
    '900': '#4d504c',
    '950': '#272827',
  },
  teal: {
    DEFAULT: '#1da5a5',
    '50': '#f1fcfb',
    '100': '#cff8f3',
    '200': '#9ff0e9',
    '300': '#67e1db',
    '400': '#38c9c7',
    '500': '#1da5a5',
    '600': '#16888b',
    '700': '#166c6f',
    '800': '#165659',
    '900': '#17474a',
    '950': '#07292c',
  },
  tealChrome: {
    DEFAULT: '#447e7e',
    '50': '#f4f9f9',
    '100': '#dbeceb',
    '200': '#b6d9d6',
    '300': '#8abebc',
    '400': '#61a09f',
    '500': '#447e7e',
    '600': '#37696a',
    '700': '#2f5556',
    '800': '#294546',
    '900': '#263a3b',
    '950': '#121f21',
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
        'sans': ['Satoshi', ...defaultTheme.fontFamily.sans],
        'mono': ['ModernEraMono', ...defaultTheme.fontFamily.mono],
        'handwritten': ['Kalam', ...defaultTheme.fontFamily.sans],
        'symbols': ['HandyDandy']
      },
      colors: {
        teal: colors.teal,
        theme: colors.teal,
        chrome: colors.tealChrome
      }
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],

}
