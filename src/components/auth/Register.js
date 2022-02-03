import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'
import frontlay from "../../img/frontlay.JPG"
import logo1 from "../../img/logo1.JPG"

 const Register = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    password2: ''
})

const { firstName, lastName, phone, email, password, password2 } = formData

const onChange = e => {
  setFormData({ ...formData, [e.target.name] : e.target.value })
}

const onSubmit = e => {
  
}
  return (
    <Fragment>
    <div className='register-form'>
      <div className='register-form-col1'>
      <img src={logo1} alt="logo" className='logo1'/>
     
          <p className='register-front-text'>
            A few clicks away from creating your <br/> Lottery Display 
          </p>
          <img src={frontlay} alt="front logo" className='frontlay' />  
      </div>
      <div className='register-form-col2'>
        
         <form className='form' onSubmit={onSubmit} >
         <h4 className='form-heading'>Register</h4>
         <h6 className='form-paragragh'>Manage all your lottery efficiency</h6>
         <p className='form-sentence'>Let's get you all set up so you can verify your personal account and begin setting up your profile.</p>

           <div className='form-labal1'>
             <div >
                <label  class="">First Name</label>
                <br/>
                <input  type="text" name='FirstName' value={firstName} 
                    onChange={onChange}
                    className="" />
             </div>
             <div>
                <label  class="">Last Name</label><br/>
                <input 
                    type="text" name='lastName' value={lastName} 
                    onChange={onChange}
                    className=""
                />
             </div>
           </div>
           <div className='form-labal1'>
             <div >
                <label  class="">Phone Number</label>
                <br/>
                <input 
                   type="text" name='phone' value={phone} 
                   onChange={onChange}
                   className=""
                />
             </div>
             <div>
                <label  class="">Email</label><br/>
                <input  
                type="email" name='email' value={email} 
                    onChange={onChange}
                    className="" />
             </div>
           </div>
           <div className='form-labal1'>
             <div >
                <label  class="">Password</label>
                <br/>
                <input 
                 type="password" name='password' value={password} 
                 onChange={onChange}
                 className="" />
             </div>
             <div>
                <label  class="">Comfirm Password</label><br/>
                <input  type="password2" name='password2' value={password2} 
                 onChange={onChange}
                 className=""/>
             </div>
           </div>
           <div className='form-checkbox'>
              <input type="checkbox" className='checkbox-text' />
              <label for="vehicle1"> Yes, I want to receive Lottery Display emails </label><br/>
              <input type="checkbox" className='checkbox-text'/>
              <label for="vehicle1"> I agree to all the Term, Privacy Policy and Fees</label><br/>
           </div>
           <input type="submit" value="Create Account" className="form-button" />
           
           <p className='form-log-paragraph'> Already have an account? <Link to="/login">Log In</Link></p>
           
         </form>
      </div>
    </div>
    </Fragment>  
  )
  
};

export default Register;