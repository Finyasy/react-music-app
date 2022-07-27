import React from 'react'

function Header({ title }) {
  return (
    <header className="header">
        <h1 style={{color:"red"}}>{title}</h1>
        <button color='green' className='btn'>Add</button>
    </header>
  )
}

export default Header