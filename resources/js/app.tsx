import { render } from 'preact/compat'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import { resolvePage } from '@blazervel'
import '../css/app.css'

const appName = import.meta.env.VITE_APP_NAME || 'Blazervel'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePage(name, import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    return render(<App {...props} />, el)
  },
})

InertiaProgress.init({ color: '#4B5563' })