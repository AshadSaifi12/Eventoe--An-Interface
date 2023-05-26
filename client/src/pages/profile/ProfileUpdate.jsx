import { useState } from "react"
import "../../components/footer/footer.css"
import "./css/ProfileUpdate.css"
import Navbar from "../../components/navbar/Navbar"
import { Navigate, useNavigate } from "react-router-dom";

export default function Update() {
    const navigate = useNavigate();
    const [username,SetUsername]=useState(sessionStorage.getItem("username"));
    const [age,Setage]=useState(sessionStorage.getItem("age"));
    const [phone,SetPhone]=useState(sessionStorage.getItem("phone"));     
    const [address,SetAddress]=useState(sessionStorage.getItem("address"));
    const [email,SetEmail]=useState(sessionStorage.getItem("email"));
    const [gender,Setgender]=useState(sessionStorage.getItem("gender"));



    const [CIN_No,SetCin]=useState(sessionStorage.getItem("CIN_No"));    
    const [desc,SetDesc]=useState(sessionStorage.getItem("desc"));
    

    const HandleSave=()=>{
        if(sessionStorage.getItem("userValue")==="Employee"){
            sessionStorage.setItem("username",username);
            sessionStorage.setItem("age",age);
            sessionStorage.setItem("phone",phone);                          //API for Employee Profile update  datas are in the variable itself
            sessionStorage.setItem("address",address);
            sessionStorage.setItem("email",email);
            sessionStorage.setItem("gender",gender);

       
        }
        else{
            sessionStorage.setItem("username",username);
            sessionStorage.setItem("CIN_No",CIN_No);
            sessionStorage.setItem("phone",phone);                             //Set session storage as well also you can set the session storage from API to check
            sessionStorage.setItem("address",address)
            sessionStorage.setItem("email",email);                          //API for Compnies Profile update
            sessionStorage.setItem("desc",desc);
        }
        //API for Update
        navigate("/profile")
        
    }
    const HandleCancel=()=>{
        navigate("/profile")
    }

    if(sessionStorage.getItem("userValue")==="Employee"){
        return(
            <div className="Main">
            <Navbar/>
            <div className="main2">
            <span id='profileSpan2' ><h2>Edit Your Details</h2></span>
                <hr />
            <div className="form">
                <div className="Names">
                        <div className="InputFields"><label htmlFor="">Username</label><br/>
                        <input type="text" name="" value={username} onChange={(e)=>{SetUsername(e.target.value)}} id="" />
                        </div>
                        
                       <div className="InputFields"> <label htmlFor="">Age</label><br/>
                       <input type="text" name="" value={age} onChange={(e)=>{Setage(e.target.value)}} id="" />
                       </div>
    
                        <div className="InputFields"><label htmlFor="">Mobile No.</label><br/>
                        <input type="text" name="" value={phone} onChange={(e)=>{SetPhone(e.target.value)}} id="" />
                        </div>
    
                     <div className="InputFields">   <label htmlFor="">Address</label><br/>
                     <textarea type="text" name="" value={address} onChange={(e)=>{SetAddress(e.target.value)}} id="" />
                     </div>
    
                       <div className="InputFields"> <label htmlFor="">Registered Email Id</label><br/>
                       <input type="text" name="" value={email} onChange={(e)=>{SetEmail(e.target.value)}} id="" />
                       </div>
    
                        <div className="InputFields"><label htmlFor="">Gender</label><br/>
                        <select type="text" name="" value={gender} onChange={(e)=>{Setgender(e.target.value)}} id="" >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        </div>
                </div>
               
            
            </div>
            
            </div>
            <hr/>
            <button className="button" id="but1" onClick={()=>HandleSave()}>Save</button>
            <button className="button"id="butt2" onClick={()=> HandleCancel()}>Cancel</button>
            </div>
         
        )
    
    }
    else{
        return(
            <div className="Main">
            <Navbar/>
            <div className="main2">
            <span id='profileSpan2' ><h2>Edit Your Details</h2></span>
                <hr />
            <div className="form">
                <div className="Names">

                        <div  className="InputFields"><label htmlFor="">Organization Name</label><br/>
                        <input type="text" name="" value={username} onChange={(e)=>{SetUsername(e.target.value)}} id="" />
                        </div>

                        <div  className="InputFields">  <label htmlFor="">CIN No.</label><br/>
                        <input type="text" name="" value={CIN_No} onChange={(e)=>{SetCin(e.target.value)}} id="" /></div>

                        <div  className="InputFields"> <label htmlFor="">Contact No.</label><br/>
                        <input type="text" name="" value={phone} onChange={(e)=>{SetPhone(e.target.value)}} id="" />
                        </div>

                        <div  className="InputFields"> <label htmlFor="">Address</label><br/>
                        <input type="text" name="" value={address} onChange={(e)=>{SetAddress(e.target.value)}} id="" />
                        </div>

                        <div  className="InputFields"> <label htmlFor="">Registered Email Id</label><br/>
                        <input type="text" name="" value={email} onChange={(e)=>{SetEmail(e.target.value)}} id="" />
                        </div>

                        <div  className="InputFields"> 
                        <label  htmlFor="">Description</label><br/>
                        <textarea type="text" id="textarea" value={(desc)} onChange={(e)=>{(SetDesc(e.target.value))}} cols={57} name="desc"  ></textarea>
                        </div>
                       
                </div>
               
            
            </div>
            </div>
            <hr/>
            <button className="button" id="butt1"onClick={()=>HandleSave()}>Save</button>
            <button className="button" id="butt2" onClick={()=>HandleCancel()}>Cancel</button>
            </div>
         
        )   
        
    }


}


