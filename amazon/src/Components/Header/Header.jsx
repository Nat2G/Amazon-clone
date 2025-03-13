import React from 'react'
import LowerHeader from './LowerHeader';
import { FaSearch } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { Link } from 'react-router-dom';

import classes from "./Header.module.css"

function Header() {
  return (
    <section>
      <div className={classes.header__container}>
        <div className={classes.logo__container}>
          {/* logo section*/}
          <Link to="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />
          </Link>
          <div className={classes.delivery}>

          {/* deilivery */}
          <span>
            {/* icon */}
            <SlLocationPin />
          </span>
          <div>
            <p>Deliverd to</p>
            <span>Ethiopia</span>
          </div>
          </div>


        </div>

        <div className={classes.search}>
          {/* search bar */}
          <select name="" id="">
            <option value="">All</option>
          </select>

          <input type="text" placeholder='search her' />

            {/* icon */}
            <BsSearch />
          

        </div>

{/* right icon */}
        <div className={classes.order__container}>


          <div className={classes.language}>
            <img src="https://pngimg.com/uploads/flags/flags_PNG14592.png" alt="" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>

          
          <div className={classes.threeComp}>
            {/* three components */}
            <Link to="/Auth">
              <div>
                <p>Hello sign in</p>
                <span>Account and lists</span>
              </div>
            </Link>
            {/* orders */}
            <Link to="/Orders">
              <p>return</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to='/Cart' className={classes.cart}>
            <BiCart size={35}/>

            {/* icon */}
            <span>
            0
            </span>


            </Link>


          </div>




        </div>
      </div>
      <LowerHeader/>
      </section>
  )
}

export default Header