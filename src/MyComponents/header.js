import React from "react";
import css from "./complete.css";
import { FaFacebook } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { CgMenuBoxed } from "react-icons/cg";
function Header() {
    return (
        <>
            <header>

                <div class="header-top">

                    <div class="container">

                        <ul class="header-social-container">

                            <li>
                                <a href="#" class="social-link">
                                <FaFacebook />
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                <FiTwitter />
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                <FaInstagram />
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                <FaLinkedin />
                                </a>
                            </li>

                        </ul>

                        <div class="header-alert-news">
                            <p>
                               <center> <b>Organise your Event with us</b>
                                <br/>
                                Book your first event with us and get extra discount
                                </center>
                            </p>
                        </div>

                        <div class="header-top-actions">
                              
                            <select name="language">

                                <option value="en-US">English</option>
                                <option value="es-ES">Hindi </option>
                              

                            </select>

                        </div>

                    </div>

                </div>

                <div class="header-main">

                    <div class="container">

                        <a href="#" class="header-logo">
                            <img src="../image/evesparks.png" alt="evesparks's logo" width="100" height="50"/>
                        </a>

                        <div class="header-search-container">

                            <input type="text" class="search-input" placeholder="  Search for services..."/>

                                <button class="search-btn">
                                <IoMdSearch />
                                </button>

                        </div>

                        <div class="header-user-actions">

                            <button class="action-btn">
                            <IoPersonCircle />
                            </button>

                            <button class="action-btn">
                            <FaRegHeart />
                                <span class="count">5</span>
                            </button>

                            <button class="action-btn">
                            <FiShoppingCart />
                                <span class="count">0</span>
                            </button>

                        </div>

                    </div>

                </div>

                <nav class="desktop-navigation-menu">

                    <div class="container">

                        <ul class="desktop-menu-category-list">

                            <li class="menu-category">
                                <a href="#" class="menu-title">Home</a>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Categories</a>

                                <div class="dropdown-panel">

                                    <ul class="dropdown-panel-list">

                                        <li class="menu-title">
                                            <a href="#">Decoration</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Balloon Decoration</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Flowers Decoration</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Light Decoration</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Complete Package</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">others...</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">
                                             
                                            </a>
                                        </li>

                                    </ul>

                                    <ul class="dropdown-panel-list">

                                        <li class="menu-title">
                                            <a href="#">Event</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Wedding</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Parties</a>
                                        </li>
                                        <li class="panel-list-item">
                                            <a href="#">Concerts</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Official events</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Other</a>
                                        </li>
                                        <li class="panel-list-item">
                                            <a href="#">
                                              
                                            </a>
                                        </li>

                                    </ul>

                                    <ul class="dropdown-panel-list">

                                        <li class="menu-title">
                                            <a href="#">Catering Services</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">North Indian</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">South Indian </a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Gujarati</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Other</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">
                                                
                                            </a>
                                        </li>

                                    </ul>
{/* 
                                    <ul class="dropdown-panel-list">

                                        <li class="menu-title">
                                            <a href="#">Electronics</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Smart Watch</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Smart TV</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Keyboard</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Mouse</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Microphone</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">
                                                
                                            </a>
                                        </li>

                                    </ul> */}

                                </div>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Corporate Events</a>

                                <ul class="dropdown-list">

                                    <li class="dropdown-item">
                                        <a href="#">Seminars</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Conferences</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Other</a>
                                    </li>

                                 
                                </ul>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Social events </a>

                                <ul class="dropdown-list">

                                    <li class="dropdown-item">
                                        <a href="#">Birthday parties</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Concert</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">weddings</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Other</a>
                                    </li>

                                </ul>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Complete Package</a>

                              
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Budget Planner</a>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Other Services</a>

                                {/* <ul class="dropdown-list">

                                    <li class="dropdown-item">
                                        <a href="#">Earrings</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Couple Rings</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Necklace</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Bracelets</a>
                                    </li>

                                </ul> */}
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Hot Offers</a>
                            </li>

                        </ul>

                    </div>

                </nav>

                <div class="mobile-bottom-navigation">

                    <button class="action-btn" data-mobile-menu-open-btn>
                    <GiHamburgerMenu />
                    </button>
                    <button class="action-btn">
                            <IoPersonCircle />
                            </button>

                            <button class="action-btn">
                            <FaRegHeart />
                                <span class="count">5</span>
                            </button>

                            <button class="action-btn">
                            <FiShoppingCart />
                                <span class="count">0</span>
                            </button>
                    <button class="action-btn" >
                    <CgMenuBoxed />
                    </button>

                </div>

                <nav class="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

                    <div class="menu-top">
                        <h2 class="menu-title">Menu</h2>

                        <button class="menu-close-btn" data-mobile-menu-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>

                    <ul class="mobile-menu-category-list">

                        <li class="menu-category">
                            <a href="#" class="menu-title">Home</a>
                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Men's</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Shirt</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Shorts & Jeans</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Safety Shoes</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Wallet</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Women's</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Dress & Frock</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Earrings</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Necklace</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Makeup Kit</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Jewelry</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Earrings</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Couple Rings</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Necklace</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Bracelets</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Perfume</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Clothes Perfume</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Deodorant</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Flower Fragrance</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Air Freshener</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">
                            <a href="#" class="menu-title">Blog</a>
                        </li>

                        <li class="menu-category">
                            <a href="#" class="menu-title">Hot Offers</a>
                        </li>

                    </ul>

                    <div class="menu-bottom">

                        <ul class="menu-category-list">

                            <li class="menu-category">

                                <button class="accordion-menu" data-accordion-btn>
                                    <p class="menu-title">Language</p>

                                    <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                                </button>

                                <ul class="submenu-category-list" data-accordion>

                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">English</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">Espa&ntilde; ol</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">Fren&ccedil;h</a>
                                    </li>

                                </ul>

                            </li>

                            <li class="menu-category">
                                <button class="accordion-menu" data-accordion-btn>
                                    <p class="menu-title">Currency</p>
                                    <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                                </button>

                                <ul class="submenu-category-list" data-accordion>
                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">USD &dollar;</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">EUR &euro;</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                        <ul class="menu-social-container">

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>

                        </ul>

                    </div>

                </nav>

            </header>
        </>
    );
}

export default Header;