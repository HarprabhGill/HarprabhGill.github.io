import React from 'react'
import '../index.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import YoutubeEmbed from "./YoutubeEmbed";
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img3.jpg'
import image4 from '../assets/img4.jpg'
import image5 from '../assets/img5.jpg'
import image6 from '../assets/img6.jpg'
import image7 from '../assets/img7.jpg'
import image8 from '../assets/img8.jpg'
import image9 from '../assets/img9.jpg'
import image10 from '../assets/img10.jpg'

const TugofWar = () => {
    return (
        <div name='tug' className='w-full md:h-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Tug of War
                    </p>
                    <p className='py-6'>The project we chose to take on is a Tug of War app. In this app 
                    two users will compete head on head to try and pull the rope towards themselves. In order to
                    do this they will click the hands(button) which will then pull the rope towards them while also
                    making the background gradient become the users colour. While doing this there will be a bar on
                    the side of the screen which will go up and down and will determine how strong of a pull the user 
                    will have on the rope. If the user clicks the button and the slider is on the white section then 
                    the rope will move towards the user by a large margin, however if the slider is on the black section 
                    then the rope will move towards the other user by a large margin. When the slider isn't on the black
                    or white section then the rope will move towards the user slightly which is also the most likely to 
                    occur.
                    </p>
                    <p>
                    We came up with this idea while talking about activities you might do while at the park. With 
                    tug of war being something that people usually do we decided to go with it. While that is how we
                    came up with the main idea for the game the background gradient is something we took from another 
                    game we were planning of creating. Finally the bar is something I came up with while talking to our
                    ta as we decided the user needs some sort of punishment if they click at the wrong time in order to
                    reduce spamming of the button.
                    </p>
                    <p>
                    I initially made a setup for the game with react native because I knew we would need to use our phones 
                    to execute our Tug of War idea. The group ended up going with Fysals web app setup because given the 
                    time frame it would be easier for the others to work with html, css and js. My contribution was to add 
                    the power bar functionality to the game. This changed gameplay in a crucial way, because it took away 
                    the user focus on button mashing alone to win. 
                    </p>
                    <p className='text-2xl py-6 font-bold'>Initial Sketches:</p>
                    <p className='py-6'>While deciding on which app to make we had initially come up
                    with 10 designs those being a memory game, tug of war game, colouring app, plant 
                    simulator, campfire simulator, gradient game, darts game, where's Waldo game, 5 
                    seconds game, and a pet simulator. Out of all these ideas we eventually picked the 
                    tug of war game as it supports multiplayer and creates a competitive enviromnent for the 
                    players to compete in. We also added implemented the gradient game into the tug of war game
                    as we made the background a gradient that changes depending on who is winning.
                    </p>
                </div>

                <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
                    <AliceCarousel autoPlay infinite="true" autoPlayInterval="3000">
                        <img src={image1} className="sliderimg"/>
                        <img src={image2} className="sliderimg"/>
                        <img src={image3} className="sliderimg"/>
                        <img src={image4} className="sliderimg"/>
                        <img src={image5} className="sliderimg"/>
                        <img src={image6} className="sliderimg"/>
                        <img src={image7} className="sliderimg"/>
                        <img src={image8} className="sliderimg"/>
                        <img src={image9} className="sliderimg"/>
                        <img src={image10} className="sliderimg"/>
                    </AliceCarousel>
                </div>

                <div className='pb-8'>
                    <p className='text-2xl py-6 font-bold'>Detailed Sketches:</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <img src={image1} className="sliderimg"/>
                        <img src={image2} className="sliderimg"/>
                        <img src={image3} className="sliderimg"/>
                        <img src={image4} className="sliderimg"/>
                        <img src={image5} className="sliderimg"/>
                        <img src={image6} className="sliderimg"/>
                        <img src={image7} className="sliderimg"/>
                        <img src={image8} className="sliderimg"/>
                        <img src={image9} className="sliderimg"/>
                        <img src={image10} className="sliderimg"/>
                    </AliceCarousel>
                </div>
                <div className="App">
                    <h1>Tug of War Demo</h1>
                    <YoutubeEmbed embedId="2R2J6Jev4jY" />
                </div>

            </div>
        </div>
    );
};

export default TugofWar
