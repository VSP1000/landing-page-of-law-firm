import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import React from 'react'
import styles from './Faq.module.css'


const Faq = () => {
  return (
    <div className={styles.faq}>
        <div>
            <h1>FAQ</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>
        <div className={styles.accordian}>
            <Accordion className={styles.accordianStart}>
                <AccordionSummary
                expandIcon={<ControlPointRoundedIcon style={{ color: '#E3B748' }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Do I need a personal injury report?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={styles.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordianStart}>
                <AccordionSummary
                expandIcon={<ControlPointRoundedIcon style={{ color: '#E3B748' }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>How much is my case worth?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={styles.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordianStart}>
                <AccordionSummary
                expandIcon={<ControlPointRoundedIcon style={{ color: '#E3B748' }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>What should I do right after car accidect</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={styles.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordianStart}>
                <AccordionSummary
                expandIcon={<ControlPointRoundedIcon style={{ color: '#E3B748' }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>How much is my case worth?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={styles.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
  )
}

export default Faq