import React from 'react'
import '../index.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import YoutubeEmbed from "./YoutubeEmbed";
import image1 from '../assets/OrigamiInitial/artist.jpg'
import image2 from '../assets/OrigamiInitial/draw.jpg'
import image3 from '../assets/OrigamiInitial/invisible.jpg'
import image4 from '../assets/OrigamiInitial/line.jpg'
import image5 from '../assets/OrigamiInitial/memory.jpg'
import image6 from '../assets/OrigamiInitial/origami.jpg'
import image7 from '../assets/OrigamiInitial/question.jpg'
import image8 from '../assets/OrigamiInitial/suitlock.jpg'
import image9 from '../assets/OrigamiInitial/waldo.jpg'
import image10 from '../assets/OrigamiInitial/water.jpg'
import image11 from '../assets/OrigamiDetailed/origami1.png'
import image12 from '../assets/OrigamiDetailed/origami2.png'
import image13 from '../assets/OrigamiDetailed/origami3.png'
import image14 from '../assets/OrigamiDetailed/origami4.png'
import image15 from '../assets/OrigamiDetailed/origami5.png'
import image16 from '../assets/OrigamiDetailed/origami6.png'
import image17 from '../assets/OrigamiDetailed/origami7.png'
import image18 from '../assets/OrigamiDetailed/origami8.png'
import image19 from '../assets/OrigamiDetailed/origami9.png'
import image20 from '../assets/OrigamiDetailed/origami10.png'


