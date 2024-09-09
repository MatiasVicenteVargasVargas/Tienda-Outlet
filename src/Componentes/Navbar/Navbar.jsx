import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
      <header className="header">
        <a href="/" className="Logo">Tienda Outlet</a>
        
        <nav className="navbar">
            <a href="/">Inicio 📍</a>
            <a href="/">Marcas 👕</a>
            <a href="/">Sobre Nosotros 👨🏻‍🤝‍👨🏻</a>
            <a href="/">Carrito 🛒</a>

        </nav>
      </header>
  )
}

export default Navbar