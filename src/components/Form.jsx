import React from 'react'
import { twMerge } from 'tailwind-merge'


const Form = ({children,className}) => {
  return (
    <div className={twMerge('bg-stone-700 p-4 rounded-lg flex flex-col gap-3',className)}>
        {children}
    </div>
  )
}

export default Form