import React, { Fragment } from 'react';
import logo3 from "../../src/img/logo3.JPG"



 const Landing = () => {
  return (
    <Fragment>
       <div className='langing-page'>
         <form>
         <div>
         <img src={logo3} alt="logo" className='logo3'/>
         </div>
         <br/>
         <div>
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

         </form>
         
        
       </div>
    </Fragment>  
  )
  
};
export default Landing