import React from 'react';
import Card from './Card';
import resumeData from './ResumeData';
import './Resume.css'
const Resume = () => {
    return (
        <>
            <section className="resume" id='resume'>
                <div className="container top">
                    <div className="heading text-center">
                        <h4>4+ YEARS OF EXPRUCENCE</h4>
                        <h1>My Resume</h1>
                    </div>
                    <div className="content-section mtop d_flex">
                        <div className="left">
                            <div className="heading">
                                <h4>2017-2022</h4>
                                <h1>Education Qulaity</h1>
                            </div>
                            <div className="content">
                                {
                                    resumeData.map((data,index)=>{
                                        if(data.category==="education"){
                                            return <Card data={data} key={index} />
                                        }
                                    })
                                }
                             
                            </div>
                        </div>
                        <div className="left">
                            <div className="heading">
                                <h4>2017-2022</h4>
                                <h1>Job Experience</h1>
                            </div>
                            <div className="content">
                                {
                                    resumeData.map((data,index)=>{
                                        if(data.category==="experience"){
                                            return <Card data={data} key={index} />
                                        }
                                    })
                                }
                             
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Resume;