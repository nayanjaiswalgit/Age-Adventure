import React from 'react'

import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../firebase'

const Home = () => {
    const onSubmitHandler = async(e) => {
        e.preventDefault();
        console.log(e.target[0].value)
   try{
       await setDoc(doc(db, "dcddfgff", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
          });
          }
          catch (err){
            console.log(err);
          }
// Add a new document in collection "cities"



    }
  return (
    <div>

        <form onSubmit={onSubmitHandler}>
        <input type="text"></input>    
        <button>Sumbit</button>
        </form>    



    </div>
  )
}

export default Home