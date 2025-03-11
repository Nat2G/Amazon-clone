import React from 'react'
import { FaSearch } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

import classes from "./Header.module.css"

function Header() {
  return (
    <section>
      <div className={classes.header__container}>
        <div className={classes.logo__container}>
          {/* logo section*/}
          <a href="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />
          </a>
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

          
          <div>
            {/* three components */}
            <a href="">
              <div>
                <p>sign in</p>
                <span>Acount and lists</span>
              </div>
            </a>
            {/* orders */}
            <a href="">
              <p>return</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href='' className={classes.cart}>
            <BiCart size={35}/>

            {/* icon */}
            <span>
            0
            </span>


            </a>


          </div>




        </div>
      </div>
      </section>
  )
}

export default Header