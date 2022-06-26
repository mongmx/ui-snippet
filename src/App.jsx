import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p className="text-3xl font-bold underline">Hello Vite + React!</p>
      <Button primary="true" onClick={() => setCount((count) => count + 1)}>count is: {count}</Button>
    </div>
  )
}

export default App
