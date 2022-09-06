import './App.css';
import Home from './components/Home/home';
import Header from './components/Header/header';
import Footer from './components/Footer/footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicDetail from './components/Basic detail/basicDetail';
import SearchByLocation from './components/searchByLocation/searchByLocation'
import AddToCard from './components/addToCart/addToCard'
import Login from './components/Login/Login' 
import AllRestrants from './components/all-restaurant/all-restaurant'
import BasicDeta from './components/Basic detail/basicDetail'
import Rigester from './components/Rigester/Rigester';
import Offers from './components/offers/offer'
import MyAccount from './components/MyAccount/myaccount'
import Checkout from './components/checkout'
import React, { useState ,useEffect} from 'react';
import Protected from './components/protected/protected';
import { onAuthStateChanged,} from "firebase/auth";
import {auth} from './firebase-config'
function App() {


  // const [checkout, setCheckOut ] = useState(false);
  const [isAuth,setAuth]= useState()
useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
            if (currentUser==null){
              setAuth(false)

              
            }else{
              setAuth(true)

            }
          });
        
        },)
  return (
    <div className="App p-0 m-0">
      

      <Router>
      <Header />
      
        <Switch>
        <Route path="/" exact component={Home} />
        <Route  path="/Home" exact component={Home}/>
        <Route  path="/BasicDetail" exact component={BasicDetail}/>
        <Route  path="/searchToLocation/:adress" exact component={SearchByLocation}/>
        <Route  path="/AddToCard/:id" exact component={AddToCard}/>
        <Route  path="/Login" exact component={Login}/>
        <Route  path="/AllRestrants" exact component={AllRestrants}/>
        <Route  path="/BasicDeta/:id" exact component={BasicDeta}/>
        <Route  path="/Rigester" exact component={Rigester}/>
        <Route  path="/Offers" exact component={Offers}/>
        {/* <Route  path="/MyAccount" exact component={MyAccount}/> */}
        <Route  path="/Checkout" exact component={Checkout}/>
        <Protected path="/MyAccount" component={MyAccount} isLogin={isAuth}/>

        </Switch>
        <Footer />

      </Router>


    </div>
  );
}

export default App;
