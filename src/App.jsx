import { useState } from 'react'
import './App.css'
import MenuProducts from './components/MenuProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MenuProducts />
  )
}

export default App
