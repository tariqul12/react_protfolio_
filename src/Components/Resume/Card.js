import React from 'react';

const Card = (props) => {
    const {tital,year,desc,rate}=props.data;
    return (
        <>
            <div className="box btn_shadow">
                <div className="title_content d_flex">
                    <div className="title">
                        <h2>{tital}</h2>
                        <span>{year}</span>
                    </div>
                    <div className="rate">
                        <button className='btn_shadow'>{rate}</button>
                    </div>
                </div>
                <hr />
                <p>{desc}</p>
            </div>
        </>
    );
};

export default Card;