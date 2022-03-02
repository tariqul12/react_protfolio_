import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    
    // const data=props.data;
    // console.log(data);
    const {desc, image,title}=props.data;
    return (
        <>
            <div className="box btn_shadow">
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>{desc}</p>
                <a href="">
                    <FontAwesomeIcon className='box_icon' icon={faArrowRight} />
                </a>
            </div> 
        </>
    );
};

export default Card;