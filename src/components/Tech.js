import React from 'react';
import './Tech.css';

export default function Tech() {
    return (
        <div className="techniq">
            <div className="row-inner">

                <div className="title">
                <h3 class="heading-block-background">Interactive Techniques</h3>
                <p class="title-para">Allow me to demonstrate some <a href="blog/top-3-ways-psychology-hacks-minds.html">psychology-based copywriting</a> techniques I apply to optimize user experiences and boost conversion rates.</p>
                </div>


                
                <div className="advertistment">
                    <div  className="desc">
                        <div className="slogan">
                        <i class="fas fa-info-circle" style={{
                            fontSize: '18px',
                            marginTop: '-4px',
                            transform: 'translateY(3px)',
                            marginRight: '5px'
                        }}></i>
                        Technique Description  
                        </div>
                        <div className="desc-title">Rhyme</div>
                        <div className="desc-text">
                        People perceive rhyming phrases as more truthful.
                        </div>

                    </div>


                    <div className="option">
                    <div className="techniques_option_activated" data-technique="rhyme">Rhyme</div>
                    <div class="techniques_option" data-technique="bizarre">Bizarre</div>
                    <div class="techniques_option" data-technique="bizarre">Bizarre</div>
                    <div class="techniques_option" data-technique="bizarre">Bizarre</div>
                    <div class="techniques_option" data-technique="bizarre">Bizarre</div>
                    <div class="techniques_option" data-technique="bizarre">Bizarre</div>
                    <div class="techniques_option" data-technique="bizarre">Bizarre</div>
                    <div class="techniques_option" data-technique="bizarre">Bizarre</div>
                    </div>




                    <div className="contain">
                        <div className="contain-text">
                        <div className="techniques_text_column left-padding">
                <div className="heading" style={{opacity: '1', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}></div>
                <div className="subheading" style={{opacity: '1', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>Technique Example</div>
                <div className="smallheading" style={{opacity: '1', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>Augmented Reality (AR) Glasses:</div>
                <div className="paragraph" style={{opacity: '1', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>At last, interactive AR experiences that <span className="underline">feel real</span>.</div>
              </div>
                        </div>


                        <div className="container-bg">
                        <img src="https://www.cortexcopywriter.com/img/techniques/svg/tech-ar.svg" alt="character-anim"/>
                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}
