import preact from '@preact/preset-vite'
import laravel from 'laravel-vite-plugin'
import blazervel from './vendor/blazervel/ui/vite.config'

export default blazervel({
  plugins: [
    preact(),
    laravel(['resources/js/app.tsx'])
  ]
})