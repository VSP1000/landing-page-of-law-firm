import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import styles from './HappyClients.module.css'
import Sliders from '../../Container/Sliders/Sliders';
import Jane from '../../assets/Faces/1.png'
import Devon from '../../assets/Faces/2.png'
import Robert from '../../assets/Faces/3.png'

// SwiperCore.use([Navigation]);
const HappyClients = () => {

    // const swiper = new Swiper('.swiper', {
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //       }
    //     })
  return (
    <div className={styles.happyClients}>
        <h1>What says our happy Clients</h1>

        {/* <div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div> */}

        <Swiper 
            spaceBetween={1}
            slidesPerView={3}
            modules={[ Navigation ]}
            navigation={true}
            allowTouchMove
            className={styles.sliders}
        >

            
                <SwiperSlide>
                    <Sliders img={Jane} name='Jane Cooper' title='Ceo of Hunt' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'/>
                </SwiperSlide>
            
                <SwiperSlide>
                    <Sliders img={Devon} name='Devon Lane' title='Ceo of Hunt' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'/>
                </SwiperSlide>
         
                <SwiperSlide>
                    <Sliders img={Robert} name='Robert Fox' title='Ceo of Hunt' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'/>
                </SwiperSlide>

                <SwiperSlide>
                    <Sliders img={Jane} name='Jane Cooper' title='Ceo of Hunt' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'/>
                </SwiperSlide>
            
                <SwiperSlide>
                    <Sliders img={Devon} name='Devon Lane' title='Ceo of Hunt' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'/>
                </SwiperSlide>
         
                <SwiperSlide>
                    <Sliders img={Robert} name='Robert Fox' title='Ceo of Hunt' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'/>
                </SwiperSlide>
           
        </Swiper>

    </div>
  )
}

export default HappyClients;