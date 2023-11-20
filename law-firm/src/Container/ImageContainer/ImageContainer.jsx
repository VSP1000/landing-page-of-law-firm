import React from 'react'
import styles from './ImageContainer.module.css'

const ImageContainer = ({img, text, flex}) => {
    const containerStyle = {
        backgroundImage: `url(${img})`,
        flex:`${flex}`,
    }

  return (
    <div style={containerStyle} className={styles.imageContainer}>
        <h3>{text}</h3>
    </div>
  )
}

export default ImageContainer