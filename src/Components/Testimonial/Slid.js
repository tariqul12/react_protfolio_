import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';;

const Slid = ({id,image,design,name,offcer,post,data,desc,valueIndex}) => {
    return (
        <>
            <article className='box d_flex'>
                <div className="left box_shadow">
                    <div className='img'>
                         <img src={image} alt="" />
                    </div>
                    <div className="details mtop">
                        <span>{design}</span>
                        <h2>{name}</h2>
                        <label>{offcer}</label>
                    </div>
                </div>
                <div className="right">
                    <div className="icon">
                        <div className="quote">
                            <FontAwesomeIcon className='iconquote' icon={faQuoteRight} />
                        </div>
                    </div>
                    <div className='content box_shadow mtop'>
                        <h1>{post}</h1>
                        <h3>{data}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Slid;