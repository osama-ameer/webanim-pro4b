import React from 'react';
import './FirstComp.css';
import useWebAnimations from "@wellyshen/use-web-animations";


export default function FirstComp() {

    const { ref} = useWebAnimations({
        keyframes:[
            {transform: "translateY(10px)  " ,easing: "ease"},
            {transform: "translateY(-30px) ",  },
            // {transform: "translateY(-10px) "},
            {transform: "translateY(10px)   ", easing: "ease-out"}


        ],
        timing:{
            duration: 5000,
            iterations: Infinity,
            easing: "ease-in-out",

        }
    })

    
    return (
        <div className="container">
            
            <div className="title-first">
                <div className="titile-1">
                    OSAMA
                </div>
                <div className="title-2">
                   BIN AMEER
                </div>
                <div className="parag">
                    Hi, my name is Osama Bin Ameer and I am web and mobile hybrib application developer.
                </div>
                <div className="button">
                    <button className="send">
                        Send Message
                    </button>
                </div>
            </div>


            <div className="animation">
            <img src="https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg" className="header-front" alt="front"  />
            <img src="https://www.cortexcopywriter.com/img/intro/Intro_Featured_Image_Empty.svg" alt="front"/>
            <img src="https://www.cortexcopywriter.com/img/intro/Intro_Brain.svg" alt="brain" ref={ref}/>


            </div>
        </div>
    )
}
