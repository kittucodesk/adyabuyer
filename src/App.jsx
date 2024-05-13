import { useState } from 'react'
import './App.css'
import ProductScreen from './ProductScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ProductScreen />
    
    </>
  )
}

export default App
