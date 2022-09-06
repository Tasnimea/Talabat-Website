import Card from 'react-bootstrap/Card';
import './cart.css';
import {useState , useEffect} from 'react'
import {db} from './../../firebase-config'
import { doc, getDoc,updateDoc, arrayRemove} from "firebase/firestore";
import LanguageSwitcher from "./../LanguageSwitcher";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import { t } from 'i18next'; 
// import {Checkout} from './../checkout'
import Paypal from './../paypal'
function Cardd(data) {
  const[Orders,setOrders]=useState([])

  const [checkout, setCheckOut ] = useState(false);

  var itemsPrice = Orders.reduce((a, c) => a + c.Quantity * c.price, 0);
  var taxPrice = itemsPrice * 0.1;
  var shippingPrice = itemsPrice > 1000 ? 0 : 20;
  var totalPrice = itemsPrice + taxPrice + shippingPrice;



useEffect(() => {



      const getRestrants =async ()=>{
        await getDoc(doc(db, "users", "0s6q7RALHOeznSIuoZTm")).then((res)=>{
          setOrders(res.data().order)
          })
    }
  
    getRestrants();
      
  },)


  
  const MealDocRef = doc(db, "users", "0s6q7RALHOeznSIuoZTm");



function onRemove(meal){
updateDoc(MealDocRef, {
  order: arrayRemove(meal)
},[]);
  }


function onAdd(meal){

  const exist = Orders.find((x) => x.name === meal.name);
      setOrders(
        Orders.map((x) =>
          x.name === meal.name ? { ...exist, Quantity: exist.Quantity=exist.Quantity+1 } : x
        )
      );

// console.log(Orders)
  updateDoc(MealDocRef,
    { order: Orders },
    { merge: true }
    )
    }

function onMinis(meal){

  const exist = Orders.find((x) => x.name === meal.name);
  setOrders(
    Orders.map((x) =>
      x.name === meal.name ? { ...exist, Quantity: exist.Quantity=exist.Quantity-1 } : x
    )
  );


  if( exist.Quantity===0)
  {

const x = Orders.indexOf(meal);
Orders.splice(x,1)

  }


// console.log(Orders)
updateDoc(MealDocRef,
{ order: Orders },
{ merge: true }
)
  
}


  
    return (
        <>
<Card border="grey" style={{ width: '18rem' }} className="card-body111 ">
        <Card.Header className="card-header1">
        <Card.Title style={{ color: 'white'  }} >{t("Your Cart")}</Card.Title>
        </Card.Header>
        <Card.Body className="mx-0">
        <Card.Text  >
{data.data}

</Card.Text > 
<hr ></hr>

          {Orders.length === 0 &&  <Card.Text >
<img   src={require('./add.PNG')} alt="" className='me-2 '/> 
          </Card.Text>}

        {Orders.map((order,i) => (
          <div className="row g-0  m-0 p-0" key={i}>


<div  className="col-md-3 col-lg-3 col-xl-3 d-flex flex-row me-2 " >


<button  className="remove "  onClick={() =>onMinis(order)} >
                -
              </button>
              <div style={{border: '1 solid black'}} className="px-1">
              
              {order.Quantity}

              </div>

              <button className="add me-5" onClick={() =>onAdd(order,i)} >
                +
              </button>

</div>

<div className="col-md-4 col-lg-4 col-xl-4 mx-1">
                      <h6 className="text-black mb-0">{order.name}</h6>
                    </div>

                    <div className="col-md-3 col-lg-3 col-xl-3 ">
                      <h6 className="mb-0">EGP{order.price}</h6>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end ">
                <a href="#!" className="text-danger"  onClick={() => onRemove(order)}><i className="fa-solid fa-circle-minus"></i></a>
              </div>

</div>
        ))}        
        <hr></hr>

        
        {Orders.length !== 0 && (
          <>
            <div className="row ">
              <div className="col-7">{t("Items Price")}</div>
              <div className="col-5 text-right">EGP{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-7">{t("Tax Price")}</div>
              <div className="col-5 text-right">EGP{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-7">{t("Shipping Price")}</div>
              <div className="col-5 text-right">
              EGP{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-7">
                <strong>{t("Total Price")}</strong>
              </div>
              <div className="col-5 text-right">
                <strong>EGP{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              {/* <button onClick={() => alert('Checkout!')}>
                {t("Checkout")}
              </button> */}

{checkout ? (<Paypal />) : (
<button onClick={() => { setCheckOut(true);}}>  
 {t("Checkout")}
</button>
)} 
            </div>
          </>
        )}

        </Card.Body>
      </Card>        
        </>
    
    )

}
export default withTranslation ()(Cardd);