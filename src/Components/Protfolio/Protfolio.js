import React from 'react';
import Cartd from './Cartd';
import data from './ProtfolioData';
import './Protfolio.css';

const Protfolio = () => {

    return (
        <>
            <section className='protfolio' id='protfolio'>
                    <div className='container'>
                        <div className='heading text-center'>
                            <h4>VISIT MY PROTFOLIO AND KEEP YOUR FEEDBACK</h4>
                            <h1>My Protfolio</h1>
                        </div>
                        <div className='content grid'>
                            {
                                data.map((data,index)=><Cartd key={index} data={data} />)
                            }
                        </div>
                    </div>
            </section>
        </>
    );
};

export default Protfolio;