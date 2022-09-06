import './cart.css';
import Card from 'react-bootstrap/Card';
import LanguageSwitcher from "./../LanguageSwitcher";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import { t } from 'i18next';

 function Reviews() {

    
    return (
    <>


<h5> (61) {t("Reviews")}</h5>

<div className="row mx-1">


    <div className="col-md-3 styleborder text-muted">
    <p className="card-text text-muted lh-1 mt-3"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp;{t("Very_Good")}</p>
{t("Order_Packaging")}
    </div>
    <div className="col-md-3 styleborder text-muted">
    <p className="card-text text-muted lh-1 mt-3"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; {t("Very_Good")}</p>
{t("Delivery_time")}
    </div>
    <div className="col-md-3 styleborder text-muted">
    <p className="card-text text-muted lh-1 mt-3"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; {t("Very_Good")}</p>
{t("Value_for_money")}
    </div>
    <div className="col-md-3 text-muted">
    <p className="card-text text-muted lh-1 mt-3"><i className="fa-solid fa-face-smile"color='#cadbdb'></i> &nbsp; {t("Very_Good")}</p>
{t("Quality_of_food")}

    </div>

</div>


    <Card className='mt-5 cardbginReviews'>
      <Card.Body>
        <div className='d-flex'>
        <p className="card-text text-muted lh-1 mt-1"><i className="fa-solid fa-face-smile"color='#cadbdb'></i> &nbsp;{t("Amazing")} &nbsp;&nbsp;Abdulaziz N***
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          27 July 2022

</p>
        </div>

<p>{t("thanks_wow")}</p>          
   
      </Card.Body>
    </Card>

    <Card className='mt-2 cardbginReviews'>
      <Card.Body>
<p className="card-text text-muted lh-1 mt-1"><i className="fa-solid fa-face-smile"color='#cadbdb'></i> &nbsp;{t("Amazing")} &nbsp;&nbsp;ALi N***
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          27 July 2022

</p>
<p>{t("Very_Good")}</p>


      </Card.Body>
    </Card>

    <Card className='mt-2 cardbginReviews'>
      <Card.Body>
      <p className="card-text text-muted lh-1 mt-1"><i className="fa-solid fa-face-smile"color='#cadbdb'></i> 
      &nbsp;{t("Amazing")} &nbsp;&nbsp;Tia A***
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          27 July 2022

      </p>
<p>{t("good_but_try_to_be_v.good_the_taste_not_wow")}</p>
      </Card.Body>
    </Card>


        </>
    
    )

}
export default withTranslation ()(Reviews);