/* eslint-disable array-callback-return */
// lines edited - 99 to 102 , 88
// lines commented - 31 , 


import React, { useState, useEffect } from 'react'
import "./css/home.css";
import Navbar from '../../components/navbar/Navbar';
import { useLocation, useParams } from 'react-router-dom'
import {
  faPhone,
  faHome,
  faMailReplyAll,
  faSearch,
  faLocation,
  faMapLocation,
  faSleigh
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Home() {
  const { state } = useParams();
  var date = new Date().toLocaleDateString();
  var [startdate, setstartdate] = useState(date);
  var [enddate, setenddate] = useState(date);
  var [days, setdays] = useState("2");
  var [toggle, setToggle] = useState(false);
  var [articles, setArticles] = useState([]);
  var [flag, setFlag] = useState(true);
  var [articleName, setArticleName] = useState('');
  var location = useLocation();
  // const data = location.state.formData;
  // console.log("formData : ", data, location.state.userValue)

  const date1=new Date();
  const dateMonth=date1.getMonth()+1
  const dateDay=date1.getDate();
  const dateYear=date1.getFullYear();




  const page = "home";


  var availJobs = ["labour", "photographer", "loader", "decorator"];


  var jobDetail = [
    {
      "job": "photographer",
      "days": 2,
      "start_date": date,
      "end_date": date
    }
  ]
  function handleChange(e) {
    setToggle(true)
    setArticleName(e.target.value);

    

  }

  useEffect(() => {

    getArticles();
    setFlag(false)

   


  }, [flag])

  async function getArticles() {


    await fetch("/article/findAll").then(result => {
      // console.log("result : ", result)
      return result.json();
    }).then(res => {


      setArticles(res)
    })

  }
var [articles2,setArticles2]=useState(articles)
articles2=articles
var [work2,setWork2]=useState([])


//Search Logic
  const handleSearch=(value)=>{
    if(value==null || value==""){
      setArticles2(articles)
    }
    else{
      setArticles2([])
      articles.map(ar =>{
        if(ar.name.match(value)!=null || ar.address.match(value)!=null){
          articles2.push(ar)
        }
      })
      
    }
    // else{
    //   setArticles2([])
    //   articles.map(ar =>{

    //     if(ar.name.match(value)!=null || ar.address.match(value)!=null || 
    //     ar.name.match(value)!="" || ar.address.match(value)!="")
    //     {
          
    //       articles2.push(ar)
    //       console.log(ar)
    //     }
    //     else{
    //       articles.map(ar =>{
    //         articles2.push(ar)
    //         setWork2([])
    //         ar.jobs.map(job =>{
    //           if(job.jobAddress.match(value) !=null ||job.jobAddress.match(value) !="" || 
    //           job.workName.match(value)!=null||job.workName.match(value)!=""){
    //               work2.push(job)
    //           }
    //         })
    //         articles2.map(a =>{
    //           if(a==ar){
    //             a.push({jobs:work2})
    //           }
             
    //         })
            
    //       })
    //     }
    //   })
    // }
  }

    articles2.map(article =>{
   
      article.jobs.map(job =>{
        const dateStart=job.startDate;
        const dateEnd=job.endDate;
        let DateyearStart=""
        let DateyearEnd =""
        let DateMonthStart=""
        let DateMonthEnd =""
        let DateDayStart=""
        let DateDayEnd =""
                           
        for(let i=0;i<3;i++){
          if(i===0){
            var dateStart2=""
            var dateEnd2=""
            for(let i=0;i<4;i++){
              dateStart2=dateStart2 +dateStart[i]
              dateEnd2=dateEnd2 + dateEnd[i]
            }
            DateyearStart=dateStart2;
            DateyearEnd=dateStart2;
          }
          else if(i===1){
            dateStart2="";
            dateEnd2="";
             for(let i=5;i<7;i++){
              dateStart2=dateStart2 +dateStart[i]
              dateEnd2=dateEnd2 +dateEnd[i]
            }
            DateMonthStart=dateStart2;
            DateMonthEnd=dateEnd2;
          }
          else{
            dateStart2="";
            dateEnd2="";
            for(let i=8;i<10;i++){
              dateStart2=dateStart2 +dateStart[i]
              dateEnd2=dateEnd2 +dateEnd[i]
            }
            DateDayStart=dateStart2;
            DateDayEnd=dateEnd2;
          }
        
        }
        const date3 =DateDayStart +"/" + DateMonthStart + "/"+DateyearStart;
       
        job.dateStartFinal=date3
        const date2 =DateDayEnd +"/" + DateMonthEnd + "/"+DateyearEnd;
      
        job.dateEndFinal=date2

        if(DateyearEnd<=dateYear){
          if(DateMonthEnd<dateMonth){
           
            job.isExpired="EXPIRED";
          }
          else if(DateMonthEnd==dateMonth){
            if(DateDayEnd<dateDay){
           
              job.isExpired="EXPIRED";
            }
            else{                                  ///Expired Condition
           
              job.isExpired="ACTIVE";
            }
          }
          else{
        
            job.isExpired="ACTIVE";
          }
          
        }
        else{
          job.isExpired="ACTIVE";
        }
      });
    });
  return (
    <div >
      {/* <Navbar page={page} name={location.state.userValue} userDetail={data}/> */}
      <Navbar/>
      <div className="container">
        <div className="sec1"> 
          {/* <div className="profile-pic">
            <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div> */}
          <div className="detail_heading">
            <h5>Your Profile</h5>
            <hr />
          </div>
          <div className="detail">
            <h2>{sessionStorage.getItem("username")}</h2>
            <span><FontAwesomeIcon icon={faPhone} /> {sessionStorage.getItem("phone")} </span>
            <span><FontAwesomeIcon icon={faMailReplyAll} />  {sessionStorage.getItem("email")}</span>
            <span><FontAwesomeIcon icon={faHome} />  {sessionStorage.getItem("address")}</span>
            {/* <img src="img/email.png" alt="" /> */}
          </div>
          <hr></hr>
          
        </div>
        <div className="sec2">
          <div className="work_input">
            <FontAwesomeIcon className='icon' icon={faSearch} />
            
            <input type="text" onChange={(e)=>{handleSearch(e.target.value)}} placeholder='Search for a job... ' name="worktype" id="" />
          </div>
          <div className="Articles">
            { articles2.map(article => (
                
              
              <div className="article">
                <div className="upper">

                  <span id='Org_name'> {article.name} </span>
                  <span id='phone'><FontAwesomeIcon icon={faPhone} /> {article.phone} </span>
                  <span id='email'><FontAwesomeIcon icon={faMailReplyAll} />  {article.email} </span>
                  <span id='address'><FontAwesomeIcon icon={faHome} /> {article.address} </span>

                </div>
                <div className="lower">
                  <div className="desc">
                    <span><h2>Description : </h2>{article.desc}</span>
                  </div>
                  <div className="avail_work">
                    <h3>Available Jobs :
                      <select value={articleName} onChange={handleChange}>
                        <option value="">Choose jobs</option>
                        {article.jobs.map( option => (
                          <option value={option.workName}>{option.workName }</option>
                        ))}
                      </select></h3>
                    {toggle && article.jobs.map(job => (
                        job.workName === articleName && 
                     <div className="aboutJob">
                       <div className='first'>
                          <div className="days">
                          <label htmlFor="">For Days </label>
                          <br></br>
                          <input value={job.days}></input>
                        </div>
                        <div className="startDate">
                          <label htmlFor="">Start-Date </label>
                          <br></br>
                          <input value={job.dateStartFinal}></input>
                        </div>
                        <div className="endDate">
                          <label htmlFor="">End-Date </label>
                         <br></br>
                          <input value={job.dateEndFinal}></input>
                        </div>
                    </div>
                 
                    <div className='second'>
                    <div className="amountPaid">
                          <label htmlFor="">About Job </label><br></br>
                          <textarea>{job.aboutJob}</textarea>
                        </div>
                        
                        <div className="amountPaid">
                          <label htmlFor="">Paid by </label><br></br>
                          <input value={job.amountPaid}></input>
                        </div>
                        
                        <div className="jobAddress">
                          <label htmlFor="">Address </label><br></br>
                          <textarea>{job.jobAddress}</textarea>
                        </div>
                    </div>
                       
                        
                        <div className="isExpired" id="isExpired">
                        <h3 id="h3" >{job.isExpired}</h3>
                        <br/>
                     
                       

                        </div>
             
                        
                      </div>
                        
                    )) }
                    
                  </div>
                  
                </div>

              </div>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
