import React, { useState } from 'react'
import FormField from '../components/FormField'
import { Link } from 'react-router-dom'
import logo from '../components/assets/images/logo.png'
const Register = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit =(e)=>{
    e.preventDefalut();
    console.log(formData)
  }


  return (
   <div className="flex items-center  justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-600">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center items-center gap-2">
            <img className="w-[60px] h-[60px] rounded-full" src={logo} alt="logo" />
      <h2 className="text-2xl font-bold text-center text-gray-800">Create Your Account</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <FormField 
          type="name"
          label={"Full Name"}
          required={true}
          value={formData.name}
          onChange={handleChange}  
          name="name"
          />
          <FormField 
          type="email"
          label={"Email"}
          required={true}
          value={formData.email}
          onChange={handleChange}  
          name="email"
          />
          <FormField 
              type="password"
          label={"Password"}
          required={true}
          value={formData.password}
          onChange={handleChange}  
          name="password"/>
        </div>
        <div className="flex justify-between">
         <p>I already  have an account? </p>
         <p className="text-blue-500 text-semibold"><Link to="/login">Login</Link></p>
   
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Register
        </button>
      </form>
    </div>

          
   </div>
  )
}

export default Register