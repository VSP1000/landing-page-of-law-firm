import React from 'react';
import Gift from '../assets/Gift 1.png'
import styles from './CArdForWhyUs.module.css'

const CardForWhyUs = ({title}) => {
  return (
    <div className={styles.card}>
      <div className={styles.CardForWhyUs}>
          <div> 
              <img src={Gift} alt="giftIcon" />
          </div>
          <h3>{title}</h3>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
          <button>Read More</button>
      </div>
    </div>
  )
}

export default CardForWhyUs