const OrigamiUnlock = () => {
    return (
        <div name='origami' className='w-full md:h-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Origami Unlock
                    </p>
                    <p className='py-6 text-1xl font-bold text-gray-300'>
                        Authors: Harprabh Gill, Debprasad Mandal, Navjot Saran, Fysal Beauferris
                    </p>
                    <p className='py-6'> 
                    The idea of our touch-based unlock is to allow users to open their phones with a sequence of origami folds as passwords. Dotted lines represent folding locations on the paper. The divide on the paper is made into separate buttons. Hitting the wrong button or a button in the wrong sequence restarts the unlock process from the lock screen. Every correct selection leads to an animation that shows the paper folded over where the dotted line was. The password entry completes after the last fold, showing the completed origami figure for a moment. The phone is then unlocked. 

                    </p>
                    <p className='py-6'>
                    We started with each of us coming up with 10 initial sketches for our ideas. We discussed them with one another and the origami idea was an easy favorite. Most people aren’t familiar enough with origami to guess a password based on the correct fold sequence. So we figured its actually a pretty good idea for a phone unlock interface. Someone trying to break into the users phone wouldn’t even know the shape they’re going for. It would be fully secure with limited attempts and customizable origami shapes but we kept it simple to keep the focus on showing the design and idea. 
                    </p>
                    <p className='py-6'>
                    The unlock design is secure in the sense that most people don't know origami. Most default origami figures this design could provide would follow known patterns, however. If a non-authorized user decided to spy on an unlock, they could figure out the pattern from seeing the end result origami figure alone. An idea around this is to offer custom designs and fold sequences. Another issue is that someone could just guess repeatedly until they memorize the correct pattern. A password attempt limit immediately solves this issue. Accidental unlocks are extremely improbable because there are so many specific areas of the screen that must be tapped to unlock. Incorrect selections restart the process. 
                    </p>
                    <p className='py-6'>
                    Using the Origami idea we came up with, I designed all of the origami assets that the user sees. From there I developed the user interface and made the program switch screens based on the correct or incorrect selection. The seperate buttons that are split on the origami folds were also developed by me. I also added the initial swipe to unlock and the animation once the user gets the correct password. 
                    </p>
                    <p className='text-2xl py-6 font-bold'>Initial Sketches:</p>
                    <p className='py-6'>
                    While deciding on how we should design our touch-based unlock system. We had initially come up with 10 designs, those being a higher or lower game, a drawing unlock, an invisible section unlock, connect the dots, shape memory, origami, prompt answering, carry case style unlock, “Where’s Waldo?” style unlock, and a water level unlock. Out of all these ideas we eventually picked the origami unlock as it has a unique design which is visually appealing, while also having really good security as the user must know the pattern to unlock it. 
                    </p>
                </div>

                <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
                    <AliceCarousel autoPlay infinite="true" autoPlayInterval="3000">
                        <div>
                            <img src={image1} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This is a higher or lower unlock in which the
                                user will be prompted to choose, if the user ranks the right side higher or lower
                                than the left. From there, if the user get's it correct, then the right side goes to 
                                the left and the right side has a new prompt. Once the user get's all the prompts 
                                correct, the phone will then unlock.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image2} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This is a drawing unlock in which the user has to draw the password out and if they
                                draw it out correctly the phone will unlock.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image3} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This is an unlock in which the screen is blank and the user has to click different parts
                                of the screen in the correct order.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image4} className="sliderimg"/>
                            <figcaption className='py-6'>
                                In this unlock, the user will have to connect the dots in the correct order to make
                                the design that is set as the password.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image5} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This is a memory unlock in which the
                                user will be prompted to remember the order the shapes are
                                presented. From there they will then be asked to click the 
                                shapes in the original order.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image6} className="sliderimg"/>
                            <figcaption className='py-6'>
                                In this unlock the user will have to make origami in the same way that
                                is set as the password.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image7} className="sliderimg"/>
                            <figcaption className='py-6'>
                                To unlock the device, the user will have to enter an answer that best answers
                                the prompt and matches the password.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image8} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This is a coded password similar to ones seen on some padlocks and briefcases.
                                The user will have to either increase or decrease each number to match that of the
                                set password.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image9} className="sliderimg"/>
                            <figcaption className='py-6'>
                                Similar to a Where's Waldo game, the user will have to click on an object set as the password
                                from a cluttered screen in order to unlock the device. 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image10} className="sliderimg"/>
                            <figcaption className='py-6'>
                                In this unlock the user will have to fill up each glass with water to the specific amount set
                                as the password.
                            </figcaption> 
                        </div>
                    </AliceCarousel>
                </div>

                <div className='pb-8'>
                    <p className='text-2xl py-6 font-bold'>Detailed Sketches:</p>
                </div>

                <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <div>
                            <img src={image11} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            To avoid accidental unlocks we decided to add a feature that requires the user to swipe the screen upwards to begin unlocking the phone. This serves as the homescreen where the user can receive notifications and check the time as they normally can.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image12} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            After unlocking, the user's chosen password origami is displayed in its unfolded state. The fold lines for the first step are shown on the shape. Choose the right side to fold.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image13} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            After choosing the correct side, the process moves to step 2 of a given origami password. Choose the correct side to move onto step 3.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image14} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            Choosing the correct side shows the resulting shape with the paper folder over the line. Choosing the wrong side to fold at any moment throughout the unlock process restarts the whole process.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image15} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            Another correct selection! It is beginning to take a familiar shape.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image16} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            Make another correct fold. Any incorrect selection results in the whole process restarting.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image17} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            After the final correct fold has been completed, the origami shape displays it's figure for a moment before the phone unlocks.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image18} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            We decided to add a scenic background to create an atmosphere for folding origami. Our idea for the design was to separate the unlock process into states. Each correct fold selection leads to the next state, while any incorrect selection returns the process to the first state.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image19} className="sliderimg"/>
                            <figcaption className='py-1'>
                            This sketch shows the process returning the screen to the first state after an incorrect selection.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image20} className="sliderimg"/>
                            <figcaption className='py-1'>
                            We decided to add a face to our final origami design. This is a satisfying conclusion for the user after they have completed their password. The display pauses for a moment and then the phone unlocks.
                            </figcaption>
                        </div>
                    </AliceCarousel>
                </div>
                <div className="App py-40">
                    <h1>Origami Unlock Demo</h1>
                    <YoutubeEmbed embedId="edaLTdUpwvk" />
                </div>

            </div>
        </div>
    );
};

export default OrigamiUnlock
