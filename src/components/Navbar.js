import React from 'react';
import styled from "styled-components";
import {MdMenu, MdShoppingCart} from "react-icons/md";
import {AiOutlineSearch} from "react-icons/ai";
import {Link} from 'react-router-dom';
import { useSidebarContext } from '../context/sidebar_context';
import { useCartContext } from '../context/cart_context';
//import Lg from "./Lg"

const Navbar = () => {
  const {total_items} = useCartContext();
  const {openSidebar} = useSidebarContext();
  
  

  return (
    <NavbarWrapper className = "bg-white flex">
      <div className='container w-100'>
        <div className='brand-and-toggler flex flex-between w-100'>
          <Link to = "/" className='navbar-brand text-uppercase ls-1 fw-8'>
            <span>U</span>demy
          </Link>
          <div className='input-wrapper'>
          <AiOutlineSearch className='search'/>
          <input placeholder='find the Courses'></input>
          </div>
          <div className='navbar-btns flex'>
            <Link to = "/cart" className='cart-btn'>
              <MdShoppingCart />
              <span className='item-count-badge'>{total_items}</span>
            </Link>
            
            <button type = "button" className='sidebar-open-btn' onClick={() => openSidebar()}>
              <MdMenu />
            </button>
            <Link className='user' to="/Lg">USER</Link>
            <Link className='admin' to="/admin">ADMIN</Link>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand{
    font-size: 23px;
    span{
      color: var(--clr-orange);
    }
  }
  .cart-btn{
    margin-right: 18px;
    font-size: 23px;
    
    position: relative;
    .item-count-badge{
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .input-wrapper{
      background-color:light-yellow;
      width:350px;
      border-radius:10px;
      height:2.8rem;
      padding:10px 15px;
      box-shadow:2px 2px 2px lightgreen;
      display:flex;
      align-items:center;

  }
  .user,.admin{
    display: inline-block;
    padding: 10px 15px;
    position:relative;
    left:35px;
    margin:10px 5px;
    font-size: 18px;
    width:100px;
    cursor: pointer;
     text-align: center;
     text-decoration: none;
     outline: none;
     color: #fff;
     background-color: lightblue;
     border: none;
     border-radius: 15px;
     box-shadow: 0 3px lightgreen;
  }
  
  .search{
    width:25px;
  }

  .sidebar-open-btn{
    transition: all 300ms ease-in-out;
    &:hover{
      opacity: 0.7;
    }
  }
`;

export default Navbar;