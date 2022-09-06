import React from "react";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import DeleteIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BsChevronCompactRight } from "react-icons/bs";
import "./myaccount.css";
import { useState,useEffect } from "react";

import LanguageSwitcher from "./../LanguageSwitcher";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import { t } from 'i18next';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./../../firebase-config";
import { db } from "./../../firebase-config";
import {
  collection,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const Myaccount = () => {

 
  const [email,setEmail] = useState("")
  const [FirstName,setFirstName] = useState("")
  const [LastName,setLastName] = useState("")
  const [data,setdata] = useState({})



  useEffect(()=>{

//         onAuthStateChanged(auth, (user) => {
    
//           if (user) 

// {
//     setEmail(user.email)
// } 
// });

    getUserData();  



  },)

const getUserData = async()=>{

    await getDoc(doc(db,`users/0s6q7RALHOeznSIuoZTm`)).then((res)=>{
        setdata(res.data())
      console.log(data)

      })
}

const updateUserData = () => {

    // onAuthStateChanged(auth, (user) => {

    //   if (user) {


    updateDoc(doc(db, "users", `users/0s6q7RALHOeznSIuoZTm`), {

      FirstName: FirstName,

      LastName: LastName,

    }).then(() => {

      setFirstName("")

      setLastName("")
        getUserData()



      }).catch((error) => {

        console.log(error.messege);

      })

    
};





    return (
    <div className="container w-100 border border-top-0">
        <div className="d-flex p-3">
        <p className="p-2 color">{t("Home")}</p>
        <p className="p-2">
            <BsChevronCompactRight className="butt3" />
        </p>
        <p className="p-2">{t("My Account")}</p>
        </div>
        <div>
        <p className="fs-3 ps-4 d-flex justify-content-start">{t("My Account")}</p>
        </div>
        <hr className="w-100 px-3" />
        <div className="row col-12">
        <div className=" col-xl-3 d-xl-block  d-none ">
            <div className="d-flex flex-column leftside">
            <button type="button" class=" py-3 side w-75">
                {t("Account Info")}
            </button>
            <button type="button" class=" py-3 side w-75">
                {t("Saved Addresses")}
            </button>
            <button type="button" class=" py-3 side w-75">
                {t("My Orders")}
            </button>
            <button type="button" class=" py-3 side w-75">
                {t("Saved Cards")}
            </button>
            <button type="button" class=" py-3 side w-75">
                {t("talabat Pay")}
            </button>
            </div>
        </div>
        <div className=" col-xl-9 col-12">
            <form>
            <div className="row 12">
                <div class="mb-3 d-flex">
                <label
                    for="disabledTextInput"
                    class="form-label me-4 px-2"
                    style={{ color: "gray" }}
                >
                    {t("Email")}
                </label>
                <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control w-50 ms-4 "
                    placeholder={data.Email}
                />
                </div>
                <div class="mb-3 d-flex">
                <label
                    for="disabledTextInput"
                    class="form-label me-4"
                    style={{ color: "gray" }}
                >
                    {t("First Name")}
                </label>
                <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control w-50 "
                    placeholder={data.FirstName}
                />
                </div>
                <div class="mb-3 d-flex">
                <label
                    for="disabledTextInput"
                    class="form-label me-4"
                    style={{ color: "gray" }}
                >
                    {t("Last Name")}
                </label>
                <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control w-50 "
                    placeholder={data.LastName}
                />
                </div>
                <div class="mb-3 d-flex">
                <label
                    for="disabledTextInput"
                    class="form-label me-5"
                    style={{ color: "gray" }}
                >
                  {t("Gender")}
                </label>
                <div class="btn-group w-50">
                    <a href="#q" class="btn btn-ligt  px-3 border-light but">
                    {t("male")}
                    </a>
                    <a href="#q" class="btn btn-light px-3 but but2">
                    {" "}
                    {t("female")}
                    </a>
                </div>
                </div>
                <div class="mb-3 d-flex">
                <label
                    for="disabledTextInput"
                    class="form-label me-2"
                    style={{ color: "gray" }}
                >
                    {t("Date of bitrh")}
                </label>
                <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control w-50 "
                    placeholder={data.DateOfBirth}
                />
                </div>
                <div className="row col-12">
                <div class="mb-3 col-4">
                <div className="d-flex flex-column">
                    <div className="d-felx ">
                    <div class="form-check d-flex">
                        <input
                        class="form-check-input me-1"
                        type="text"
                        id="disabledFieldsetCheck"
                      />
                      <label
                        class="form-check-label "
                        for="disabledFieldsetCheck"
                        style={{ color: "gray" }}
                      >
                        {t("Subscribe")} <br />
                        {t("to our")} <br /> {t("Newsletter")}
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check d-flex">
                      <input
                        class="form-check-input me-1"
                        type="text"
                        id="disabledFieldsetCheck"
                      />
                      <label
                        class="form-check-label"
                        for="disabledFieldsetCheck"
                        style={{ color: "gray" }}
                      >
                        {t("Subscribe")} <br /> {t("SMS")}
                      </label>
                    </div>
                  </div>
                </div>
                </div>
                <div className="pt-0 mt-5 col-6">
                  <button
                    type="submit"
                    class="btn text-light px-4 "
                    style={{ backgroundColor: "#0BA64D" }}
                    onClick={() => updateUserData()}
                  >
                    {t("UPDATE")}
                  </button>
                </div>
              </div>

              {/* <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a><a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default withTranslation ()(Myaccount);
