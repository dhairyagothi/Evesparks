import React from "react";
import css from "./complete.css";

function Product() {
    return (
        <>
            <div>

                <div class="banner">

                    <div class="container">

                        <div class="slider-container has-scrollbar">

                            <div class="slider-item">

                                 <img src="../image/b1.jpg" alt="banner" class="banner-img"/> 

                                <div class="banner-content">

                                    <p class="banner-subtitle">Trending Offers</p>

                                    <h2 class="banner-title">Wedding Season sale</h2>

                                    <p class="banner-text">
                                        <b>Extra 20% off </b> On <b>complete Wedding package</b>
                                    </p>

                                    <a href="#" class="banner-btn">Get Quote now</a>

                                </div>

                            </div>

                            <div class="slider-item">

                                <img src="../image/b2.jpg" alt="banner" class="banner-img"/>

                                <div class="banner-content">

                                    <p class="banner-subtitle">Trending Offers</p>

                                    <h2 class="banner-title">Concerts</h2>

                                    <p class="banner-text">
                                        Get extra <b>10% off</b>on <br/><b>Concerts Event</b>
                                    </p>

                                    <a href="#" class="banner-btn">Book now</a>

                                </div>

                            </div>

                            <div class="slider-item">

                                <img src="../image/b3.png" alt="banner" class="banner-img"/>

                                <div class="banner-content">

                                    <p class="banner-subtitle">Organise your event in your Budget</p>

                                    <h2 class="banner-title">Customized Event Planner</h2>

                                    <p class="banner-text">
                                        Customized event pack <br/> according to your budget
                                    </p>

                                    <a href="#" class="banner-btn">Contact now</a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>


            




            {/* <!--
      - PRODUCT
    --> */}




                        <div class="product-minimal">

                            <div class="product-showcase">

                                <h3 class="title"><b><br/>Event Packs</b></h3>

                                <div class="showcase-wrapper has-scrollbar">

                                    <div class="showcase-container">

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                <img src="../image/b3.png" alt="wedding" width="70" class="showcase-img" />
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Wedding Event Packs</h4>
                                                </a>

                                               <b> <a href="#" class="showcase-category">Complete Weeding pack</a></b>
                                                includes : 
                                                    Wedding Decor
                                                    Wedding Catering
                                                    Wedding Photography
                                                    Wedding Event Planner
                                                    And many more...
                                                <br/>
                                                <div class="price-box">
                                                    <p class="price"><br/>Find best Price</p>
                                                    
                                                    <a href="#" class="banner-btn"><br/>Get Quote now</a>
                                                    
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                <img src="./assets/images/products/clothes-2.jpg" alt="girls pink embro design top" class="showcase-img" width="70" />
                                            </a>

                                            <div class="showcase-content">

                                            <a href="#">
                                                    <h4 class="showcase-title">Birthday Event Packs</h4>
                                                </a>

                                               <b> <a href="#" class="showcase-category">Complete Birthday pack</a></b>
                                                includes :
                                                    Birthday Decor
                                                    Birthday Catering
                                                    Birthday Photography
                                                    Birthday Event Planner
                                                    And many more...
                                                <br/>
                                                <div class="price-box">
                                                    <p class="price"><br/>Find best Price</p>
                                                    
                                                    <a href="#" class="banner-btn"><br/>Get Quote now</a>
                                                    
                                                </div>

                                        </div>
                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                <img src="./assets/images/products/clothes-3.jpg" alt="black floral wrap midi skirt" class="showcase-img"
                                        width="70" />
                                            </a>

                                            <div class="showcase-content">

                                            <a href="#">
                                                    <h4 class="showcase-title">Concert Packs</h4>
                                                </a>

                                               <b> <a href="#" class="showcase-category">Complete Concert pack</a></b>
                                                includes :
                                                    Concert Decor
                                                    Concert Catering
                                                    Concert Photography
                                                    Concert Event Planner
                                                    And many more...
                                                <br/>
                                                <div class="price-box">
                                                    <p class="price"><br/>Find best Price</p>
                                                    
                                                    <a href="#" class="banner-btn"><br/>Get Quote now</a>
                                                    
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                <img src="./assets/images/products/shirt-1.jpg" alt="pure garment dyed cotton shirt" class="showcase-img" width="70" />
                                                 
                                            </a>

                                            <div class="showcase-content">

                                            <a href="#">
                                                    <h4 class="showcase-title">Corporate Event Packs</h4>
                                                </a>

                                               <b> <a href="#" class="showcase-category">Complete Corporate Event pack</a></b>
                                                includes : 
                                                    Corporate Event Decor
                                                    Corporate Event Photography
                                                    Corporate Event Planner
                                                    And many more...
                                                <br/>
                                                <div class="price-box">
                                                    <p class="price"><br/>Find best Price</p>
                                                    
                                                    <a href="#" class="banner-btn"><br/>Get Quote now</a>
                                                    
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="showcase-container">

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/jacket-5.jpg" alt="men yarn fleece full-zip jacket" class="showcase-img" */}
                                                {/* // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                            <a href="#">
                                                    <h4 class="showcase-title"> Festival Event Packs</h4>
                                                </a>

                                               <b> <a href="#" class="showcase-category">Complete Festival pack</a></b>
                                                includes :
                                                    Festival Decor
                                                    Festival Food Catering
                                                    Festival Photography
                                                    Festival Event Planner
                                                    And many more...
                                                <br/>
                                                <div class="price-box">
                                                    <p class="price"><br/>Find best Price</p>
                                                    
                                                    <a href="#" class="banner-btn"><br/>Get Quote now</a>
                                                    
                                                </div>
                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/jacket-1.jpg" alt="mens winter leathers jackets" class="showcase-img" */}
                                                {/* // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                            <a href="#">
                                                    <h4 class="showcase-title">Meetings</h4>
                                                </a>

                                               <b> <a href="#" class="showcase-category">Complete Corporate meeting pack</a></b>
                                                includes : 
                                                    Corporate Meeting ancors 
                                                    Corporate Meeting Decor
                                                    Corporate Meeting Photography
                                                    Corporate Meeting Event Planner
                                                    And many more...
                                                <br/>
                                                <div class="price-box">
                                                    <p class="price"><br/>Find best Price</p>
                                                    
                                                    <a href="#" class="banner-btn"><br/>Get Quote now</a>
                                                    
                                                </div>
                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/jacket-3.jpg" alt="mens winter leathers jackets" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                            <a href="#">
                                                    <h4 class="showcase-title">Customized Event Packs</h4>
                                                </a>

                                               <b> <a href="#" class="showcase-category">Customize your pack</a></b>
                                                Make your own pack according to your budget
                                                <br/>
                                                <div class="price-box">
                                                    <p class="price"><br/> Customize your pack at best price </p>
                                                    
                                                    <a href="#" class="banner-btn"><br/>Get Customized pack now</a>
                                                    
                                                </div>
                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/shorts-1.jpg" alt="better basics french terry sweatshorts" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">
                                            <a href="#">
                                                    <h4 class="showcase-title">Evespark's Packs</h4>
                                                </a>

                                               <b> <a href="#" class="showcase-category">Evespark's pack</a></b>
                                                includes : 
                                                     Decor
                                                     Catering
                                                    Photography
                                                     Event Planner
                                                    And many more...
                                                <br/>
                                                <div class="price-box">
                                                    <p class="price"><br/>Find best Price</p>
                                                    
                                                    <a href="#" class="banner-btn"><br/>Get Quote now</a>
                                                    
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="product-showcase">

                                <h2 class="title"><b>Search Near Your location</b></h2>

                                <div class="showcase-wrapper  has-scrollbar">

                                    <div class="showcase-container">

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/sports-1.jpg" alt="running & trekking shoes - white" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Running & Trekking Shoes - White</h4>
                                                </a>

                                                <a href="#" class="showcase-category">Sports</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.49000.00/-</p>
                                                    <del>Rs.15000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/sports-2.jpg" alt="trekking & running shoes - black" class="showcase-img" */}
                                                {/* // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Trekking & Running Shoes - black</h4>
                                                </a>

                                                <a href="#" class="showcase-category">Sports</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.78000.00/-</p>
                                                    <del>Rs.36000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/party-wear-1.jpg" alt="womens party wear shoes" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Womens Party Wear Shoes</h4>
                                                </a>

                                                <a href="#" class="showcase-category">Party wear</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.94000.00/-</p>
                                                    <del>Rs.42000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/sports-3.jpg" alt="sports claw women's shoes" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Sports Claw Women's Shoes</h4>
                                                </a>

                                                <a href="#" class="showcase-category">Sports</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.54000.00/-</p>
                                                    <del>Rs.65000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div class="showcase-container">

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/sports-6.jpg" alt="air tekking shoes - white" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Air Trekking Shoes - white</h4>
                                                </a>

                                                <a href="#" class="showcase-category">Sports</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.52000.00/-</p>
                                                    <del>Rs.55000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                <img src="./assets/images/products/shoe-3.jpg" alt="Boot With Suede Detail" class="showcase-img" width="70" />
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Boot With Suede Detail</h4>
                                                </a>

                                                <a href="#" class="showcase-category">boots</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.20000.00/-</p>
                                                    <del>Rs.30000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/shoe-1.jpg" alt="men's leather formal wear shoes" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Men's Leather Formal Wear shoes</h4>
                                                </a>

                                                <a href="#" class="showcase-category">formal</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.56000.00/-</p>
                                                    <del>Rs.78000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                <img src="./assets/images/products/shoe-2.jpg" alt="casual men's brown shoes" class="showcase-img" width="70" />
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Casual Men's Brown shoes</h4>
                                                </a>

                                                <a href="#" class="showcase-category">Casual</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.50000.00/-</p>
                                                    <del>Rs.55000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="product-showcase">

                                <h2 class="title">Top Rated</h2>

                                <div class="showcase-wrapper  has-scrollbar">

                                    <div class="showcase-container">

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/watch-3.jpg" alt="pocket watch leather pouch" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Pocket Watch Leather Pouch</h4>
                                                </a>

                                                <a href="#" class="showcase-category">Watches</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.50000.00/-</p>
                                                    <del>Rs.34000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/jewellery-3.jpg" alt="silver deer heart necklace" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Silver Deer Heart Necklace</h4>
                                                </a>

                                                <a href="#" class="showcase-category">Jewellery</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.84000.00/-</p>
                                                    <del>Rs.30000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/perfume.jpg" alt="titan 100 ml womens perfume" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Titan 100 Ml Womens Perfume</h4>
                                                </a>

                                                <a href="#" class="showcase-category">Perfume</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.42000.00/-</p>
                                                    <del>Rs.10000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/belt.jpg" alt="men's leather reversible belt" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Men's Leather Reversible Belt</h4>
                                                </a>

                                                <a href="#" class="showcase-category">Belt</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.24000.00/-</p>
                                                    <del>Rs.10000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div class="showcase-container">

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/jewellery-2.jpg" alt="platinum zircon classic ring" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">platinum Zircon Classic Ring</h4>
                                                </a>

                                                <a href="#" class="showcase-category">jewellery</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.62000.00/-</p>
                                                    <del>Rs.65000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                <img src="./assets/images/products/watch-1.jpg" alt="smart watche vital plus" class="showcase-img" width="70" />
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Smart watche Vital Plus</h4>
                                                </a>

                                                <a href="#" class="showcase-category">Watches</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.56000.00/-</p>
                                                    <del>Rs.78000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/shampoo.jpg" alt="shampoo conditioner packs" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">shampoo conditioner packs</h4>
                                                </a>

                                                <a href="#" class="showcase-category">cosmetics</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.20000.00/-</p>
                                                    <del>Rs.30000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                {/* <img src="./assets/images/products/jewellery-1.jpg" alt="rose gold peacock earrings" class="showcase-img"
                                        // width="70" /> */}
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">Rose Gold Peacock Earrings</h4>
                                                </a>

                                                <a href="#" class="showcase-category">jewellery</a>

                                                <div class="price-box">
                                                    <p class="price">Rs.20000.00/-</p>
                                                    <del>Rs.30000.00/-</del>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>





                        <div class="product-featured">

                            <h2 class="title">Deal of the day</h2>

                            <div class="showcase-wrapper has-scrollbar">

                                <div class="showcase-container">

                                    <div class="showcase">

                                        <div class="showcase-banner">
                                            {/* <img src="./assets/images/products/shampoo.jpg" alt="shampoo, conditioner & facewash packs" class="showcase-img" />
                            </div> */}

                                            <div class="showcase-content">

                                                <div class="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                </div>

                                                <a href="#">
                                                    <h3 class="showcase-title">shampoo, conditioner & facewash packs</h3>
                                                </a>

                                                <p class="showcase-desc">
                                                    Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                                    dolor dolor sit amet consectetur Lorem ipsum dolor
                                                </p>

                                                <div class="price-box">
                                                    <p class="price">Rs.150000.0/-0</p>

                                                    <del>Rs.200000.0/-0</del>
                                                </div>

                                                <button class="add-cart-btn">add to cart</button>

                                                <div class="showcase-status">
                                                    <div class="wrapper">
                                                        <p>
                                                            already sold: <b>20</b>
                                                        </p>

                                                        <p>
                                                            available: <b>40</b>
                                                        </p>
                                                    </div>

                                                    <div class="showcase-status-bar"></div>
                                                </div>

                                                <div class="countdown-box">

                                                    <p class="countdown-desc">
                                                        Hurry Up! Offer ends in:
                                                    </p>

                                                    <div class="countdown">

                                                        <div class="countdown-content">

                                                            <p class="display-number">360</p>

                                                            <p class="display-text">Days</p>

                                                        </div>

                                                        <div class="countdown-content">
                                                            <p class="display-number">24</p>
                                                            <p class="display-text">Hours</p>
                                                        </div>

                                                        <div class="countdown-content">
                                                            <p class="display-number">59</p>
                                                            <p class="display-text">Min</p>
                                                        </div>

                                                        <div class="countdown-content">
                                                            <p class="display-number">00</p>
                                                            <p class="display-text">Sec</p>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div class="showcase-container">

                                        <div class="showcase">

                                            <div class="showcase-banner">
                                                {/* <img src="./assets/images/products/jewellery-1.jpg" alt="Rose Gold diamonds Earring" class="showcase-img" />
                            </div> */}

                                                <div class="showcase-content">

                                                    <div class="showcase-rating">
                                                        <ion-icon name="star"></ion-icon>
                                                        <ion-icon name="star"></ion-icon>
                                                        <ion-icon name="star"></ion-icon>
                                                        <ion-icon name="star-outline"></ion-icon>
                                                        <ion-icon name="star-outline"></ion-icon>
                                                    </div>

                                                    <h3 class="showcase-title">
                                                        <a href="#" class="showcase-title">Rose Gold diamonds Earring</a>
                                                    </h3>

                                                    <p class="showcase-desc">
                                                        Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                                        dolor dolor sit amet consectetur Lorem ipsum dolor
                                                    </p>

                                                    <div class="price-box">
                                                        <p class="price">Rs.1900090./-00</p>
                                                        <del>Rs.2000000./-00</del>
                                                    </div>

                                                    <button class="add-cart-btn">add to cart</button>

                                                    <div class="showcase-status">
                                                        <div class="wrapper">
                                                            <p> already sold: <b>15</b> </p>

                                                            <p> available: <b>40</b> </p>
                                                        </div>

                                                        <div class="showcase-status-bar"></div>
                                                    </div>

                                                    <div class="countdown-box">

                                                        <p class="countdown-desc">Hurry Up! Offer ends in:</p>

                                                        <div class="countdown">
                                                            <div class="countdown-content">
                                                                <p class="display-number">360</p>
                                                                <p class="display-text">Days</p>
                                                            </div>

                                                            <div class="countdown-content">
                                                                <p class="display-number">24</p>
                                                                <p class="display-text">Hours</p>
                                                            </div>

                                                            <div class="countdown-content">
                                                                <p class="display-number">59</p>
                                                                <p class="display-text">Min</p>
                                                            </div>

                                                            <div class="countdown-content">
                                                                <p class="display-number">00</p>
                                                                <p class="display-text">Sec</p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>




                                <div class="product-search-container">

                                    <input type="text" class="search-input" placeholder="Search  by your location " />

                                    <button class="search-btn">
                                        <ion-icon name="search-outline"></ion-icon>
                                    </button>

                                </div>



                                <div class="product-main">

                                    <h2 class="title">New Products</h2>

                                    <div class="product-grid">

                                        <div class="showcase">

                                            <div class="showcase-banner">

                                                {/* <img src="./assets/images/products/jacket-3.jpg" alt="Mens Winter Leathers Jackets" width="300" class="product-img default" />
                            <img src="./assets/images/products/jacket-4.jpg" alt="Mens Winter Leathers Jackets" width="300" class="product-img hover" />
                            <p class="showcase-badge">15%</p> */}

                                                <div class="showcase-actions">

                                                    <button class="btn-action">
                                                        <ion-icon name="heart-outline"></ion-icon>
                                                    </button>

                                                    <button class="btn-action">
                                                        <ion-icon name="eye-outline"></ion-icon>
                                                    </button>

                                                    <button class="btn-action">
                                                        <ion-icon name="repeat-outline"></ion-icon>
                                                    </button>

                                                    <button class="btn-action">
                                                        <ion-icon name="bag-add-outline"></ion-icon>
                                                    </button>

                                                </div>

                                            </div>
                                            <div class="showcase-content">

                                                <a href="#" class="showcase-category">jacket</a>

                                                <a href="#">
                                                    <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
                                                </a>

                                                <div class="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                </div>

                                                <div class="price-box">
                                                    <p class="price">Rs.48000.00/-</p>
                                                    <del>Rs.75000.00/-</del>
                                                </div>

                                            </div>

                                        </div>



                                       

                                       

                                        <div class="showcase">

                                            <div class="showcase-banner">
                                                {/* <img src="./assets/images/products/clothes-3.jpg" alt="Black Floral Wrap Midi Skirt" class="product-img default"
                                width="300" /> */}
                                                {/* <img src="./assets/images/products/clothes-4.jpg" alt="Black Floral Wrap Midi Skirt" class="product-img hover"
                                width="300" /> */}

                                                <p class="showcase-badge angle pink">new</p>

                                                <div class="showcase-actions">
                                                    <button class="btn-action">
                                                        <ion-icon name="heart-outline"></ion-icon>
                                                    </button>

                                                    <button class="btn-action">
                                                        <ion-icon name="eye-outline"></ion-icon>
                                                    </button>

                                                    <button class="btn-action">
                                                        <ion-icon name="repeat-outline"></ion-icon>
                                                    </button>

                                                    <button class="btn-action">
                                                        <ion-icon name="bag-add-outline"></ion-icon>
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="showcase-content">
                                                <a href="#" class="showcase-category">skirt</a>

                                                <h3>
                                                    <a href="#" class="showcase-title">Black Floral Wrap Midi Skirt</a>
                                                </h3>

                                                <div class="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                </div>

                                                <div class="price-box">
                                                    <p class="price">Rs.25000.00/-</p>
                                                    <del>Rs.35000.00/-</del>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            

    </div></>
    );
}

export default Product;

