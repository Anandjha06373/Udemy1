import React from 'react';
import './VideoPlayer.css';
import VideoBCs from './video3.mp4'

//import 'react-html5video/dist/style.css'


const ReactVideoGallery=()=>{
    return(
        <div className='container-1'>
        <div className='courses-list-top'>
               <video
                    controls
                    src={VideoBCs}   
               />
               
               <p><b>WebDevelopment Course: HTML FREE OF COST BY :<span > Anand Kumar </span></b></p>
               <button type="button" className="btn-5"><b>$</b> <s>27.5</s></button>
               <button type="button" className="btn"><b>FREE</b></button>
         </div>
        
        </div>
        

    );
};
export default ReactVideoGallery;