import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../offers/offers.css'
import Offers2 from '../offers/offers2';
import Offers3 from '../offers/offers3';
import '../offers/offers.css'
import '../all-restaurant/allresturant.css'
// import { RiCoupon3Line } from "react-icons/ri";
import LanguageSwitcher from "./../LanguageSwitcher";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import { t } from 'i18next';


function Offers() {
  return (
    <div className="container w-75 border border-top-0 bordershadow">
        <div className="my-5 p-4">
                <p  className="fs-4 bg-light w-100 d-flex justify-content-start p-2  ">
                    {t("Offers")}
                </p>
        </div>
        
        



<div >
    <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="text-danger  myClass"
        fill
    >
        <Tab eventKey="home" color='red' className="border-top "  title="Home" style={{color:"black"}} >
        <Offers2 />
        </Tab>
        <Tab eventKey="profile" title="Profile">
        <Offers3 />
        </Tab>
    </Tabs>
    </div>
    </div>
  );
}


export default withTranslation ()(Offers);