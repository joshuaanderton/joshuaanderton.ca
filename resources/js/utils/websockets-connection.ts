import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

let echoInstance: any

export default () => {

  const {
    VITE_PUSHER_APP_KEY: key,
    VITE_PUSHER_APP_CLUSTER: cluster,
    VITE_PUSHER_PORT: wsPort,
    VITE_PUSHER_HOST: wsHost,
    VITE_PUSHER_SCHEME: wsScheme
  } = (import.meta as any).env

  ;(window as any).Pusher = Pusher

  const options = {
    broadcaster: 'pusher',
    cluster,
    key,
    wsHost,
    wsPort,
    // wssPort: wsPort,
    enabledTransports: ['ws', 'wss'],
    disableStats: false,
    forceTLS: wsScheme == 'https',
    encrypted: true
  }

  console.log(options)

  if (!echoInstance) {
    echoInstance = new Echo(options)
  }

  return echoInstance
}