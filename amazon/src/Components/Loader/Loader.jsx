import React from 'react'
import {ClimbingBoxLoader} from "react-spinners"

function Loader() {
  return (
    <div 
    style={{
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        height:"50vh"
    }}>
        
        <ClimbingBoxLoader color="#798117" />
    
    
    </div>
  )
}

export default Loader