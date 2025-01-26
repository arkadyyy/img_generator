import React from 'react'
import { twMerge } from 'tailwind-merge'


const Form = ({children,className,action}) => {
  return (
    <form action = {action} className={twMerge('bg-stone-700 p-4 rounded-lg flex flex-col gap-3',className)}>
        {children}
    </form>
  )
}

export default Form