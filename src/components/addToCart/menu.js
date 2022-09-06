import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {db} from './../../firebase-config'
import { updateDoc, doc,arrayUnion} from 'firebase/firestore';
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";  
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

import {
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./../../firebase-config";

// import { t } from 'i18next';

  function Menu(data) {
const menu= data.data
const history = useHistory();

const { t } = useTranslation();//
const [userr, setUserr] = useState({});

const MySwal = withReactContent(Swal);
function handleLogin (){
  onAuthStateChanged(auth, (currentUser) => {
    setUserr(currentUser);
    if (currentUser==null){
      MySwal.fire({
        title: <p>you must login first or Register</p>,
        footer: "Copyright 2022",
        onOpen: () => {

          setTimeout(() => MySwal.clickConfirm(), 2500);

        }
      }).then(() => {
        // return window.location.replace("http://localhost:3000/Login");
        history.push("/Login");

      });
      
    }else{
     console.log("ok done")
    }
  });
}


  // db.collection('User').doc(`PZzPDd5VLR5nrcI3jYjc`).set(meal, { merge: true })

  const addToCart = (meal) => {
// console.log(meal)
handleLogin()
const MealDocRef = doc(db, "users", "0s6q7RALHOeznSIuoZTm");
updateDoc(MealDocRef, {
  order: arrayUnion({...meal, "Quantity":1, }),
});
};

    return (
        <>

<div className='row' >
<div className='col-md-4'>


<Card className=' d-flex align-items-center py-3'> 
<Card.Text  className='fs-5 fw-bold'>{t("Categories")} </Card.Text>      
<Card.Text >{t("Drinks")} </Card.Text>      
<Card.Text >{t("meals")} </Card.Text>        

    </Card>


</div>
<div className='col-md-8'>

<Form className="d-flex  my-1 ">
              <Form.Control
              className='searchStyle p-2'
                type="search"
                placeholder="Search Restaurants"
                aria-label="Search"
              />
            </Form>
            <div className="card CardRest mt-3 p-2 " style={{width: "100%"}}>


            {menu.map((meal,i)=> {return (
            
<div className="row g-0  mb-3" key={i}>
  <div className="col-md-2 my-2  p-2  ">
<img src={require('./../img/4.PNG')} alt="" style={{width: "100%"}} className="imgBorder p-2"/>
  </div>


  <div className="col-md-7">
    <div className="card-body">
      <p className="card-text text lh-1">{meal.name}
      </p>
    
    </div>
  </div>

  <div className="col-md-2 mt-3">
      <p className="card-text text-muted  ">EGP {meal.price}
     <button className="btn btn d-flex ms-5 " onClick={() => addToCart(meal)} >  <i class="fa-solid fa-circle-plus lg " style={{color: '#00A346'}} size="500" ></i></button>
      </p>

</div>

</div>

)})}


</div>





</div>
</div> 









        
        </>
    
    )

}
export default withTranslation ()(Menu);