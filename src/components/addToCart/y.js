import {useState , useEffect} from 'react'
import {db} from './../../firebase-config'
import { doc, getDocs,updateDoc, arrayRemove,arrayUnion, setDoc,collection} from "firebase/firestore";

export const getallmaincategory = async (obj) => {
    const datas = await getDocs(collection(db, `Test/${obj.id}/${obj.orders}`));

    return (
        (datas.docs.map((docs) => ({ ...docs.data(), meal_id: docs.id, ...obj })
        ))
    )
};


export function Y() {

    const obj = {order: 'order', id: 'bfndNgvpFKORvUzvuuAK'}

    const [data, setData]=useState([])

    
   
        getallmaincategory(obj).then(function (res) {
           setData(res)
        })
    
    console.log(data)


  return (
    <div>
         {data.map((item) => (
        <div className='d-flex col-2 mx-5 my-1 justify-content-between align-items-center card card-body'>
            <p>Name: {item.name}</p>
            <p>Price :{item.price}</p>
            <p>Qty: {item.qty}</p>
        </div>
      ))}
    </div>
  )
}