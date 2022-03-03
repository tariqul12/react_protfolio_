import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Features.css';
import data from './FeaturesApp';
import Card from './Card';
const Features = () => {
    return (
        <>
          <section className='features top' id='features'>
              <div className="container">
                  <div className="heading text-center">
                      <h4>Features</h4>
                      <h1>What I Do</h1>
                  </div>
                  <div className="content grid">
                      {
                          data.map(data=> <Card key={data.id} data={data} />)
                      }
                     
                    
                  </div>
              </div>
          </section>   
        </>
    );
};

export default Features;