import React, { useState } from 'react'
import axios from 'axios'

const SignIn = () => {
    const[data,setData] =useState(
        {
            "Emailid":"",
            "password":"",
            
          
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8003/signin",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("success")
                    }
                    else{
                        alert("not success")
                    }
            }
        )
    }
  return (
    <div>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Emailid</label>
                            <input type="text" className="form-control" name="Emailid" value={data.Emailid} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">password</label>
                            <input type="text" className="form-control" name="password" value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Sign in</button>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                        <p><a href="#" class="link-underline-secondary">Signup</a></p>

                        </div>

                    </div>
                </div>
            </div>
        </div>

       

        </div>
  )
}

export default SignIn