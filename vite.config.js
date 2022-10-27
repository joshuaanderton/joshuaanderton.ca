import { defineConfig } from './vendor/blazervel/ui/vite'
import preact from '@preact/preset-vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
    plugins: [
        preact(),
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: true,
        }),
    ]
})