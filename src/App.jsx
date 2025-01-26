import { useState } from 'react'
import Header from './components/Header'
import AuthForm from './components/AuthForm'
import { AuthContextProvider } from './store/auth-context'
function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthContextProvider>
    <div className='bg-stone-800 min-h-screen py-8'>
      <Header/>
      <main className='mt-12'>
        <AuthForm/>
        
      </main>
    </div>
    </AuthContextProvider>
  )
}

export default App
