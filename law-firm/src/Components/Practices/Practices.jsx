import React from 'react';
import ImageContainer from '../../Container/ImageContainer/ImageContainer';
import styles from './Practices.module.css'
import one from '../../assets/Law firm Landing Page (Community)/1.png'
import two from '../../assets/Law firm Landing Page (Community)/2.png'
import three from '../../assets/Law firm Landing Page (Community)/3.png'
import four from '../../assets/Law firm Landing Page (Community)/4.png'
import five from '../../assets/Law firm Landing Page (Community)/5.png'
import six from '../../assets/Law firm Landing Page (Community)/6.png'


const Practices = () => {
  return (
    <div className={styles.practices}>
        <h1>Area of Practices</h1>
        <div className={styles.images}>
            <div>
                <ImageContainer className={styles.firstChild} img={one} text='BUSINESS LAW' flex={2}/>
                <ImageContainer  className={styles.secondChild}img={two} text='PARTNERSHIP LAW'flex={1}/>
            </div>
            <div>
                <ImageContainer className={styles.firstChild} img={three} text='REAL ESTATE LAW' flex={1}/>
                <ImageContainer className={styles.secondChild} img={four} text='BUSINESS LAW' flex={2}/>
            </div>
            <div>        
                <ImageContainer className={styles.firstChild} img={five} text='LANDLORD DISPUTES' flex={2}/>
                <ImageContainer className={styles.secondChild} img={six} text='ELDER ABUSE' flex={1}/>
            </div>
        </div>
    </div>
  )
}

export default Practices