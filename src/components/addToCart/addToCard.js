import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsExclamationCircleFill } from "react-icons/bs";
import './addToCard.css';
 import Tab from 'react-bootstrap/Tab';
 import Tabs from 'react-bootstrap/Tabs';
import Info from './info';
import Menu from './menu';
import Reviews from './reviews';
import Cardd from './cart';
import {useState , useEffect} from 'react'
import {db} from './../../firebase-config'
import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
// import { t } from 'i18next';


function AddToCard() {
  const { t } = useTranslation();

const [key, setKey] = useState('Menu');

const params=useParams();
const[menu,setmenu]=useState({})
const[meals,setmeals]=useState([])



useEffect(() => {




// getDoc(doc(db,"Resturant",params.id)).then((res)=>{
//     // console.log(res.data())
//     setmenu(res.data())
//     setmeals(menu.meals)
//     })
    const getRestrants =async ()=>{
      await getDoc(doc(db,"Resturant",params.id)).then((res)=>{
        setmeals(res.data().meals)
        setmenu(res.data())

        })
  }

  getRestrants();
    
},)



  return (
        <>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-2"></div>

  <div className="col-md-8 ridge">

                <Navbar bg="white" variant="light">
        <Container >
        <Nav  className="me-5">
            <Nav.Link href="#home" className="my-2" style={{color: 'black'}}  >{t("Home")}</Nav.Link> 
            <p style={{color: 'orange', fontSize:'bold'}} className=" my-3 mx-1 "> &gt; </p>
            <Nav.Link href="#home" className="my-2  mx-1" style={{color: 'black'}}  >{t("Location_here")}</Nav.Link> 
            <p style={{color: 'orange', fontSize:'bold'}} className=" my-3 mx-1 "> &gt; </p>
            <p className="mx-2 my-3 text-muted">{menu.name}</p>
            </Nav>
            </Container>
        </Navbar>
            <div className="ms-3 mt">


<div className="card  cardBorder " >
  <div className="row">
    <div className="col-md-2 my-md-3">
<img src={menu.Image} alt="" style={{width: "100%"}} className="imgBorder  "/>
    </div>
    <div className="col-md-6 ">
      <div className="card-body">
        <h5 className="card-title">{menu.name}</h5>
        <p className="card-text text-muted lineHeight-md">{menu.adress}</p>
        <p className="card-text text-muted lineHeight-md ">{t("Min._order_EGP_15.00")} {menu.MinOrderAmount}</p>
      </div>
    </div>
<div className="col-md-4 my-4 d-flex flex-column  align-items-end">
<p  style={{color: 'green'}}>{t("OPEN")}</p>
<p className="card-text text-muted lh-1 mt-3"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; {t("Very_Good")}</p>
<div className=" d-flex d-row">
<img src={require('./123.PNG')} alt="/" />

</div>

</div>
  </div>
</div>

<div className="p-md-1 pt-md-2 " style={{background: '#FEF9F5', fontSize: '95%'}}>
  
  
<p className='mb-md-2 d-flex flex-none  flex-md-block'>  
<BsExclamationCircleFill className='mx-3 mb-1 ' size={19}/>
{t("Delivered_by_us,_with_live_tracking")}
</p>
  

  </div>
            </div>

      
   

<Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      
      className="  d-flex justify-content-evenly   fs-2 d-flex flex-nowrap"
    >
<Tab   eventKey="Menu" title="menu " className='dd'>
<div className="row">
        <div className="col-lg-8 col-12 my-md-3 ">    
          <Menu  data={meals} ></Menu>       
        </div>
        <div className="col-md-4 col-12 my-md-3">    
          <Cardd data={menu.name} ></Cardd>
        </div>
        </div>    
        </Tab>
      <Tab eventKey="Reviews" title="Reviews" className='dd'>
      <div className="row">
        <div className="col-md-8 col-12 my-md-3">    
        <Reviews></Reviews>
        </div>
        <div className="col-md-4 col-12 my-md-3">    
        <Cardd data={menu.name}></Cardd>

        </div>
        </div>
</Tab>
      <Tab eventKey="Info" title="Info" className='dd'>
        <div className="row">
        <div className="col-md-8 col-12 my-md-3">    
        <Info></Info>       
        </div>
        <div className="col-md-4 col-12  my-md-3">    
        <Cardd data={menu.name}></Cardd>
        </div>
        </div>
      </Tab>

    </Tabs>








                </div>
  <div className="col-md-2"></div>

            </div>
        </div>

        

        </>
    );
}

export default withTranslation ()(AddToCard);