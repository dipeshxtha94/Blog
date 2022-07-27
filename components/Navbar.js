import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <header className={styles.nav}>
        <ul>
          <Link href='/'><a><li>Home</li></a></Link>
          <Link href="/about"><a><li>About</li></a></Link>
          <Link href='/blog'><a><li>Blog</li></a></Link>
          <Link href='/contact'><a><li>Contact</li></a></Link>
        </ul>
      </header>

      <hr />
    </div>
  )
}

export default Navbar
