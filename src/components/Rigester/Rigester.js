import React from 'react';
import "./Rigester.css"
import FacebookIcon from './icons8-facebook (1).svg';
import { Link } from 'react-router-dom';
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./../../firebase-config";
import { db } from "./../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";  
import withReactContent from "sweetalert2-react-content";
import { useHistory } from 'react-router-dom';

const Rigester = () => {
  // const usersCollectionRef = collection(db, "users");
  const history = useHistory();

  const [newFName, setNewFName] = useState("");
  const [newLName, setNewLName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newDOB, setNewDOB] = useState("");
  const createUser = async () => {
    await setDoc(doc(db, "users", `${newEmail.toLowerCase()}`), {FirstName: newFName, LastName:newLName,Email:newEmail,DateOfBirth:newDOB,order:[]});
  };
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [userr, setUserr] = useState({});
    const [user, setUser] = useState({
        userFirstName:"",
        userLastName:"",
        userEmail: "",
        userPassword: "",
        userConfirmPassword: "",
        userBirth: "",
      });
      const [error, setError] = useState({
        userFirstNameError:null,
        userLastNameError:null,
        userEmailError: null,
        userPasswordError: null,
        userConfirmPasswordError: null,
        userBirthError: null,
      });



      const EmailRegex=  /^[a-zA-Z0-9]{5,}(@)(yahoo|gmail|outlook)(.com)$/
      const PassRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


      const AddingEmail = (evt) => {
        if (evt.target.name === "userEmail") {
          setUser({
            ...user,
            userEmail: evt.target.value,
          });
          setError({
            ...error,
            userEmailError:
            !(EmailRegex.test(evt.target.value))
                ? "please enter a valid email address"
                : null,
        });
      
        } else if (evt.target.name === "userPassword") {
          setUser({
            ...user,
            userPassword: evt.target.value,
          });
          setError({
            ...error,
            userPasswordError:
            !(PassRegex.test(evt.target.value))
                ? "please enter a valid password "
                : null,
        });
        }else if (evt.target.name === "userFirstName"){
            setUser({
                ...user,
                userFirstName: evt.target.value,
              });
              setError({
                ...error,
                userFirstNameError:
                evt.target.value.length === 0
                ? "this field is required"
                : null,
              });
        }else if (evt.target.name === "userLastName"){
            setUser({
                ...user,
                userLastName: evt.target.value,
              });
              setError({
                ...error,
                userLastNameError:
                evt.target.value.length === 0
                ? "this field is required"
                : null,
              });
      }else if (evt.target.name === "userConfirmPassword"){
        setUser({
            ...user,
            userConfirmPassword: evt.target.value,
          });
          setError({
            ...error,
            userConfirmPasswordError:
            !(evt.target.value===user.userPassword)
                ? "password not match"
                : null,
        });
      }
    onAuthStateChanged(auth, (currentUser) => {
        setUserr(currentUser);
      });
      }
      const MySwal = withReactContent(Swal);

  const register = async () => {
    createUser()
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      history.push("/Home");

      console.log(user);
    } catch (error) {
      console.log(error.message);
      // alert(error.message)
      MySwal.fire({
        title: <p>This email Already Used </p>,
        footer: "Copyright 2022",
        onOpen: () => {

          setTimeout(() => MySwal.clickConfirm(), 2500);

        }
      })
    }
  };


  const show=()=> {
    var x = document.getElementById("p");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

    return (
    <>
    <div className="container-fluid ">
    <div className='row m-y-lg one p-3'>
            <h1 className='text-center mt-8 mb-8 f-28 f-500'> Create Your Account</h1>
        </div>
        <div id='main' className="d-flex justify-content-center">

<i id='googleIcon' class="fa-brands fa-google"></i>
<button id='RigBtn1' className='btngoogle' >
    Continue wih google

</button>
</div>
<br></br>
<div className="d-flex justify-content-around ffff">
<img id='img2' className='icon2' src={FacebookIcon} alt="" />

<button id='btn2' className='btnfacebook' >Continue wih Facebook</button>
</div>
<div className='container d-flex justify-content-center'>
          

          <div className='row p-3'>
        <label className='col-12 col-sm-4'> First Name</label>
        <input onChange={(event) => {
            setNewFName(event.target.value);AddingEmail(event)}} name="userFirstName" value={user.userFirstName} type="text" className='col-12  col-sm-8 ' size={80} placeholder="First Name" />
          </div>
          </div>
          <div className='container d-flex justify-content-center '>
          <small className="text-danger">{error.userFirstNameError}</small>
          </div>
          <div className='container d-flex justify-content-center '>

<div className='row p-3'>
<label className='col-12 col-sm-4'> Last Name</label>
<input onChange={(event) => {
            setNewLName(event.target.value);AddingEmail(event)}} name="userLastName" value={user.userLastName} type="text" className='col-12  col-sm-8 ' size={80} placeholder="Last Name" />
</div>
</div>
<div className='container d-flex justify-content-center '>
          <small className="text-danger">{error.userLastNameError}</small>
          </div>
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<label className='col-12 col-sm-4'> Email</label>
<input name="userEmail" value={user.userEmail}  onChange={(event) => {
  setNewEmail(event.target.value);setRegisterEmail(event.target.value);AddingEmail(event)}} type="emal" className='col-12  col-sm-8 ' size={85} placeholder="Email" />
</div>
</div>
<div className='container d-flex justify-content-center '>
          <small className="text-danger">{error.userEmailError}</small>
          </div>
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<label htmlFor='p' className='col-12 col-sm-4'> Password</label>
<input id="p" name="userPassword" value={user.userPassword} onChange={(event) => {
            setRegisterPassword(event.target.value);AddingEmail(event)
          }} type="password" className='col-12  col-sm-8 ' size={81} placeholder="Password" />
</div>
</div>
<div className='container d-flex justify-content-center '>
<i className="fa-solid fa-eye my-1 me-2" onClick={()=>show()}></i>
<small className="text-danger">{error.userPasswordError}</small>
          </div>
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<label className='col-12 col-sm-4'>confirm Password</label>
<input onChange={(e) =>AddingEmail(e)} name="userConfirmPassword" value={user.userConfirmPassword} type="password" className='col-12  col-sm-8 ' size={73} placeholder=" confirm Password" />
</div>
</div>
<div className='container d-flex justify-content-center '>
          <small className="text-danger">{error.userConfirmPasswordError}</small>
          </div>
<div className='container d-flex justify-content-center '>

<div id='gender' className='row p-3'>
<label id='label1' className='col-12 col-sm-4 '>Gender</label>
<div  className="btn-group col-12  col-sm-8 " role="group" aria-label="Basic radio toggle button group">
<input   type="radio" class="btn-check " name="btnradio" id="btnradio1" autocomplete="off" checked/>
<label  className="btn btn-outline-warning " for="btnradio1">male</label>

<input  type="radio"  size={80} class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
<label className="btn btn-outline-warning" for="btnradio2">female</label>


</div>

</div>
{/* <div className="row ">

<div className="col-md-2"><label
                    for="disabledTextInput"
                    className="form-label "
                    style={{ color: "gray" }}
                >
                  Gender
                </label></div>
<div className="col-md-10">
<div className="btn-group w-100">
                    <a href="#." className="btn btn-ligt  px-3 border-light but" >
                    male
                    </a>
                    <a href="#." className="btn btn-light px-3 but but2">
                    female
                    </a>
                </div>
</div>

</div> */}


</div>
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<label className='col-12 col-sm-4'>Date of bitrh</label>
<input  onChange={(event) => {
            setNewDOB(event.target.value);AddingEmail(event)}} type="text" className='col-12  col-sm-8 ' size={79} placeholder="date of birth" />
</div>
</div>

<div id='check1' className='container d-flex justify-content-start m-l-5'>

<div  class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
<label class="form-check-label" for="defaultCheck1">
Subscribe <br></br>to our Newsletter
</label>
</div>
</div>
<div id='check2' className='container d-flex justify-content-start '>

<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
<label class="form-check-label" for="defaultCheck1">
Subscribe to<br></br> SMS
</label>
</div>
</div>
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<p id='para'> By creating an account you agree to the <span id='sp1'>Privacy Policy</span> and to the <span id='sp2'>terms of use</span></p>

</div>
</div>
{/* <div className='container d-flex justify-content-center '>

<div className='row p-3'>
<button id='createBt'>Create Your Account</button>
</div>
</div> */}
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<button onClick={register}  id='createBb' className='btn-xl'>Create Account</button>
</div>
</div>
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<p> Already have an account? <Link to={"/Login"}><span id='sp2'>Login</span></Link></p>

</div>
{/* <h4> User Logged In: </h4>
      {userr?.email} */}
</div>

    
    
    
    
    
</div>
    
    
    
    
    
    </>
    );
}

export default Rigester;
