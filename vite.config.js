import laravel from 'laravel-vite-plugin'
import preact from '@preact/preset-vite'
import tailwindcss from 'tailwindcss'
import blazervel from './vendor/blazervel/ui/vite.config'

export default blazervel({
  plugins: [
    preact(),
    tailwindcss(),
    laravel(['resources/js/app.tsx'])
  ]
})