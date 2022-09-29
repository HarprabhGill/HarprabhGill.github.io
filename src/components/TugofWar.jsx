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
import image11 from '../assets/img11.png'
import image12 from '../assets/img12.png'
import image13 from '../assets/img13.png'
import image14 from '../assets/img14.png'
import image15 from '../assets/img15.png'
import image16 from '../assets/img16.png'
import image17 from '../assets/img17.png'
import image18 from '../assets/img18.png'
import image19 from '../assets/img19.png'
import image20 from '../assets/img20.png'

const TugofWar = () => {
    return (
        <div name='tug' className='w-full md:h-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Tug of War
                    </p>
                    <p className='py-6 text-1xl font-bold text-gray-300'>
                        Authors: Harprabh Gill, Debprasad Mandal, Navjot Saran, Fysal Beauferris
                    </p>
                    <p className='py-6'>The project we chose to take on is a Tug of War app. In this app two users 
                    will compete head on to try and pull the rope towards themselves. In order to do this they will 
                    click the hands(button) which will then pull the rope towards them while also making the background 
                    gradient become the winner’s team color (red or blue). While doing this there will be a bar on 
                    the side of the screen which will go up and down and will determine how strong of a pull the user 
                    will have on the rope. If the user clicks the button and the slider is on the white section, then 
                    the rope will move towards the user by a large margin, however if the slider is on the black section, 
                    then the rope will move towards the other user by a large margin. When the slider isn't on the black 
                    or white section then the rope will move towards the user slightly which is also the most likely to 
                    occur.
                    </p>
                    <p className='py-6'>
                    We initially started by coming up with 10 ideas among ourselves and drawing our own implementations of it. 
                    Then we discussed amongst ourselves and got feedback on our ideas from the TA as well. The TA liked our 
                    tug of war idea the most. We came up with this idea while talking about activities you might do while at 
                    the park. With Tug of War being an interaction between 2 people, we decided to go with it. While that is 
                    how we came up with the main idea for the game the background gradient is something we took from another 
                    game we were planning to create. Finally the bar is something we came up with while talking to our TA as 
                    we decided to add more layers to the way users interact with the buttons.
                    </p>
                    <p className='py-6'>
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
                        <div>
                            <img src={image1} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This is a memory game in which the
                                user will be prompted to remember the order the shapes are
                                presented. From there they will then be asked to click the 
                                shapes in the original order.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image2} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This is a multiplayer tug of war game, in which users will
                                click the hands on their side, in order to pull the rope
                                towards them so that they can win.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image3} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This is a colouring app where users will press objects(buttons)
                                in order to colour them in.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image4} className="sliderimg"/>
                            <figcaption className='py-6'>
                                In this simulator the user must keep the plant alive and make it
                                grow to it's full size by clicking the cloud to give it water and 
                                the sun to give it sunlight.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image5} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This is a campfire simulator in which the user must click the button
                                in order to keep the fire alive and survive through the different elements.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image6} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This is a multiplayer game in which the users will hold the device and click
                                the part of screen closer to them(clear button). The gradient will then get 
                                pushed towards the opponent as the user tries to win by covering the screen 
                                with their colour.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image7} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This is a dart game in which the user would click the dart and then flick it 
                                towards the board to hit it and gain points.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image8} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This game is a spinoff of the popular where's Waldo game. In this game the user
                                will have to look for Waldo from the croud and then click to guess where he is.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image9} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This game would be the app version of the "5 second rule" card game in which the 
                                user has to answer the given prompt within 5 seconds to get a point. They would 
                                then click stop once they get it right for them to get the point.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image10} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This is a virtual pet simulator in which the user will have to keep the pet alive
                                by giving it food and water while also making sure it has the right amount of energy.
                            </figcaption> 
                        </div>
                    </AliceCarousel>
                </div>

                <div className='pb-8'>
                    <p className='text-2xl py-6 font-bold'>Detailed Sketches:</p>
                    <p className='py-6'>
                        After we had chosen to move forward with the tug of war game, we decided 
                        to sketch in detail some of the different parts we wanted to be added to 
                        the game. These sketches included the various button designs versions we 
                        had gone through in order to pick our final ones. The pulsing button design 
                        we were thinking about, which pulsates and goes darker. The position of the 
                        button moving as you click it. Player scores being added onto the screen as 
                        users win games. A moving flag to help identify which way the rope is going. 
                        Integrating multi-touch features which allows the user to click multiple 
                        spots on the screen at once. A full screen button allowing the users to play 
                        the game in full screen. Adding a win screen when a player wins allowing them 
                        to see the score and restart the game. Making the background a gradient in 
                        order to add more depth while also allowing the user to see who’s winning. 
                        Lastly, a moving bar to allow the user to make a stronger pull while also 
                        adding a drawback if they hit it as the rope moves the other way.
                    </p>
                </div>

                <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <div>
                            <img src={image11} className="sliderimg"/>
                            <figcaption className='py-6'>
                                Our initial design was very simple just as a proof of concept, 
                                but it did not have the feel or the look of a tug of war game. 
                                We started by changing it to a hand emoji but it once again did 
                                not deliver the look of a tug of war game. We experimented with 
                                animating the hands to demonstrate pulling, as well as a button 
                                that moves. We had to scrap the animation due to technical challenges. 
                                We also scrapped the moving button idea since it felt gimmicky.
                            </figcaption>
                        </div>
                        <div>
                            <div>
                                <img src={image12} className="sliderimg"/>
                                <figcaption className='py-6'>
                                This feature was thought of by Navjot as we thought the game needed to have more depth than just spamming the button. This is why he thought of the idea to make the button become darker at times so the user has to time it in order to have a stronger pull.
                                </figcaption>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={image13} className="sliderimg"/>
                                <figcaption className='py-6'>
                                The moving button idea was suggested by Fysal after discussing how to make the interaction with the button more dynamic. Instead of the player interacting with a static fixed button the button would move around within a bounded space. The benefits of this implementation would be that players would be penalized for trying to mash the button without having to think. Alternatively, players would have to be paying attention to the button shifting position if they wanted to keep the lead. Failure to do so would result in wasted time clicking the previous button location. This system would reward attentive players who are both visually “connecting the dots” between their physical senses (touch) and visual senses (sight). Although this would add a layer of depth to the game space the issue is that since we transitioned from a button to a physical rope spread across the screen with two hand-shaped buttons constituting players holding a rope (hence the theme of tug-of-war). Therefore, having the button move and thus detach from the rope itself is jarring and breaks the logical take away of two players tugging on a rope. We ultimately decided to not incorporate this feature in our final design, even so, it gives a different perspective to the game that could be a feature in a variation of the tug of war concept. 
                                </figcaption>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={image14} className="sliderimg"/>
                                <figcaption className='py-6'>
                                The idea for a scoreboard was a collective idea we had early in the design process. We knew that any two player game should accommodate a competitive player base who are focused on the winning/losing aspect to the game. To deal with this we knew we had to have some way of keeping track of player score. This early concept sketch shows a corner scoreboard showing player 1 and 2 scores displayed in the user interface. As our game is intended to be played on a mobile device, we did not want to clutter the UI with a scoreboard. Instead, we ended up opting for a win screen that would be displayed after a round is complete.
                                </figcaption>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={image15} className="sliderimg"/>
                                <figcaption className='py-6'>
                                Our first iterations used a knot in the middle that would move towards the winning player. Later we learned that real tug of war actually uses a flag instead of a knot, so we decided to replace it with a flag for our final version.
                                </figcaption>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={image16} className="sliderimg"/>
                                <figcaption className='py-6'>
                                This was one of the most important functions that we had to implement. We needed our game to be multi-touch capable so the gameplay feels smooth. Before implementing this feature, we were discussing other ideas such as the pulsing button to make the game more turn based. 
                                </figcaption>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={image17} className="sliderimg"/>
                                <figcaption className='py-6'>
                                The game did not feel as immersive of as “game” like with a visible browser nav bar. So we collectively decided we would need to make our game fullscreen. We initially had a button to make the window fullscreen. But we felt that it looked terrible and cluttered the screen, so instead we implemented a feature where if you tap anywhere on the screen except the hands, it will make the window fullscreen. If it is already in fullscreen, then it will go back to windowed mode. 
                                </figcaption>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={image18} className="sliderimg"/>
                                <figcaption className='py-6'>
                                This is the game win screen, when a player wins they see this screen. We decided on this instead of a scorecard on the main game screen because the scorecard would clutter up the main game window. The rematch button allows the players to keep playing without resetting the score. The reset game button resets the scores and the game. 
                                </figcaption>
                            </div>
                        </div>
                        <div>
                            <img src={image19} className="sliderimg"/>
                            <figcaption className='py-1'>
                                The gradient idea was suggested by Andy because we thought the game felt very 
                                boring with a static grass background and a small moving knot. It is a red and 
                                blue gradient, the color of the winning player slowly starts taking over the 
                                screen. The closer a player is to winning, the more of the screen is taken up 
                                by their color. This served as a secondary feedback to the user and observers. 
                                It makes it very clear who is winning even to somewhat distant observers that 
                                cannot see the flag. We decided to get rid of the screen counter because the 
                                flag and gradient background felt it was enough to convey game state to players, 
                                and the score box would clutter the game screen. 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image20} className="sliderimg"/>
                            <figcaption className='py-1'>
                            The power bar idea was suggested by Harprabh after discussion with the TA and 
                            the prof about the feel and interaction of the game. We wanted to move away from 
                            two users just mashing the button as fast as possible and add more depth to the 
                            interaction while keeping the overall feel of the game the same. Our initial iteration 
                            had a bar with a small white section in the middle with a “slider” bar constantly 
                            moving up and down. If the user taps the button when the slider is on the white section, 
                            then that user gets a larger pull distance compared to tapping while the slider is in 
                            any other part of the bar. But this version did not change the interaction from two 
                            people mashing the keys since it was still the optimal strategy to win. Then we decided 
                            to add a black zone on either side of the white zone. This zone was created to “punish” 
                            the user for tapping the button if the slider was in the black area, instead giving the 
                            opponent a large pull distance toward their side. Tug of War is a little more complex 
                            than simply pulling as hard as possible. So game mechanics based on some rhythm and 
                            timing made sense. The black bar incentivises users to time their hits rather than 
                            button mash alone. Tug of War is still a game of strength so button mashing wasn’t 
                            eliminated entirely. The button mashing in the clear ends of the power bar simulates 
                            strenuous pulling during a real match, while the timing around the black/white bars 
                            simulates the timing and rhythm components of the game. We also decided to make the bonus 
                            points of landing in the white zone to be five times the normal points. This incentivizes 
                            players to take risks by focusing on the timing/rhythm aspect. They must now decide if 
                            they wish to play it safe by momentarily pausing as the small bar enters the punishment 
                            area or they can gamble and try to win very quickly by hitting the sweet spot in the white zone. 
                            </figcaption>
                        </div>

                    </AliceCarousel>
                </div>
                <div className="App py-40">
                    <h1>Tug of War Demo</h1>
                    <YoutubeEmbed embedId="2R2J6Jev4jY" />
                </div>

            </div>
        </div>
    );
};

export default TugofWar
