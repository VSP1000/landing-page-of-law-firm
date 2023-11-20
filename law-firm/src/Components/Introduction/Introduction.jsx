import React from 'react';
import styles from './Introduction.module.css';

const Introduction = () => {
  return (
    <div className={styles.introduction}>
        <h1>Let’s Introduce <br/>Ourself</h1>
        <div className={styles.line}></div>
        <div>
            <h3>Criminal Lawyer</h3>
            <p>Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequatduis
            enim velit mollit Exercitation.</p>
        </div>
    </div>
  )
}

export default Introduction