import React from 'react';
import CardForWhyUs from '../../Container/CardForWhyUs';
import styles from './WhyUs.module.css';

const WhyUs = () => {
  return (
    <div className={styles.whyUS}>
        <h1>Why Choose us?</h1>
        <div className={styles.card}>
            <CardForWhyUs title='98% Success Rate'/>
            <CardForWhyUs title='100% Success Rate'/>
            <CardForWhyUs title='100% Success Rate'/>
        </div>
    </div>
  )
}

export default WhyUs