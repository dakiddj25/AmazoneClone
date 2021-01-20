import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"


function Heading() {
  const basket = useSelector(state => state.basket);

  return (
    <div className="header">
    <Link to ='/'>
      <img
        className="header_logo"
        src="https://sybergaming.com/wp-content/uploads/2019/03/amazon-logo.png"
      />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className='header_searchIcon' color = 'white'/>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest </span>
        <Link to = "login">
          <span className="header_optionLineTwo">Sign In </span>
        </Link>

        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Returns </span>
          <span className="header_optionLineTwo">& Orders </span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your </span>
          <span className="header_optionLineTwo">Prime </span>
        </div>

        <Link to='/checkout'>
          <div className='header_optionBasket'>
          <ShoppingBasketIcon/>
          <span className = 'header_optionLineTwo Header_basketCount'>{basket?.length}</span>

          </div>
        </Link>

      </div>
    </div>
  );
}

export default Heading;
