import React from 'react'
import {CatagoryInfos} from "./CatagoryFull"
import CatagoryCard from './CatagoryCard'

function Catagory() {
  return (
    <section>

    {
        CatagoryInfos.map((infos)=>{
            return<CatagoryCard data={infos}/>
        })
    }

    </section>
  )
}

export default Catagory