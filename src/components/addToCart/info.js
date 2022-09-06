import LanguageSwitcher from "./../LanguageSwitcher";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import { t } from 'i18next';



 function Info() {

    
        return (
            <>
<table className="table ">

  <thead className=" ">
    <tr className=" fs-3 my-3 ">
{t("Restaurant Name")}
    </tr>
  </thead>

  <tbody className="fs-6 mt-2 py-3">
<tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>{t("Working Hours")}</td>
      <td> 12:00{t("PM")} - 2:30{t("AM")} </td>
    </tr>
    <tr>
      <td>  {t("Delivery Time")}</td>
      <td> 34 {t("mins")} </td>
    </tr>
    <tr>
      <td> {t("Delivery fee")} </td>
      <td>EGP 4.99  </td>
    </tr>
    <tr>
      <td> {t("Pre-Order")} </td>
      <td> Yes </td>
    </tr>
    <tr>
      <td> {t("Payment")} </td>
      <td> <img src={require('./123.PNG')} alt="/" />
</td>
    </tr>
    <tr>
      <td>  {t("Rating")}</td>
      <td> <p className="card-text text-muted lh-1 mt-3">
        <i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; {t("Very_Good")}</p></td>
    </tr>
    <tr>
      <td>{t("Cuisines")}  </td>
      <td> {t("Fried chicken,_Sandwiches,_Burgers")} </td>
    </tr>

  </tbody>
</table>
            
            </>
        )}

export default withTranslation ()(Info);