import React, { useState } from 'react'
import contact from './../../pic/images.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF ,faInstagram,faYoutube,faGithub, } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
export const Contact = () => {
   const [data,setData] = useState({
       fullname:'',
       phone:'',
       email:'',
       subject:'',
       message:'',
    })
   const InputEvent = (event)=>{
       const {name,value} =event.target
       setData((preval)=>{
           return {
               ...preval,
               [name]:value,
           }
       })
   }
   const formSubmit=(event) =>{
       event.preventDefault()
       alert(`
         My name is ${data.fullname},
         My Phone Number is ${data.phone},
         My email Address is $${data.email},
         My Subject on ${data.subject},
         Here is my message I want to say :${data.message}
       `)
   }
  return (
    <>
        <section className='Contact' id='contact'>
            <div className="container top">
                <div className="heading text-center">
                    <h4>CONTACT</h4>
                    <h1>Contact With Me</h1>    
                </div>
                <div className="content d_flex">
                   <div className="left">
                       <div className="box_shadow box">
                           <div className="img">
                               <img src={contact} alt="" />
                           </div>
                           <div className='details'>
                             <h1>Nevine Acotanze</h1>
                             <p>I am avaiable for freelance work. Connect with me via and call in to my Account.</p> 

                             <p>Phone: +88017667400222</p>
                             <p>Email: mshimul591@gmail.com</p>
                             <br />
                             <span>FIND WITH ME</span>
                             <div className="button f_flex">
                                <button className='btn_shadow'> 
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </button>
                                <button className='btn_shadow'> 
                                    <FontAwesomeIcon icon={faInstagram} />
                                </button>
                                <button className='btn_shadow'> 
                                    <FontAwesomeIcon icon={faYoutube} />
                                </button>
                                <button className='btn_shadow'> 
                                    <FontAwesomeIcon icon={faGithub} />
                                </button>
                             </div>
                            </div>
                        </div>
                      
                    </div>  
                    <div className="right box_shadow">
                        <form onSubmit={formSubmit}>
                            <div className="f_flex">
                                <div className="input row">
                                 <span>YOUR NAME</span>
                                 <input type="text" name='fullname' value={data.fullname} onChange={InputEvent} />
                                </div>
                                <div className="input row">
                                 <span>YOUR NUMBER</span>
                                 <input type="phone" name='phone' value={data.phone} onChange={InputEvent} />
                                </div>
                            </div>
                            <div className="input ">
                                 <span>EMAIL</span><br />
                                 <input className='input-box' type="email" name='email' value={data.email} onChange={InputEvent} />
                                </div>
                                <div className="input">
                                 <span>SUBJECT</span><br />
                                 <input className='input-box' type="text" name='subject' value={data.subject} onChange={InputEvent} />
                                </div>
                                <div className="input">
                                 <span>YOUR MESSAGE</span><br />
                                 <textarea className='input-box' cols='30' rows='10' name='message' value={data.message} onChange={InputEvent} />
                                </div>
                                <button className='btn_shadow'>
                                    SEND MESSAGE <FontAwesomeIcon icon={faLongArrowAltDown} />
                                </button>
                        </form>
                    </div>  
                </div>    
            </div>
        </section>
    </>
  )
}
