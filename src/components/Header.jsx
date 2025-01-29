import React from 'react'
import { useAuthContext } from '../store/auth-context'

const Header = () => {
  const {token,logout} = useAuthContext()
  return (
   <header className='text-center text-slate-50'>
    <h1 className='font-bold text-3xl font-mono'>Reaplicate Image Generator</h1>
    {token && <button onClick={logout} className='mt-2 text-teal-200 hover:stone-400'>Logout</button>}
   </header>
  )
}

export default Header