import React from 'react';
// import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import HeroImage from '../../assets/HeroImage.svg';
import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>

        <div className={styles.section}>
            
            <h1>You don’t have to <br/> <span>Fight them Alone.</span></h1> 
            
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>

            <div className={styles.form}>
                <input type="email" id="Email" name="Email"></input>
                <button>Let’s Talk</button>
            </div>
        </div>
        <img src={HeroImage} alt="heroImage" />
    </div>
  )
}

export default HeroSection