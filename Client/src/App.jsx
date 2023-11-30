import { useState } from 'react'
import './App.css'
import NotificationForm from './components/NotificationForm'
import './css/notificationForm.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NotificationForm/>
    </>
  )
}

export default App
