import React from 'react';
import './Appbar.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import FirstComp from './FirstComp';


export default function Appbar() {
    const { ref, getAnimation } = useWebAnimations({
        // playbackRate: 0.5, // Change playback rate, default is 1
        autoPlay: false, // Automatically starts the animation, default is true
        keyframes:[ { transform: "translate(300px)"},
        { transform: "translate(-130px)"},
        
    ],
        timing: { duration: 1000, easing: "ease-out", iterations: 1 },
        onUpdate: ({ animation }) => {
            if (animation.currentTime > animation.effect.getTiming().duration / 2)
            getAnimation().pause();
          },
      });

    
    const start = () => {
        getAnimation().play();
    }

    const stop = () => {
        getAnimation().cancel();
    }

    return (
        <div>

            <div className="nav"> 

                
                <button className="btn" onClick={start} >
                <i className="fa fa-bars" aria-hidden="true" ></i>
                </button>
            </div>

            <FirstComp></FirstComp>

       
       
        <nav ref={ref} >
            <button className="btn-cross" onClick={stop} >
            <i className="fa fa-times fa-2x "  style={{
                marginLeft: '-10px'
            }} aria-hidden="true"></i>

            </button>
        <div className="logo">
            <img src="http://osamaameer-jsprojects.surge.sh/Landing%20Page/images/pic.jpg" alt="pic" />
        
            <center><h3 style={{
            color: 'white'
        }}>Osama Ameer</h3></center>
        <center><p style={{
            color: 'white',
        }}>Software Engineer</p></center>
        </div>

        
        <ul>
            <li><a href="https://www.linkedin.com/in/osama-ameer-50b80719b/">Home</a></li>
            <li><a href="https://www.linkedin.com/in/osama-ameer-50b80719b/">About</a></li>
            <li><a href="https://www.linkedin.com/in/osama-ameer-50b80719b/">Contact</a></li>
            <li><a href="https://www.linkedin.com/in/osama-ameer-50b80719b/">Portfolio</a></li>
        </ul>
        </nav>
        
       
       
       </div>
    )
}
