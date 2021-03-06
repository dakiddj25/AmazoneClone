import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { auth } from '../firebase';


function Heading() {
  const basket = useSelector(state => state.basket);
  const user = useSelector(state => state.currentUser);

  const handleAuth = () => {
    if(auth){
      auth.signOut();
      console.log("auth "+ auth)
    }

  }

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
        <Link to = "login">
        <div onClick={handleAuth} className="header_option">
          <span className="header_optionLineOne">Hello guest </span>
          <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'} </span>
        </div>
        </Link>

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
