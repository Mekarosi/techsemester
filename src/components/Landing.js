import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { askQuestion } from '../actions/question';
import PropTypes from 'prop-types'
import Navbar from './Navbar';
import logo3 from "../../src/img/logo3.JPG"



 const Landing = ({ askQuestion }) => {

  const [formData, setFormData] = useState({
    user: '',
    body: '',
    active: '',
    title: '',
    url: '',
    videoUrl: '',
    tags: ''
})

const { user, body, active, title, url, videoUrl, tags } = formData

const onChange = e => {
  setFormData({ ...formData, [e.target.name] : e.target.value })
}

const onSubmit = e => {
 e.preventDefault()
 askQuestion({ user, body, active, title, url, videoUrl, tags })
 setFormData({
  user: '',
  body: '',
  active: '',
  title: '',
  url: '',
  videoUrl: '',
  tags: ''
 })

}

  return (
    <Fragment>
     
       <div className='container'>
       <Navbar />
    
       
       
       <div className='langing-page'>
        
         <form onSubmit={onSubmit}>
        
         <br/>
         <div>
         <img src={logo3} alt="logo" className='logo3'/>
         <p>Ask your Question</p>
         </div>
         <br/>
         <div>
           <h5>Body</h5>
         </div>
         <br/>
         <div>
             <p>Input all information needed to answer your question</p>
         </div>
         <div >
                <label  className="">User</label>
                <br/>
                <input 
                type='number'  
                placeholder="User"    
                name='user' 
                value={user} 
                onChange={onChange}
                    className="" />
          </div>
          <div >
                <label  className="">Body</label>
                <br/>
                <input type="textarea"  placeholder="Body"    name='body' value={body} 
                    onChange={onChange}
                    className="" />
          </div>
          <div >
                <label  className="">Active</label>
                <br/>
                <input type="number"  placeholder="Active"    name='active' value={active} 
                    onChange={onChange}
                    className="" />
          </div>
          <div >
                <label  className="">Title</label>
                <br/>
                <input type="text"  placeholder="Title"    name='title' value={title} 
                    onChange={onChange}
                    className="" />
          </div>
          <div >
                <label  className="">url</label>
                <br/>
                <input type="text"  placeholder="url"    name='url' value={url} 
                    onChange={onChange}
                    className="" />
          </div>
          <div >
                <label  className="">Video url</label>
                <br/>
                <input type="text"  placeholder="Video url"    name='videoUrl' value={videoUrl} 
                    onChange={onChange}
                    className="" />
          </div>
          <div >
                <label  className="">Tags</label>
                <br/>
                <input type="number"  placeholder="Tags"    name='tags' value={tags} 
                    onChange={onChange}
                    className="" />
          </div>
          <input type="submit" value="Post your question" className="form-button" />


         </form>
       </div>
       </div>
       <br/>
       <br/>
    </Fragment>  
  )
  
};

Landing.propTypes = {
  askQuestion: PropTypes.func.isRequired
}
export default connect(null, { askQuestion } )(Landing)