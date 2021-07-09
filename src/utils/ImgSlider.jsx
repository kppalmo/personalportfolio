import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import  back1 from '../img/back1.jpg';
import  back2 from '../img/back2.jpg';

const Styles = styled.div`
.swiper-container {
    width: 100%;
    height: 45vh;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0% 30%;

  }
  .text-swipe{
    position:absolute;
  }



`

export const ImgSlider = () => (
    <Styles>
        <Swiper className="mySwiper">
            <SwiperSlide>
              <h1 class="text-swipe">Keegan Palmo Rocks!</h1>
              <Image src={back1}/>
            </SwiperSlide>
            <SwiperSlide><Image src={back2}/></SwiperSlide>
        </Swiper>
    </Styles>
)