// import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import  React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './allresturant.css'

import { useState, useEffect } from 'react';
import {db} from './../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'; 
 import ReactPaginate from 'react-paginate';
 import LanguageSwitcher from "./../LanguageSwitcher";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import { t } from 'i18next';

const AllRestaurant = () => {
 const[search,setSearch] =useState("");

    const [res, setRes] = useState([]);
    const restaurentCollectionRefrence = collection(db, "Resturant")//name of the collection "Fgg"

    useEffect(() => {
        const getRes = async () => {
            const data = await getDocs(restaurentCollectionRefrence);
            console.log(data)
            setRes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getRes();
    }, [])
/////////////////////////////////////////////////////////////////////////////////
const [pageNumber,setPageNumber]= useState(0);  //pageNumber=0,1,2,3,....
// const dataPerPage=10;
const dataPerPage=2;
const pagesVisited=pageNumber*dataPerPage; // 0*10 //1*10=10 //2*10=20
 
const displayData=res.slice(pagesVisited , pagesVisited+dataPerPage) //slice(0,10) slice(10,20)
.filter((Res) => { 

    if(search==="")
    { 
        return Res;  
    }

    else if (Res.name.toLowerCase().includes(search.toLowerCase()))
      {  return Res }
  }).map((Res) => {
      return (
        <Link to={`/BasicDeta/${Res.id}`} key={Res.id}>
        <div className="card d-flex justify-content-center align-items-center mx-2" style={{ width: "11.5rem" }} >
            <img src={require("../assests/3.webp")} className="m-3 h-50 w-50 " alt="..." />
            <hr className="w-100" />
            <div class="card-body p-0">
                <p className="m-0 p-0">{Res.name}</p>
                <p className="mt-1 p-0">{Res.adress}</p>
            </div>
        </div>
        </Link>
    )
      })

const pageCount=Math.ceil(res.length/dataPerPage);
const changePage=({selected})=>{
  setPageNumber(selected);

}



    return (
        <>
            <div className="d-flex justify-content-center  ">

                <div className="border mx-5 w-75 bordershadow" >
                    <div>
                        <div className="p-4">
                            <p className="fs-4 bg-light w-100 d-flex justify-content-start p-2">
                            {t("All_Restaurants")}
                            </p>
                            <div className=" d-flex justify-content-end ">
    <input type="search" className=" w-25 mt-3 search  " 
    placeholder='search Restaurants' onChange={event=>{setSearch(event.target.value)}} />
   

                            </div>

                            <div  >
                                <div className="d-flex mt-3  flex-wrap  mb-5">
                                    {/* <Link to='./BasicDeta'>
                                        <div className="card d-flex justify-content-center align-items-center " style={{ width: "11.5rem" }} >
                                            <img src={require("../assests/2.webp")} className="m-3 h-50 w-50 " alt="..." />
                                            <hr className="w-100" />
                                            <div class="card-body p-0">
                                                <p className="m-0 p-0">Elhenawy</p>
                                                <p className="mt-1 p-0">Fast Food</p>
                                            </div>
                                        </div>
                                    </Link> */}
{/*  */}


{displayData}


</div>
</div>

{/* 
<ReactPaginate 
        nextLabel={"next"}
        pageCount={pageCount}
        previousLabel={"previous"}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        activeClassName={"paginationActive"}
        nextLinkClassName={"nextBtn"}
        previousLinkClassName={"previousBtn"}
        disabledClassName={"disabledBtn"}
    /> */}

{/* ============================================ */}

                            <div className="d-flex justify-content-center  align-items-center">
                                <div className=" mt-5 justify-content-center  align-items-center ">
                                    <nav className="d-flex justify-content-center   ">
                                        <div className="bg-light me-2">
                                            {/* <i class="bi bi-arrow-left"></i> */}
                                            <BsArrowLeft className="fs-2 ms-2 icons bg-light" />
                                        </div>
                                        <div>
                                            <ul className="pagination ">
                                                <li className="page-item active bg-light">
                                                    <span className="page-link text-light pagi " style={{ border: "orange" }}>1</span>
                                                </li>
                                                <li className="page-item " style={{ color: "orange" }} ><a class="page-link  icons text-dark" href="#">2</a></li>
                                                <li className="page-item icons"><a className="page-link icons text-dark px-3" >3</a></li>
                                                <li className="page-item"><a className="page-link icons text-dark px-3">4</a></li>
                                                <li className="page-item"><a className="page-link icons text-dark px-3" >5</a></li>
                                                <li className="page-item"><a className="page-link icons text-dark px-3" >6</a></li>
                                                <li className="page-item"><a className="page-link icons text-dark px-3" >...</a></li>
                                                <li className="page-item bg-light icons">
                                                    <a className="page-link bg-light icons text-dark" href="#">163</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* <i class="bi bi-arrow-right"></i> */}
                                            <BsArrowRight className="fs-2 ms-2 icons bg-light" />
                                        </div>
                                    </nav>
                                </div>
                            </div>






















                            {/* <div className="row mt-3">
                <div className="card " style={{width:"12rem",height:"13rem"}} >
                    <img src={require("../assests/cookDoor.jpg")} className="card-img-top "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body ">
                    <h5 class="card-title">Card title</h5>
                </div>
                </div>
                <div className="card mx-2"style={{width:"12rem"}} >
                    <img src={require("../assests/one.jpg")} className="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
                </div>
                <div className="card "style={{width:"12rem"}} >
                    <img src={require("../assests/two.jpg")} className="card-img-top " alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
                </div>
                <div className="card mx-2"style={{width:"12rem"}} >
                    <img src={require("../assests/cookDoor.jpg")} className="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
                </div>
                <div className="card " style={{width:"12rem"}}>
                    <img src={require("../assests/cookDoor.jpg")} className="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
                </div>
                </div> */}




















                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AllRestaurant;
