import React, { useEffect, useState } from 'react';
import Slid from './Slid';
import "./Testimonial.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TestimonialData from './TestimonialData';
const Testimonial = () => {
    const [data,setData] =useState(TestimonialData)
    const [index,setIndex]= useState(0)
    useEffect(()=>{
        const lastIndex=data.length -1 
        if(index < 0 ) {
            setIndex(lastIndex)
        }
        if(index > lastIndex ) {
            setIndex(0)
        }
    },[index,data])
    useEffect(()=>{
        let slider=setInterval(()=>{
            setIndex(index + 1)
        },3000)
        return ()=> clearInterval(slider)
    },[index])
    return (
        <>
            <section className='Testimonial' id='clients'>
                <div className="container">
                    <div className="heading text-center">
                        <h4>WHAT CLIENTS SAY</h4>
                        <h1>Testimonial</h1>
                    </div>
                    <div className='slide'>
                        {
                            TestimonialData.map((value,valueIndex)=>{
                                return <Slid key={value.id}  {...value} valueindex={valueIndex} index={index} />
                            })
                        }
                        
                        <div className='slide_button'>
                            <button className='btn_shadow prev_btn' onClick={()=>setIndex(index-1)} >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button className='btn_shadow next_btn' onClick={()=>setIndex(index+1)} >
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default Testimonial;