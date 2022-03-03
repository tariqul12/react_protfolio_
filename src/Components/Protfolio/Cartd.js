import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Protfolio.css';
import { faHeart,faArrowRight,faThumbsUp,faChevronRight,faTimes } from '@fortawesome/free-solid-svg-icons';
const Cartd = (props) => {
    const {category,image,title,totalLike}=props.data;
    // console.log(category,image,title,totalLike);
    const [modal,setModal] = useState(false)
    const toggleModal=() =>{
        setModal(!modal)
    }

    return (
        <>
            <div className='box btn_shadow'>
                <div className='img'>
                    <img src={image} alt=""  onClick={toggleModal}/>
                </div>
                <div className='category d_flex'>
                    <span onClick={toggleModal}>{category}</span>
                    <label>
                       
                        <FontAwesomeIcon icon={faHeart} />
                        <span> {totalLike} </span>
                    </label>
                </div>
                <div className='title'>
                    <h2 onClick={toggleModal} className='title3'>{title}</h2>
                    <a href="#popup" className='arrow' onClick={toggleModal}>
                    <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>
            {/* ------popup MODAL-------- */}
            {modal &&(
                <div className='model'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content d_flex'>
                        <div className="modal-img left">
                            <img src={image} alt="" />
                        </div>
                        <div className="modal-text right">
                            <span>Featured - Design</span>
                            <h1>{title}</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ratione, asperiores, quaerat nihil voluptatem, officiis repellat minima quo suscipit hic illo animi iste fugit!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at sunt alias debitis minus numquam, sit sapiente labore voluptatibus. Nemo consequatur praesentium </p>
                            <div className='button f_flex mtop'>
                                <button className='btn_shadow'>
                                    LIKE THIS <FontAwesomeIcon className='iconf' icon={faThumbsUp} />
                                </button>
                                <button className='btn_shadow'>
                                    VIEW PROJECT <FontAwesomeIcon className='iconf' icon={faChevronRight} />
                                </button>
                            </div>
                            <button className='close-modal btn_shadow' onClick={toggleModal}>
                                <FontAwesomeIcon className='iconf' icon={faTimes} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cartd;