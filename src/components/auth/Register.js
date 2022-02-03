import React, { Fragment } from 'react';
import frontlay from "../../img/frontlay.JPG"
import logo1 from "../../img/logo1.JPG"

 const Register = () => {
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
        
         <form className='form'>
         <h4 className='form-heading'>Register</h4>
         <h6 className='form-paragragh'>Manage all your lottery efficiency</h6>
         <p className='form-sentence'>Let's get you all set up so you can verify your personal account and begin setting up your profile.</p>

           <div className='form-labal1'>
             <div >
                <label  class="">First Name</label>
                <br/>
                <input type="text"  className="" />
             </div>
             <div>
                <label  class="">Last Name</label><br/>
                <input type="text"  className="" />
             </div>
           </div>
           <div className='form-labal1'>
             <div >
                <label  class="">Phone Number</label>
                <br/>
                <input type="text"  className=""/>
             </div>
             <div>
                <label  class="">Email</label><br/>
                <input type="text"  className='' />
             </div>
           </div>
           <div className='form-labal1'>
             <div >
                <label  class="">Password</label>
                <br/>
                <input type="text"  className='' />
             </div>
             <div>
                <label  class="">Comfirm Password</label><br/>
                <input type="text"  className=''/>
             </div>
           </div>
           <div className='form-checkbox'>
              <input type="checkbox" className='checkbox-text' />
              <label for="vehicle1"> Yes, I want to receive Lottery Display emails </label><br/>
              <input type="checkbox" className='checkbox-text'/>
              <label for="vehicle1"> I agree to all the Term, Privacy Policy and Fees</label><br/>
           </div>

           <button className='form-button'>Create Account</button>
           <p className='form-log-paragraph'>Already have a account</p><href>Log in </href>
           
         </form>
      </div>
    </div>
    </Fragment>  
  )
  
};

export default Register;