import React from 'react'
import { twMerge } from 'tailwind-merge'

const Input = ({children,className,isTextarea,...props}) => {
    const Component = isTextarea ? 'textarea' : 'input'
  return (
   <Component {...props} className={twMerge(`bg-slate-600 p-2 rounded-lg`,className)}/>
  )
}

export default Input