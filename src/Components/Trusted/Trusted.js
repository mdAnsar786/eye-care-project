import React from 'react';
import ophthalmologic from "../../Assets/images/ophthalmologic-offerings.webp"
// import '../Feature/Feature.css';
import "./Trusted.css"

const Trusted = () => {
    return (
        <div>
            <div className='trusteddiv'>
             <div className="truested-firstdiv">
                <div>
                    <h1 className="h1tag">Trusted Ophthalmologic Offerings</h1>
                </div>
                <ul classNmae="list-item">
                <li className='list' style={{color:"white",fontSize:"16px", textAlign:"left",lineHeight:"2",marginLeft:"90px"}}> Excellent Phaco surgery Centre for Cataract surgery</li>
                <li   className='list'  style={{color:"white",fontSize:"16px", textAlign:"left",lineHeight:"2",marginLeft:"90px"}}>World class treatment of Vitreo Retinal diseases</li>
                <li  className='list'  style={{color:"white",fontSize:"16px", textAlign:"left",lineHeight:"2",marginLeft:"90px"}}>Comprehensive management of Oculoplastic diseases</li>
                <li  className='list'  style={{color:"white",fontSize:"16px", textAlign:"left",lineHeight:"2",marginLeft:"90px"}}>Effective diagnosis and expert care in Glaucoma</li>
                <li  className='list'  style={{color:"white",fontSize:"16px", textAlign:"left",lineHeight:"2",marginLeft:"90px"}}> Utmost care for Paediatric eyes </li>
                </ul>
             </div>
             
             <div>
                    <img src={ophthalmologic} alt="..." style={{height:"450px", width:"700px"}}/>
                </div>
            </div>
        </div>
    );
};

export default Trusted;