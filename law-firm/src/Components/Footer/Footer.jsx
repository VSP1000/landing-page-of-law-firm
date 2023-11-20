import React from 'react'
import styles from '../NavBar/Navbar.module.css';
import Vector from '../../assets/Vector.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <div>
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
            <div className={styles.social}>
                <InstagramIcon  style={{ color: '#E3B748' }}/>
                <FacebookIcon style={{ color: '#E3B748' }}/>
                <TwitterIcon style={{ color: '#E3B748' }}/>
                <PinterestIcon style={{ color: '#E3B748' }}/>
            </div>
        </div>
        <div className={styles.footerbar}>
          <p>© 2020 Acme. All right reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
    </div>
  )
}

export default Footer