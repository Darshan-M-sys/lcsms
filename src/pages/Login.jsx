import React from 'react'
import FormField from '../components/FormField'

const Login = () => {
  return (
   <div className="flex items-center  justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>
      <form className="space-y-6">
        <div>
          <FormField 
          />
          <FormField />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>

          
   </div>
  )
}

export default Login