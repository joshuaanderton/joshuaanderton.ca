import Alpine from 'alpinejs'
import websocketsConnection from './utils/websockets-connection'
import '../css/site.css'

window.Alpine = Alpine

Alpine.start()

window.Echo = websocketsConnection()

window.Echo
  .channel('todos')
  .listen('TodoCreated', (data) => console.log(data))
  .error(err => console.log(err))

window.createTodo = (message) => fetch(`/api/todos/create?message=${message}`)