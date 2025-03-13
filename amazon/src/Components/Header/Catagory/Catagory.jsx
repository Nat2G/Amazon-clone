import React from 'react'
import { CatagoryInfos } from "./CatagoryFull";
import CatagoryCard from './CatagoryCard'
import classes from "./Catagory.module.css"

function Catagory() {
  return (
    <section className={classes.catagory__container}>

    {
        CatagoryInfos.map((infos)=>{
            return<CatagoryCard data={infos}/>
        })
    }

    </section>
  )
}

export default Catagory