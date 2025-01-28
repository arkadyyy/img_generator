import { useState } from 'react'
import Header from './components/Header'
import AuthForm from './components/AuthForm'
import { AuthContextProvider, useAuthContext } from './store/auth-context'
import ImageGeneration from './components/ImageGeneration'
function App() {
  const [count, setCount] = useState(0)
  const {token} = useAuthContext()

  
  return (
    <AuthContextProvider>
    <div className='bg-stone-800 min-h-screen py-8'>
      <Header/>
      <main className='mt-12'>
        {
          !token ? <AuthForm/> : <ImageGeneration/>
        }
        
      </main>
    </div>
    </AuthContextProvider>
  )
}

export default App
