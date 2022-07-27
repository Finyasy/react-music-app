import React from 'react'
import Button from './Button'

function Header({ title }) {
  return (
    <header className="header">
        <h1 style={{color:"red"}}>{title}</h1>
        <Button />
    </header>
  )
}

export default Header