import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './searchByLocation.css';
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react'
import {db} from './../../firebase-config'
import {collection,getDocs,limit, query, where } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import LanguageSwitcher from "./../LanguageSwitcher";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import { t } from 'i18next';


function SearchByLocation() {
  const params =useParams();
  
  const [Restrants, setRestrants] = useState([]);

    const restaurentCollectionRefrence=
    query(
      collection(db,"/Resturant"),
      limit(20),
      where("adress", "==", `${params.adress}`)
    );
useEffect(() => {
    const getRestrants =async ()=>{
        const data = await getDocs(restaurentCollectionRefrence);
        setRestrants(data.docs.map((doc) =>({...doc.data(), id:doc.id})))
    }
    getRestrants();
},[]);



function sortAZ(){
   const x= Restrants.sort(function(a,b){
  if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;

 }
 ).map((item) =>  x.item)

}

function Delivery(){
  const x=   Restrants.sort((a, b) => a.Delivery < b.Delivery ? -1 : 1)
  setRestrants(x);
 }

 function MinOrderAmount(){
  const x=   Restrants.sort((a, b) => a.MinOrderAmount < b.MinOrderAmount ? -1 : 1)
  setRestrants(x);
 }

    return (
        <>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 ridge">

                <Navbar bg="white" variant="light">
        <Container >
        <Nav  className="me-5">
            <Nav.Link href="#home" className="my-2 fw-semibold  " style={{color: 'black'}} >{t("Home")}</Nav.Link> 
            <p style={{color: 'orange', fontSize:'bold'}} className=" my-3 "> &gt; </p>
            <p className="mx-2 my-3 text-muted"> {params.adress} </p>
            </Nav>
            </Container>
        </Navbar>
            <div className="ms-3">
            <h3 className="">{t("Restaurants in Location here for delivery")}</h3>
            </div>



<div className="row my-3">

<div className="col-md-3 ">
<Form className="d-flex  my-3 ">
              <Form.Control
              className='searchStyle p-2'
                type="search"
                placeholder="Search Restaurants"
                aria-label="Search"
              />
            </Form>

            <Card className="mb-2">
    





      <Card.Body className="card-body ">
        <Card.Title>{t("Cuisines")}</Card.Title>
        <Card.Text className="" style={{color:"grey"}}>
        <Form>
     <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label" for="flexRadioDefault1">
    {t("All")}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
  <label class="form-check-label" for="flexRadioDefault2">
    {t("Acai")}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
  <label class="form-check-label" for="flexRadioDefault2">
    {t("Afghani")}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
  <label class="form-check-label" for="flexRadioDefault2">
    {t("African")}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
  <label class="form-check-label" for="flexRadioDefault2">
   {t("American")}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
  <label class="form-check-label" for="flexRadioDefault2">
    {t("Arabic")}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
  <label class="form-check-label" for="flexRadioDefault2">
    {t("Arabic sweets")}
  </label>
</div>
    </Form>
    
            </Card.Text>
      </Card.Body>
    </Card>
</div>
<div className="col-md-9">

  <div className="row">
  <div className="col-md-12">

  <hr className="mb-0 "></hr>


<div className=" d-flex flex-row align-items-center text-muted flex-wrap " >

<p className="mt-3 mx-2 " style={{color: 'black'}} >{t("Sort By:")}</p>
          <Nav.Link href="#home" className="m-3 "  >{t("Recommended")}</Nav.Link> 
            <Nav.Link href="#home" className="m-3   ">{t("Ratings")}</Nav.Link> 
            <Nav.Link href="#home" className="m-3  " onClick={()=> sortAZ()} >{t("A to Z")}</Nav.Link> 
            <Nav.Link href="#home" className="m-3 " onClick={()=> MinOrderAmount()}  >{t("Min.Order Amount")}</Nav.Link> 
            <Nav.Link href="#home" className="m-3   " onClick={()=> Delivery()} >{t("Fastest Delivery")}</Nav.Link> 
</div>

<hr className="mt-0" ></hr>

  </div>
 
 
  <div className="col-md-12 m-0">


{/* /////////////////////////////////// */}
{Restrants.map((rest)=> {return (
<Link to={`/AddToCard/${rest.id}`} key={rest.id} className="stylLink">
  


<div className="card  CardRest" style={{width: "100%"}} key={rest.id}>
  <div className="row g-0  ">
    <div className="col-md-2 my-2  p-2  ">
<img src={rest.Image} alt="" style={{width: "70%"}} className="imgBorder p-2"/>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">{rest.name}</h5>
        <p className="card-text text-muted lh-1">{t("Fried chicken,_Sandwiches,_Burgers")}</p>
        <p className="card-text text-muted lh-1"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; {t("Very_Good")}</p>
        <p className="card-text text-muted lh-1">{t("Withn 30 min")}&nbsp; &nbsp; {t("Delivery: 4.99")} {rest.Delivery} &nbsp;&nbsp;Min order :{rest.MinOrderAmount}</p>

        <p className="card-text text-muted"><small className="text-muted">
          
        <i class="fa-solid fa-tag" style={{color: '#F90067'}}></i> <span style={{color: '#F90067'}}>{t("Discount")}</span>
        &nbsp; 
        <i class="fa-duotone fa-circle-small"></i>
        &nbsp;
{t("Live Tracking")}
&nbsp;
        &nbsp;
        {t("Cash Only")}
          </small></p>
      </div>
    </div>
  </div>
</div>








</Link>

)})}


<div className="m-5 d-flex justify-content-center">
<nav aria-label="Page navigation  ">
  <ul class="pagination ">
    <li class="page-item ">
      <a className="page-link" href="#kk" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link Active" href="#kk" >1</a></li>
    <li class="page-item"><a class="page-link" href="#l">2</a></li>
    <li class="page-item"><a class="page-link" href="#k">3</a></li>
    <li class="page-item"><a class="page-link" href="#k">4</a></li>
    <li class="page-item"><a class="page-link" href="#k">5</a></li>

    <li class="page-item">
      <a class="page-link" href="#l" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>

<div >
  <p className='fw-normal lh-sm'>{t("Restaurants & Cafeterias in")} {params.adress}, {t("Egypt")}.</p>

<p className='fw-normal lh-sm'>{t("Feeling hungry today? Order all you need from your nearest restaurant or cafeteria in")} .</p>

<p className='fw-normal lh-sm'>{t("Wide range of different cuisines including arabic, indian, fast food, asian, pizza, and many more")}.</p>

<p className='fw-normal lh-sm'>{t("Enjoy a simple, fast, and easy online food delivery in Helwan with Talabat Egypt")}.</p>
</div>

  </div>

  </div>

</div>

</div>


                </div>
  <div className="col-md-2"></div>

            </div>
        </div>

        

        </>
    );
}

// export default SearchByLocation;

export default withTranslation ()(SearchByLocation);