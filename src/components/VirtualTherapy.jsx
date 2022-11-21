import React from 'react'
import '../index.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import YoutubeEmbed from "./YoutubeEmbed";
import image1 from '../assets/TherapyInitial/interview.jpg'
import image2 from '../assets/TherapyInitial/meeting.jpg'
import image3 from '../assets/TherapyInitial/sports.jpg'
import image4 from '../assets/TherapyInitial/charades.jpg'
import image5 from '../assets/TherapyInitial/designer.jpg'
import image6 from '../assets/TherapyInitial/form.jpg'
import image7 from '../assets/TherapyInitial/musicCharades.jpg'
import image8 from '../assets/TherapyInitial/cooking.jpg'
import image9 from '../assets/TherapyInitial/therapy.jpg'
import image10 from '../assets/TherapyInitial/jenga.jpg'
import image11 from '../assets/TherapyDetailed/character.jpg'
import image12 from '../assets/TherapyDetailed/home.jpg'
import image13 from '../assets/TherapyDetailed/forest1.jpg'
import image14 from '../assets/TherapyDetailed/forest2.jpg'
import image15 from '../assets/TherapyDetailed/winter1.jpg'
import image16 from '../assets/TherapyDetailed/winter2.jpg'
import image17 from '../assets/TherapyDetailed/office1.jpg'
import image18 from '../assets/TherapyDetailed/office2.jpg'
import image19 from '../assets/TherapyDetailed/beach1.jpg'
import image20 from '../assets/TherapyDetailed/beach2.jpg'


const VirtualTherapy = () => {
    return (
        <div name='therapy' className='w-full md:h-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Virtual Therapy
                    </p>
                    <p className='py-6 text-1xl font-bold text-gray-300'>
                        Authors: Harprabh Gill, Debprasad Mandal, Navjot Saran, Fysal Beauferris
                    </p>
                    <p className='py-6'> 
                    The project we chose to take on is Virtual Therapy. In this virtual app individual’s can talk to their therapist virtually. In order to do this they will need to join a room by first choosing a setting, and then send the room id to the therapist so that they can join. Once they do this the room will load in with the environment chosen and both users will be in the room itself. From there, voice proximity chat will be enabled once the users give permission to allow the program to access their microphone. Now, both the user and the therapist are free to talk and look around their surroundings in the comfort of their own home while also remaining anonymous.
                    </p>
                    <p className='py-6'>
                    We initially started by coming up with 10 ideas among ourselves and drawing our own implementations of it. After discussing amongst ourselves we came up with this idea while talking about activities you do with others that you may want to do from your home. With virtual therapy being a way for 2 people to communicate and collaborate online, we decided to go with it. It also meant that we were adding a whole new element to therapy as not only will you be able to do it from where you want to, but you will also be able to be more comfortable knowing you can be anonymous and the therapist can’t actually see you. While that is how we came up with the main idea for the program, we decided to add multiple settings from which the user can choose so that they can be even more comfortable by choosing a setting of their liking.
                    </p>
                    <p className='py-6'>
                    After coming up with my 10 ideas, I communicated with the group to decide which of our ideas to move forward with. Once we chose the Virtual Therapy app, I created the forest setting and figured out a way to create randomized rooms which users can only access with the room id, allowing multiple users to join with proximity chat. From there I also created a home page to put all our settings together and allow the user to load in the environment of their choosing. I also did a good amount of the documentation for this project as well.
                    </p>
                    <p className='text-2xl py-6 font-bold'>Initial Sketches:</p>
                    <p className='py-6'>
                    In order to decide how we can make users communicate and collaborate with each other we each had initially come up with 10 designs each. The ideas I came up with were a interview prep, vr meeting space, vr sports, charades, vr home designer, sports form help, music charades, vr cooking, vr therapy, and vr jenga. Out of all the ideas we came up with we eventually decided to go with the virtual therapy idea as it is an innovative way for individuals to talk to therapists while remaining in the comfort of their own home. This also allows users to remain anonymous so that they’re able to talk without worrying about people judging them.
                    </p>
                </div>

                <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
                    <AliceCarousel autoPlay infinite="true" autoPlayInterval="3000">
                        <div>
                            <img src={image1} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This idea is for users to communicate online in order to practice interviews. 
                                Individual's who are practicing taking interviews will be matched with companies
                                practicing giving interviews in order to help each other out.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image2} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This is virtual meeting space where users can actually see and interact with people
                                rather than just calling them.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image3} className="sliderimg"/>
                            <figcaption className='py-6'>
                                In this program users can interact and play sports together in virtual reality which
                                not only allows people to play from different parts of the world, but also allows them
                                to play without actually getting gear.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image4} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This program follows the game charades in which users will be able to play it together
                                online by posing infront of a camera, while other users guess.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image5} className="sliderimg"/>
                            <figcaption className='py-6'>
                                Users can collaborate with each other in this program to design and furnish spaces in 
                                virtual reality.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image6} className="sliderimg"/>
                            <figcaption className='py-6'>
                                A lot of people play sports and are constanly wanting to get better but don't want to 
                                spend a lot of money getting coaching. This program solves that by looking at the users 
                                form for the specific activity and then provides suggestions.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image7} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This program follows the game charades but with a musical twist in which users will be able to play it 
                                together online by singing into the device's microphone, while other users guess.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image8} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This program allows users to test out new recipes by making food and then tracking the 
                                nutrients within them, while also seeing how it looks in virtual reality.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image9} className="sliderimg"/>
                            <figcaption className='py-6'>
                                After coming up with many ideas for this project we ended up going with the Virtual 
                                Therapy idea which is shown in this sketch. This idea allows both a client and a therapist
                                to communicate with each other in virtual reality.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image10} className="sliderimg"/>
                            <figcaption className='py-6'>
                                This program allows users to collaborate together to play the popular game Jenga in virtual
                                reality.
                            </figcaption> 
                        </div>
                    </AliceCarousel>
                </div>

                <div className='pb-8'>
                    <p className='text-2xl py-6 font-bold'>Detailed Sketches:</p>
                    <p className='py-6'>
                    As we shifted our focus to VR Therapy, we came up with 10 detailed sketches to develop the idea. Since part of the theme was supposed to be communication, we instantly started thinking about the appearances of patients and therapists during the session. We decided to go with the simple blue spheres with eyeballs since they are easy to see from far away and work well for anonymity. It’s a pretty cool project so we were excited to make our own scene each for patients to select from for their VR Therapy experience. These scenes include: Forest, Winter, Office and Beach. 
                    </p>
                </div>

                <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
                    <AliceCarousel autoPlay infinite="true" autoPlayInterval="3000">
                        <div>
                            <img src={image11} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            After implementing multiple users entering the therapy scene, we had to make one of the most important decisions as to how to represent the user/therapist. We narrowed the options down to three options. The first option was to include floating headsets that would be positioned at the same height as the camera view of the character. However, we ultimately decided against this option as after implementing it, the headsets were somewhat difficult to see, especially on levels/portions of the various scenes with darker lighting. The second option we discussed was a full character/avatar model that could be customized by the users entering a scene. Again, we ultimately decided against this design as programming non-static models that would move their legs/hands was deemed “out-of-scope” as it would require substantial time and resources to create. The final option which we opted to use was a head model that would also be positioned at eye-level of the user's in-scene camera perspective. This option seemed the best as the head model was clearly visible whilst remaining reasonable to implement.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image12} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            This is the main menu in which the user can pick a setting that they want to surround themselves in and will be put in a room with it.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image13} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            One of the settings we wanted to create was a forest scene. Within our forest environment we wanted to create a scene representing a campsite as we believed that it's common for people to go camping to relax and get away from the hustle and bustle of city life! We added an animated dog because who doesn't love dogs? Aswell as deers eating in the background because what's cuter than that. This sketch depicts the possible perspective of the person who is seeking therapy sitting on the bench surrounded by the forest environment.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image14} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            This is a sketch of the potential opposite perspective of the person giving therapy sitting on the bench surrounded by the forest environment.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image15} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            We acknowledged that we needed to create settings that would be distinct and unique from each other and that for some people, their happy place is a bleak and quiet setting. We believed it could be represented by a rural winter scene. This scene is vast and empty, there's no life and civilization for kilometers and this is the ultimate form of privacy that could allow some people the opportunity to express themselves in a way that they wouldn't do otherwise. This sketch is from the potential perspective of either the therapist or the person seeking therapy. There is the option to move around the snow, stare off into the blank winter or sit on the bench. 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image16} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            This is an alternative perspective of the winter setting, specifically drawn to emphasize the potential bleak and vast scene we are trying to create for the client.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image17} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            Although the beauty of virtual reality is the ability to create environments either imaginary or impractical to create/reach, we do understand that there is already a large population of people that have already participated in traditional therapy. This traditional therapy usually takes place in an office environment, and since this is a common place for therapy, this could be the safe space needed for a large majority of users to feel comfortable enough to talk things out. Therefore, we had to include a traditional office environment. This sketch depicts a traditional office, stylized in vintage furniture.The sketch shows the perspective of the person giving therapy sitting on a leather chair, facing towards a couch where the client would sit. 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image18} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            This sketch depicts an alternative perspective of the person who is seeking therapy sitting on the leather sofa, facing the therapist, surrounded by various items which would be in a typical office.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image19} className="sliderimg"/>
                            <figcaption className='py-6'>
                            As mentioned previously, we had to consider that there would be a vast variety of individuals seeking therapy with different “Happy Places”. While some people need privacy to feel comfortable to express themselves, some people are the complete opposite. For some people an office isn't somewhere they feel happy at, maybe they have worked a full time office job for years and that is the source of their stress and anxiety and they just want to get away from that. Since we already created a winter theme and a vegetation heavy forest environment we thought that for our fourth and final setting what better than to have a beach scene! What better place to kick back, relax and get a tan, throw a volleyball or build a sandcastle. This sketch depicts this potential beach environment with a palm tree and bench to relax on. 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image20} className="sliderimg"/>
                            <figcaption className='py-6'>
                            This sketch depicts an alternative perspective of the beach, showing how the beach would look from a different angle. This sketch serves to present the vastness of the beach, as a small beach might feel claustrophobic. 
                            </figcaption>
                        </div>
                    </AliceCarousel>
                </div>
                <div className="App py-40">
                    <h1>Virtual Therapy Storyboard</h1>
                    <YoutubeEmbed embedId="MUiNdChiDOQ" />
                </div>
                <div className="App py-40">
                    <h1>Virtual Therapy Demo</h1>
                    <YoutubeEmbed embedId="MUiNdChiDOQ" />
                </div>

            </div>
        </div>
    );
};

export default VirtualTherapy
