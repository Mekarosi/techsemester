import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'
import logo2 from "../../img/logo2.JPG"

 const Login = () => {


  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
    
})


const {  email, password } = formData

const onChange = e => {
  setFormData({ ...formData, [e.target.name] : e.target.value })
}

  return (
    <Fragment>
       <div className='login-form'>
        <div className='login-form-logo'>
           <img src={logo2} alt="logo" className='logo2'/>
           <h4 className='logo2-text'>Lottery Diplay</h4>
        </div> 
      
        <form className='form'>
         <h4 className='form-heading'>Login</h4>
         <h6 className='form-paragragh'>Login to your account</h6>
         <p className='form-sentence'>Thank you for get back best recommendation</p>

           <div className=''>
             <div >
                <label  className="">Username</label>
                <br/>
                <input type="email"  className="" placeholder="Email or Phone Number"    name='email' value={email} 
                    onChange={onChange}
                     />
             </div>
             
           </div>
           <div className=''>
             <div >
                <label  className="">Password</label>
                <br/>
                <input  type="password"  className="" placeholder="Password"  name='password' value={password} 
                 onChange={onChange}
                 />
             </div>
            
           </div>
          
           <div className='form-checkbox'>
              <input type="checkbox" className='checkbox-text' />
              <label for="vehicle1"> Remember me </label><br/>
              
           </div>

           <button className='form-button'>Create Account</button>
          
           <p className='form-log-paragraph'>Don't have an account?<Link to="/register">Sign in</Link></p>
         </form>
          
           
      </div>
    </Fragment>  
  )
  
};

export default Login;