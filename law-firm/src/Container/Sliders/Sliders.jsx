import React from 'react';
import styles from './Sliders.module.css'

const Sliders = ({img, name, title, text}) => {
  return (
    <div className={styles.sliders}>
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{text}</p>
    </div>
  )
}

export default Sliders