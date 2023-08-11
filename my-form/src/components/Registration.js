import React,{ useRef } from 'react';
import "./Registration.css";
import {firestore} from "./firebase";
import { addDoc,collection} from "@firebase/firestore";


function Registration() {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const pnumberRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const addRef = useRef();
  const ref = collection(firestore,"formdata");
  
  const handelSubmit = async(e) => {
    e.preventDefault();
    let data ={
      first: fnameRef.current.value,
      last: lnameRef.current.value,
      phone: pnumberRef.current.value,
      mailid: emailRef.current.value,
      pass: pwdRef.current.value,
      addres: addRef.current.value
    }
    console.log(data)
    try{
      addDoc(ref,data)
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div>
        <form className='myform' onSubmit={handelSubmit}>
          <label>First Name</label>
          <input type="text" ref={fnameRef} required/>
          <label>Last Name</label>
          <input type="text" ref={lnameRef}required/>
          <label>Phone Number</label>
          <input type="number" ref={pnumberRef} required/>
          <label>E-mail ID</label>
          <input type="email" ref={emailRef} required/>
          <label>Password</label>
          <input type="password" ref={pwdRef} required/>
          <label>Address</label>
          <input type="text" ref={addRef} cols="30" rows="10" required/>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}
export default Registration;
