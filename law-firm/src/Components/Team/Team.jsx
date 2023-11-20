import React from 'react'
import styles from './Team.module.css'
import Cesforila from '../../assets/team/Cesforila.png'
import Colleen from '../../assets/team/Colleen.png'
import Danial from '../../assets/team/Danial.png'
import NikJeo from '../../assets/team/Nik Jeo.png'
import Haldone from '../../assets/team/Haldone.png'
import Sanfole from '../../assets/team/Sanfole.png'

export const Team = () => {

    const data = [{name:'Danial Def',cases:301,img:Danial},
                  {name:'Sanfole', cases:850, img:Sanfole},
                  {name:'Cesforila', cases:470, img:Cesforila},
                  {name:'Colleen', cases:180, img:Colleen},
                  {name:'Haldone', cases:212, img:Haldone},
                  {name:'Nik Jeo', cases:350, img:NikJeo}]

  return (
    <div className={styles.team}>
        <h1>Our Team</h1>
        <div className={styles.cardHeader}>
          {data.map((item) => {
            return (
              <div className={styles.card}>
                <img src={item.img} alt={item.name} />
                <div className={styles.text}>
                  <h4>{item.name}</h4>
                  <div>{item.cases} Cases</div>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}