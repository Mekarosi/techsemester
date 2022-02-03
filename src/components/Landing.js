import React, { Fragment } from 'react';
import logo3 from "../../src/img/logo3.JPG"



 const Landing = () => {
  return (
    <Fragment>
       <div className='langing-page'>
         <div>
         <img src={logo3} alt="logo" className='logo3'/>
         </div>
         <div>
         <p>Ask your Question</p>
         </div>
         
         <div>
           <h5>Body</h5>
         </div>
         
         <div>
             <p>Input all information needed to answer your question</p>
         </div>
        
       </div>
    </Fragment>  
  )
  
};
export default Landing