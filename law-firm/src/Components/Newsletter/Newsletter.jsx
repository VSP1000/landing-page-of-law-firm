import React from 'react'
import styles from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <div className={styles.capsule}>
        <div className={styles.newsletter}>
            <h1>Subscribe Our Newsletter</h1>
            <div className={styles.input}>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Enter your Email'/>
                <button>SEND</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter