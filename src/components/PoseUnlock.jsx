import React from 'react'
import '../index.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import YoutubeEmbed from "./YoutubeEmbed";
import image1 from '../assets/PoseInitial/finger.jpg'
import image2 from '../assets/PoseInitial/hand.jpg'
import image3 from '../assets/PoseInitial/maze.jpg'
import image4 from '../assets/PoseInitial/padlock.jpg'
import image5 from '../assets/PoseInitial/rubics.jpg'
import image6 from '../assets/PoseInitial/song.jpg'
import image7 from '../assets/PoseInitial/thumb.jpg'
import image8 from '../assets/PoseInitial/vocal.jpg'
import image9 from '../assets/PoseInitial/word.jpg'
import image10 from '../assets/PoseInitial/yoga.jpg'
import image11 from '../assets/PoseDetailed/pose1.png'
import image12 from '../assets/PoseDetailed/pose2.png'
import image13 from '../assets/PoseDetailed/pose3.png'
import image14 from '../assets/PoseDetailed/pose4.png'
import image15 from '../assets/PoseDetailed/pose5.png'
import image16 from '../assets/PoseDetailed/pose6.png'
import image17 from '../assets/PoseDetailed/pose7.png'
import image18 from '../assets/PoseDetailed/pose8.png'
import image19 from '../assets/PoseDetailed/pose9.png'
import image20 from '../assets/PoseDetailed/pose10.png'


const PoseUnlock = () => {
    return (
        <div name='pose' className='w-full md:h-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Pose Unlock
                    </p>
                    <p className='py-6 text-1xl font-bold text-gray-300'>
                        Authors: Harprabh Gill, Debprasad Mandal, Navjot Saran, Fysal Beauferris
                    </p>
                    <p className='py-6'> 
                    The idea for this project was to use the teachable machine shown in lecture to train a model using our whole bodies as letters. Swiping up begins the unlock session. A letter is determined by the orientation of the user's whole body. A letter is entered into the password bar every time the timer reaches 0. Users are initially given 20 seconds to get ready in front of the camera. Each countdown after that gives the user 10 seconds to hold their pose for their intended letter. A delete button allows the user to delete the last letter entry. Correct password entries unlock the phone, while incorrect entries result in an error message and restart the sessio
                    </p>
                    <p className='py-6'>
                    After seeing many teachable machine examples we decided to design something using a camera as the sensor. We came up with several ideas like yoga pose sequences or dance, but the body poses as letters idea won over. We chose it because it's easier to track the sequence of poses entered if that data is represented by letters instead of yoga pose names or dance move names. With our design, users can delete past letter entries if they were unintentionally registered. A phone can be secure if a user wants or needs it, as long as they hide before entering their password and make a good one.
                    </p>
                    <p className='py-6'>
                    This design is secure as long as the user unlocks their phone in total privacy. That is a major limitation because the user has to display their whole body in their phones camera. This means they must be far enough away and have to make movements that attract attention. It is otherwise as secure as any simple text based password interface, because the data we trained the machine with translates to letters. Users must also sort of memorize specific body orientations for letters. They may not always be the most intuitive since we trained the machine with our own specific models instead of every user. A potential fix to that issue is to allow users to train their own models for every letter.
                    </p>
                    <p className='py-6'>
                    For this variant of our unlock system, I helped with the initial designing process in which I made 10 different designs that we could choose from. From there I helped the team learn how machine learning works by testing it with still images and poses. I then also made shapes with my body to help the machine learn different letters. From there I also helped do some problem solving for somethings that weren't working initially.
                    </p>
                    <p className='text-2xl py-6 font-bold'>Initial Sketches:</p>
                    <p className='py-6'>
                    While deciding on how we should design our machine learning unlock system. We had initially come up with 10 designs that detect, fingerprints, hand signs, rotations for a maze, rotations for a padlock, rubik’s cube pattern, audio for a line from a song, pointed direction sequence, audio for hitting a note, audio for detecting note, and poses made for letters. Out of all these ideas we eventually picked the pose unlock as it is unique since it uses the users whole body, while also having really good security as the user must know the password and how to make the letters to unlock it. 
                    </p>
                </div>

                <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
                    <AliceCarousel autoPlay infinite="true" autoPlayInterval="3000">
                        <div>
                            <img src={image1} className="sliderimg"/>
                            <figcaption className='py-6'>
                                To unlock the phone the user will put their finger up to the camera and the
                                fingerprint will be read by the program and if it matches the set one, the phone
                                will unlock.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image2} className="sliderimg"/>
                            <figcaption className='py-6'>
                                The user will put up a hand sign up to the camera and if it matches the set one,
                                the phone will unlock.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image3} className="sliderimg"/>
                            <figcaption className='py-6'>
                                In this maze themed puzzle, the user will rotate their device to make the icon move
                                around and if they find the end with their icon, the phone will unlock.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image4} className="sliderimg"/>
                            <figcaption className='py-6'>
                                In this unlock, the user will rotate their device as they try to input a code like they
                                would to open a padlock and then the device will unlock if the correct password is given.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image5} className="sliderimg"/>
                            <figcaption className='py-6'>
                                For this unlock the user must arrange a rubiks cube in a specific way and put it up to the camera 
                                to unlock the device.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image6} className="sliderimg"/>
                            <figcaption className='py-6'>
                                To unlock the device the user must sing their favourite line from a song and if they get it correct
                                the phone will unlock.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image7} className="sliderimg"/>
                            <figcaption className='py-6'>
                                To unlock the device the user must point in a sequence of directions and the phone will unlock
                                if they did it in the correct sequence.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image8} className="sliderimg"/>
                            <figcaption className='py-6'>
                                For this audio based unlock the user must hit the notes set as the password to unlock the device.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image9} className="sliderimg"/>
                            <figcaption className='py-6'>
                                The user must verbally answer the prompts by saying each answer so that it matches the ones that are set.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image10} className="sliderimg"/>
                            <figcaption className='py-6'>
                                In this unlock the user will have to make poses that look like letters in order to make the word that is set
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
                            We came up with many pose type unlock methods and chose posing letters because it made classification easy. By swiping the screen upward, the unlock process begins. This avoids accidental unlocks. It serves as the homescreen where the user can receive notifications and check the time as they normally can.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image12} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            We decided we needed a button to record between each pose scan. We decided on a timer that counts down in a loop instead, for user convenience. 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image13} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            With a timer, the user could stay in one spot and enter the whole password. Instead of going back and forth between each letter to press a button.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image14} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            The user has an x amount of seconds to pose the correct letter. When the timer hits 0, the current pose made by the user is registered.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image15} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            Incorrect password entry with a try again button. We decided to go with an automatic reset after the password bar turns red instead, because a try again button makes it more like a game. The automatic reset is more alike password entry so it is good for a phone unlock design that uses letters.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image16} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            We also decided not to go with an input method that gives feedback on every entry. This is less secure than what we changed it to - users inputting the whole password before hitting enter for the password.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image17} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            Each letter being added in after the timer reaches 0. 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image18} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            We decided 10 seconds is a good enough time for users to pose for each letter scan. Not so long that password entry takes too long and not so so quick that users struggle to pose in time.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image19} className="sliderimg"/>
                            <figcaption className='py-1'>
                            Instead of this, we went with the full password entry, then hit enter design. 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image20} className="sliderimg"/>
                            <figcaption className='py-1'>
                            This was the general idea; to pose the correct sequence of letters, then hit enter to unlock the phone. This is secure from being opened accidentally.
                            </figcaption>
                        </div>
                    </AliceCarousel>
                </div>
                <div className="App py-40">
                    <h1>Pose Unlock Demo</h1>
                    <YoutubeEmbed embedId="MUiNdChiDOQ" />
                </div>

            </div>
        </div>
    );
};

export default PoseUnlock
