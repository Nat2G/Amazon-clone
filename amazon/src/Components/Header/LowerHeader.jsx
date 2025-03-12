import React from 'react'
import classes from "./Header.module.css"
import { CiMenuBurger } from "react-icons/ci";

function LowerHeader() {
  return (
    
    <div className={classes.lower__container}>
    <ul>
    
        <li>
        <CiMenuBurger />
            <p>All</p>
            </li>
        <li>Tody's deal</li>
        <li>Customer service</li>
        <li>Registratinon</li>
        <li>Gift card</li>
        <li>Sell</li>
        </ul>
        
        </div>
        
  )
}

export default LowerHeader