import React from 'react';
import profile from './../../pic/profile.png';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF ,faInstagram,faYoutube, } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

const Home = () => {
    return (
        <>
          <section className='hero' id='home'>
              <div className="container f_flex top">
                  <div className="left top">
                      <h3>WELLCOME TO MY WORLD</h3>
                      <h1>Hi, I'm <span>Tariqul Islam</span></h1>
                      <h2>a <span> <Typewriter
                        words={['Professional Coder', 'Developer']}
                        loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    
                        /></span></h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptas labore pariatur? Fuga nostrum dolores doloremque odio facilis cum accusamus possimus ea, sunt neque ipsam.
                        </p>
                        <div className="hero_btn d_flex">
                            <div className="col_1">
                                <h4>FIND WITH ME</h4>
                                <div className="button">
                                    <button className='btn_shadow'>
                                        <FontAwesomeIcon className='icon' icon={faFacebookF} />
                                    </button>
                                    <button className='btn_shadow'>
                                        <FontAwesomeIcon className='icon' icon={faInstagram} />
                                    </button>
                                    <button className='btn_shadow'>
                                        <FontAwesomeIcon className='icon' icon={faYoutube} />
                                    </button>
                                </div>
                            </div>

                        </div>
                  </div>
                  <div className="right">
                      <div className="right_img">
                          <img src={profile} alt="" />
                      </div>
                  </div>

              </div>
          </section>   
        </>
    );
};

export default Home;