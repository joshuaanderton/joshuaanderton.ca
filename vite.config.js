import { defineConfig } from 'vite'
import blazervel from './vendor/blazervel/blazervel'
import blazervelUi from './vendor/blazervel/ui'
import jaInertia from './vendor/joshuaanderton/inertia'
import preact from '@preact/preset-vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
    plugins: [
        blazervel(),
        blazervelUi({inertia: true}),
        jaInertia({progress: {color: '#4B5563'}}),
        preact(),
        laravel({
            input: [
                'resources/js/app.js'
            ],
            refresh: true,
        }),
    ]
})