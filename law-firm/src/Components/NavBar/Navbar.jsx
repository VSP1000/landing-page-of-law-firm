import React from 'react'
import Vector from '../../assets/Vector.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
        <div className={styles.navbar}>
            <div className={styles.navbarName}>
                <img src={Vector} alt="x" />
                <h4>IGSTUDIO</h4>
            </div>
            <div className={styles.navbarContent}>
                <p>Home</p>
                <p>Attorneys</p>
                <p>Practice Areas</p>
                <p>About Us</p>
            </div>
            <button type='button'>Contact Now</button>
        </div>
    
    </>
  )
}

export default Navbar