import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { login } from '../../actions/auth';
import logo2 from "../../img/logo2.JPG"

 const Login = ({ login, isAuthenticated }) => {


  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
    
})


const {  email, password } = formData

const onChange = e => {
  setFormData({ ...formData, [e.target.name] : e.target.value })
}

const onSubmit = e => {
  e.preventDefault()
  login(email, password)
}

// Redirect if logged in
if(isAuthenticated){
  return <Redirect to='/' />
}
  return (
    <Fragment>
       <div className='login-form'>
        <div className='login-form-logo'>
           <img src={logo2} alt="logo" className='logo2'/>
           <h4 className='logo2-text'>Lottery Diplay</h4>
        </div> 
      
        <form className='form' onSubmit={onSubmit}>
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

           <input type="submit" value="Sign In" className="form-button" />
          
           <p className='form-log-paragraph'>Don't have an account?<Link to="/register">Sign in</Link></p>
         </form>
          
           
      </div>
    </Fragment>  
  )
  
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);