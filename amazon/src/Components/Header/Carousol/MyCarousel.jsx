import React from 'react'
import {Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {img} from"./img/Data"
import classes from "./MyCarousel.module.css"


function MyCarousel() {
  return (
    <div>
        <Carousel autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}>

        {
            img.map((imageItemLink)=>{
                return <img src={imageItemLink}/>
            })
        }
    

        </Carousel>
        <div className={classes.hero__img}></div>

    </div>
  )
}

export default MyCarousel