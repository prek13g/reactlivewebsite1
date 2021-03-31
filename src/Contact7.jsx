import React from 'react';
import {useState} from 'react';
 const Contact7=()=>{
   const [data,setdata] = useState({
     name:" ", 
     email:" ", 
     phone: " ",
     message: " ",
   });
   const InputEvent=(event)=>{
     const {name,value} = event.target;

     setdata((prevalue)=>{
      return {
        ...prevalue,
        [name] : value,
        //ye name and value attributes hae input and text-area field ke
      }
     })
   };
   const formSubmit=(e)=>{
      e.preventDefault();
      alert(`${data.name}. ${data.email}. ${data.phone}. ${data.msg}.`);
   }
 return(<>
<div className="my-5">
    <h1 className="text-center">Contact Us</h1>
</div>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>

            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="name" value={data.name} onChange={InputEvent} placeholder="Enter your name here"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Mobile No.</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter mobile no."/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
</div>

<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
            </form>
        </div>
    </div>
</div>
 </>)
 }
 export default Contact7;