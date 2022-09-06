import React from 'react';
import './home.css';
import { Link } from 'react-router-dom'
import {useState} from 'react'

import LanguageSwitcher from "./../LanguageSwitcher";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import { t } from 'i18next';


const Home = (props) => {
    const [input, setInput] = useState(props?.value ?? '');


    return (
        <div className="container-fluid ">

<div className="row  " style={{ backgroundColor: "#ffeee5"  }} >
                <div className='col-md-3  d-md-block  d-none m-0 p-0'>
                    <img className="me-2"style={{ width: "60%" }} src='https://www.talabat.com/images/Talabat/marshmallow-banner-img-1.png' />
                    </div>
                
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                    <h1 className='mb-5 me-5'>{t("Order_food_online_in_Egypt")}</h1>
                    <div className='row ms-5 '>
                        <input className='col-8  ' size={60} placeholder='Search for area , street name ,landmark...'value={input.toLowerCase()} onInput={e => setInput(e.target.value)}  />
                        {/* <i class="fa-solid fa-location-dot"></i>  <i class="fa-solid fa-location-crosshairs"></i> */}
                        <Link to={`/searchToLocation/${input}`} className="col-3 ">
                        <button className="btn  " style={{backgroundColor: "#ff5a00" ,padding:" 8% 12%" , color: "#fff"}}>{t("Let's_go")}</button>

                        </Link>

                    </div>
                </div>                

                <div className='col-md-3  d-md-block  d-none  m-0 p-0 '>
                    <img className="" style={{ width: "100%" }} src='https://www.talabat.com/images/Talabat/marshamallow-banner-img-2.png' />
                </div>
            </div>

            <div className=' d-md-none  d-sm-block m-3 p-3 rounded' style={{ backgroundColor: "#a8c0f3" }}>
                <div className="row ">
                    <div className='col-1 m-2'><img style={{ width: "100%" }} src='https://www.talabat.com/images/Talabat/login-info-icon.png' /></div>
                    <div className='col-9'>
                        <div>{t("Enjoy_a_personalized_ordering_experience")}</div>
                        <a className='Explore'>{t("Login")} </a>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center m-5'>
                <h2>{t("Your_everyday,_right_away")}</h2>
                <div className='m-2' style={{ width: "40%", alignItems: "center", margin: "auto" }}>{t("Order_food_and_grocery_delivery_online_from_hundreds_of_restaurants_and_shops_nearby.")}</div>
                <div className='row m-4'>
                    {/* <a> <img src='./appStore.png' /></a><a> <img src='./googlePlay.png' /></a><a> <img src='appGallery.png' /></a> */}
                    <a style={{ width: "10rem" }}><img src="https://www.talabat.com/images/Talabat/logo_appstore.svg" /></a>
                    <a style={{ width: "10rem" }}><img src="https://www.talabat.com/images/Talabat/logo_playstore.svg" /></a>
                    <a style={{ width: "10rem" }}><img src="https://www.talabat.com/images/talabat/logo_huaweistore1.svg" /></a>
                </div>
            </div>


            {/* cards */}
            <div className='row justify-content-center align-items-center'>
                

                <div className="card mb-3 m-2 cardoooo" style={{ width: "27rem", height: "12rem" }}>
                    <div className="row g-0 ">
                        <div className="col-5">
                        <img src="https://www.talabat.com/images/Talabat/vertical-restaurants.png"
                                className="img-fluid rounded-start" alt="..."
                                style={{height: "12rem" , backgroundColor: "#f4aa33" }} />
                        </div>
                        <div className="col-7">
                            <div className="card-body">
                            <h5 className="card-title">{t("Restaurant")}</h5>
                                <p className="card-text">{t("Find_deals,_free_delivery,_and_more_from_our_restaurant_partners.")}</p>
                                <a className="Explore">{t("Explore")}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 m-2 cardoooo" style={{ width: "27rem", height: "12rem" }}>
                    <div className="row g-0 ">
                        <div className="col-5">
                            <img src="https://www.talabat.com/images/Talabat/vertical-grocery.png"
                                className="img-fluid rounded-start" alt="..."
                                style={{height: "12rem" , backgroundColor: "#f4aa33" }} />
                        </div>
                        <div className="col-7">
                        <div className="card-body">
                                <h5 className="card-title">{t("Grocery")}</h5>
                                <p className="card-text">{t("Don't_stand_in_line-order_online!_Choose_from_top_stores_delivering_groceries_to_you.")}</p>
                                <a className="Explore">{t("Explore")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* =============================================== */}
            <div className='d-flex flex-column justify-content-center align-items-center m-5'>
            <h2>{t("Join_us")}</h2>
                <div className='m-2' >{t("Be_a_part_of_the_talabat_story.")}</div>
            </div>

            {/* cards */}

           

            <div className='row justify-content-center align-items-center'>
                <div className="card col-md-4 col-7 mb-3 m-2 cardoooo" style={{ width: "27rem", height: "12rem" }}>
                    <div className="row g-0  ">
                        <div className="col-5  ">
                            <img src="https://www.talabat.com/images/talabat/become-a-partner.png"
                                className="img-fluid rounded-start" alt="..."
                                style={{ height: "12rem" }} />
                        </div>
                        <div className="col-7">
                            <div className="card-body">
                            <h5 className="card-title">{t("Become_a_partner")}</h5>
                                <p className="card-text">{t("Reach_more_customers_and_achieve_growth_with_us")}</p>
                                <Link to={`/searchToLocation/${input}`} className="col-3 ">

                                <button className='btn OrangeBtn Orange'> {t("Find_out_more")}</button>
                                </Link>
</div>
                        </div>
                    </div>
                </div>

                <div className="card col-md-4 col-7 mb-3 m-2 cardoooo" style={{ width: "27rem", height: "12rem" }}>
                    <div className="row g-0  ">
                        <div className="col-5  ">
                        <img src="https://www.talabat.com/images/talabat/career-with-us.png"
                                className="img-fluid rounded-start" alt="..."
                                style={{ height: "12rem" }} />
                        </div>
                        <div className="col-7">
                            <div className="card-body">
                            <h5 className="card-title">{t("Build_your_career")}</h5>
                                <p className="card-text">{t("Join_the_dynamic_team_that_makes_it_all_happen.")}</p>
                                <button className='btn OrangeBtn Orange'> {t("Find_jobs")}</button>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>

            {/* ================================================ */}

            <div className='row justify-content-center align-items-center m-4'>
                <div className='col-md-6 col-12'>
                <h1 className='my-3'>{t("Discover_the_new_talabat_app")}</h1>
                    <div>{t("Get_what_you_need,_when_you_need_it.")}</div>
                    <div className='row my-4'>
                        <a style={{ width: "12rem" }}><img src="https://www.talabat.com/images/Talabat/logo_appstore.svg" /></a>
                        <a style={{ width: "12rem" }}><img src="https://www.talabat.com/images/Talabat/logo_playstore.svg" /></a>
                        <a style={{ width: "12rem" }}><img src="https://www.talabat.com/images/talabat/logo_huaweistore1.svg" /></a>
                    </div>

                </div>
                <div className='col-md-4 col-7 '><img style={{ width: "100%"  }} src='https://www.talabat.com/images/Talabat/app-view-en.png' /></div>


            </div>


        </div>


    );
}

export default withTranslation()(Home);
