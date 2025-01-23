import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-stone-800 min-h-screen py-8'>
      <Header/>
      <main className='mt-12'>
        
        
      </main>
    </div>
    </>
  )
}

export default App
