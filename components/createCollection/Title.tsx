import React from 'react'

export default function Title(props:React.HTMLProps<HTMLParagraphElement>&{children:string}) {
  return (
    <h2 {...props as any} className={`mt-4  capitalize ${props.className}`}>{props.children}</h2>
  )
}
