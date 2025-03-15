import React from 'react'
import classes from "./Catagory.module.css"
import { Link } from 'react-router-dom'

function CatagoryCard({data}) {
  if (!data) return <p>Loading...</p>; // ✅ Prevents crash
  return (
    <div  className={classes.catagory}>
        <Link to={`/catagory/${data.name}`}>      {/* //To disply /Any cliked button on the top of teh link */}

            <span>
                <h2>{data.title}</h2>
            </span>
            <img src={data.imgLink} alt="" />
            <p>shop now</p>
        </Link>
    </div>
  )
}

export default CatagoryCard