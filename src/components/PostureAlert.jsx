import React from 'react'
import '../index.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import YoutubeEmbed from "./YoutubeEmbed";
import image1 from '../assets/PostureInitial/waterPump.jpg'
import image2 from '../assets/PostureInitial/sunAlarm.jpg'
import image3 from '../assets/PostureInitial/tempFan.jpg'
import image4 from '../assets/PostureInitial/motionAlarm.jpg'
import image5 from '../assets/PostureInitial/solarLight.jpg'
import image6 from '../assets/PostureInitial/waterLevel.jpg'
import image7 from '../assets/PostureInitial/doorAlarm.jpg'
import image8 from '../assets/PostureInitial/solarBlind.jpg'
import image9 from '../assets/PostureInitial/motionLight.jpg'
import image10 from '../assets/PostureInitial/chargerAlarm.jpg'
import image11 from '../assets/PostureDetailed/detail1.png'
import image12 from '../assets/PostureDetailed/detail2.png'
import image13 from '../assets/PostureDetailed/detail3.png'
import image14 from '../assets/PostureDetailed/detail4.png'
import image15 from '../assets/PostureDetailed/detail5.png'
import image16 from '../assets/PostureDetailed/detail6.png'
import image17 from '../assets/PostureDetailed/detail7.png'
import image18 from '../assets/PostureDetailed/detail8.png'
import image19 from '../assets/PostureDetailed/detail9.png'
import image20 from '../assets/PostureDetailed/detail10.png'


const PostureAlert = () => {
    return (
        <div name='posture' className='w-full md:h-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Posture Alert
                    </p>
                    <p className='py-6 text-1xl font-bold text-gray-300'>
                        Authors: Harprabh Gill, Debprasad Mandal, Navjot Saran, Fysal Beauferris
                    </p>
                    <p className='py-6'> 
                    As the technology around us advances, the more the world we live in is evolving. Work, education, entertainment, and essentially everything we interact with is now shifting online. These shifts are leading to human beings living in a much more sedentary life style weakening their core and leading to bad posture. This bad posture can lead to many problems such as back pain and spinal dysfunction. Which is why the project we chose to take on is Posture Alert. This is a device that you can attach to your chair which you spend the most amount of time on. Once attached the sensors on the device will identify if you are slouching. If you are slouching or have bad posture the device will make noise to alert you to straighten your posture.
                    </p>
                    <p className='py-6'>
                    We initially started by coming up with 10 ideas amongst ourselves and drawing our own implementations of it. Among them one of the ideas brought up was Posture Alert. This was because we were all slouching while drawing our other ideas when we noticed all of our postures were bad. While realizing this is a problem most people face on a daily basis we had drawn sketches of it as part of our initial sketches. When choosing which idea to move forward with from all of our initial ideas, we chose to go ahead with Posture Alert as we felt this is something we related to the most which can actually make an impact for us on a daily basis.
                    </p>
                    <p className='py-6'>
                    I created many initial ideas from which we used to come up with more ideas. I then communicated and setup meetings for our group and made sure everyone was on the same page while also making sure we start on time. Once we knew which project we wanted to move forward with, I helped plan how it would be implemented. From there I also did most of the documentation.
                    </p>
                    <p className='text-2xl py-6 font-bold'>Initial Sketches:</p>
                    <p className='py-6'>
                    In order to decide how we can make a device that people can use on a daily basis, which can enhance their lifestyle we each had initially come up with 10 designs each. The ideas I came up with were water pump, sunlight alarm, heat sensing fan, motion detection alarm, solar light, water level alarm, fridge door alarm, light sensing blinds, motion detecting lamp, and a macbook charger alarm. Out of all the ideas presented by each member we ended up choosing the posture alert idea  presented by another group member which was essentially an advanced version of the motion detection alarm.
                    </p>
                </div>

                <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
                    <AliceCarousel autoPlay infinite="true" autoPlayInterval="3000">
                        <div>
                            <img src={image1} className="sliderimg"/>
                            <figcaption className='py-6'>
                                Water Pump: The system is within a box which holds a hose and a motor with 2 blockage extensions. One side of the pipe should be put into the water while the other side is where the water should go. From there the motor spins and pushes the water from one side to the other.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image2} className="sliderimg"/>
                            <figcaption className='py-6'>
                                Sunlight Alarm: This device senses light using a light sensor and once it reaches a certain amount set by the user, it will then sound an alarm to wake the user up.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image3} className="sliderimg"/>
                            <figcaption className='py-6'>
                                Heat Sensing Fan: Using a temperature sensor, this device would detect the temperature of it’s surroundings. If the sensor reaches the temperature set by the user then it will automatically start the fan.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image4} className="sliderimg"/>
                            <figcaption className='py-6'>
                                Motion Detection Alarm: Using an ultrasonic sensor to check if their is an individual in proximity, whenever an individual got close to the device the alarm would then sound. For the Posture Alert device we ended up proceeding with, it was setup similar to this to alert when it detected incorrect posture from the user.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image5} className="sliderimg"/>
                            <figcaption className='py-6'>
                                Solar Light: For this device it would use a light sensor to detect if there was light out. If it was dark then the light would turn on automatically but if there was light it would turn off.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image6} className="sliderimg"/>
                            <figcaption className='py-6'>
                                Water Level Alarm: Using sensing probes this device would detect the water levels of the area it’s placed in. If it detected water it would then sound an alarm to let users know that there may be flooding.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image7} className="sliderimg"/>
                            <figcaption className='py-6'>
                                Fridge Door Alarm: This device would use ultrasonic sensors to check if the fridge door is beneath it. If it doesn’t detect the door it will then sound an alarm to let users know to close the door. 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image8} className="sliderimg"/>
                            <figcaption className='py-6'>
                                Light Sensing Blinds: Once the light sensor detects light this device will open the blinds automatically using a motor. However, when it detects no light then it will close the blinds.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image9} className="sliderimg"/>
                            <figcaption className='py-6'>
                                Motion Detection Lamp: This device detects if there is anyone within close proximity using an ultrasonic sensor. If it detects that there is someone closeby it will automatically turn on the light and then turn it off once they leave.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image10} className="sliderimg"/>
                            <figcaption className='py-6'>
                                Macbook Charger Alarm: Based off of macbook chargers that light up if they are fully charged, this device will detect the light and let the user know that their device is fully charged.
                            </figcaption> 
                        </div>
                    </AliceCarousel>
                </div>

                <div className='pb-8'>
                    <p className='text-2xl py-6 font-bold'>Detailed Sketches:</p>
                    <p className='py-6'>
                        As we shifted our focus to Posture Alert, we came up with 10 detailed sketches to develop ideas for the design. With there being many different techniques of improper posture, we started to sketch ways people may sit that would be improper. From there we sketched different places the sensors could be positioned to get the best readings while also not effecting the user. Different ways to notify the user of improper posture were then sketched along with different types of sensors that may help check posture, whether that is pressure, ultrasonic or others.
                    </p>
                </div>

                <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
                    <AliceCarousel autoPlay infinite="true" autoPlayInterval="3000">
                        <div>
                            <img src={image11} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            To start off our detailed sketches, we wanted to create a sketch that most clearly describes what Posture Alert does. This sketch is the product of that discussion and provides a simplistic visual explanation of what the product we are designing should do. This image speaks a thousand words and could be shown to potential investors across the world, regardless of language barriers! 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image12} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            Before we could properly design a device that could recognize bad posture we have to first decide what dictates bad posture. After extensive research we came to the conclusion that good posture requires a persons spine to be as straight as possible. In contrast we experimented with various common seating positions that did not facilitate a persons spine to be straight and this image below shows these different bad sitting positions.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image13} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            To create our device, we decided that the best hardware at our disposal would be a use of multiple ultrasonic sensors. Ultrasonic sensors work by emitting sound waves at a frequency too high for humans to hear. They then wait for the sound to be reflected back, calculating distance based on the time required. After experimenting with various positions and amount of ultrasonic sensors needed to accomplish our goal we landed on a design that best represented version 3. In terms of version 1, out of the various issues with it the major one was that the bottom ultrasonic sensor is positioned in a spot that would be uncomfortable and would end up resulting in bad posture as the device would be pressing into the back of the person sitting. In terms of version 2, and version 4 the same problem with the bottom ultrasonic sensor being in an uncomfortable spot is why we ultimately did not go with these designs, as-well as that, we found out that we could achieve accurate results with 2 ultrasonic sensors and the 3rd sensor would be unnecessary given its improvements to accuracy. In other words, the cost increases of adding a third sensor did not justify the increase in accuracy.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image14} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            After deciding on the general rig design we first created a solid structure to hold our ultrasonic sensors in position as shown in version 1 of the image below. This version was made of popsicle sticks. Although this version is cheap to create and sturdy, it suffered from the issue of not being adjustable. In a good design we should be able to accommodate persons of different height, because of the person is too short or too tall the ultrasonic sensors will not register bad posture correctly. Another design we created was version 4 which used an adjustable rod that could be extended based on a persons height. Although version 4 does somewhat solve this issue we realized that we could create a cheaper solution that incorporated both popsicle sticks and pipe cleaners that could be bent to change the angle of the ultrasonic sensors. Version 3 below shows this final version we decided upon which was a-lot cheaper and lighter to create whilst still solving the issue of needing an adjustable rig! 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image15} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            When deciding upon which type of notifier to use we had to consider that there would be different types of users using this product in different settings. The first type of notifier would be a speaker. This would be the loudest of the 3 different options, the pros of this option is that it would be loud therefore the user would easily know when their posture is bad, however a con of this implementation is that because its loud it might not be appropriate in a public setting, for example in a quiet office setting or a library. The second option is to use a buzzer, this would be less obnoxious which would mean that it would be more appropriate in a public setting, however the con of this type of notifier is that the user might not here it if they are wearing headphones or if they are in a loud public setting with a-lot of noise interference. The last type of notifier we thought of is a simple light. The pro of this implementation is that it is subtle while hard to miss if placed in a good spot (like under the persons monitor) however the con of this implementation is that it required excessive wiring and this is very costly, time-consuming and is visually alot uglier than the other notifiers. We ultimately chose to use a speaker as it seemed to be the middle ground device. Considering this, we would definitely market this device to individuals using it in a private setting like a single office room or a home office. If we would like to branch into different avenues of consumers than we would have to reconsider our choice.
                            </figcaption>
                        </div>
                        <div>
                            <img src={image16} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            In early discussion of how we could improve on our initial bad posture idea, we started considering other forms of bad health practices people partake in while sitting. One that stood out is when people sit for too long. Its advised by various medical sources that you should take a break from sitting every 30 minutes and therefore we needed to come up with a method to deal with this. With our given resources we thought that using a force/pressure sensor available in our Arduino kit would do the trick, however after numerous testing we came to the conclusion that to get a accurate reading on whether or not someone was sitting in a chair based on a pressure sensor located on the base of the chair that unless we exerted a-lot of pressure (upmost of pressing a finger hard into the force/pressure sensor!) that it would not register. Therefore these sensors would not be appropriate for our implementation. Despite this, this idea would be carried into our final implementation in terms of a timer implemented with the use of our ultrasonic sensor. Thus, this idea was not a dead end and these sketches serve as important steps in getting to our final design!
                            </figcaption>
                        </div>
                        <div>
                            <img src={image17} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            After we implemented all our relevant sensors and created a functional product we ended up with a product with wiring and breadboard/Arduino placement similar to that depicted in the left image below. This was quite confusing and messy so we needed to find a way to manage all the wires, and what better way to do this then to sketch out a potential design for the finished product! A potential final product with wire management can be shown in the right image below. 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image18} className="sliderimg"/>
                            <figcaption className='py-6'>                   
                            In this image we can see the function of both ultrasonic sensors. The top ultrasonic sensor is responsible for checking if the users posture is correct or bad. The bottom ultrasonic sensor detects if the user is sitting there or not. This bottom sensor could be replaced with a capacity sensor, button that initiates a countdown timer or pressure sensor (as described in one of the earlier sketches above). The original idea was to have the bottom ultrasonic sensor to the side of the user, clipping to the side of the seat, but we changed the design to have both sensors on a single rig.
                            As mentioned already we tried other sensors and they either weren’t responsive enough like the pressure sensor or were inconvenient to use like the button countdown timer. 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image19} className="sliderimg"/>
                            <figcaption className='py-6'>
                            This image depicts our button position ideas. By pressing the calibration button it makes both the ultrasonic sensors take another reading if the user wants to change their seating position. Given the purpose of the button, one could argue that it is something that might be pressed once in a while if the chair is privately owned by one user. Therefore in our final design we opted to attach the button to the box attached to the back of the chair as shown in the leftmost image below. We also considered other options such as if the chair was in a public space where different users of various heights would be using the device, therefore in this case we would want to locate the button in a more accessible area such as on the side of the chair arm as shown in the middle and right image below. We also considered that some people are left and right hand dominant thus we created two versions for left or right handed individuals. 
                            </figcaption>
                        </div>
                        <div>
                            <img src={image20} className="sliderimg"/>
                            <figcaption className='py-6'>
                            In terms of placement of the Arduino and necessary attachments (button, breadboard, speaker and wiring), we narrowed down where we could place it to 3 possible places. On the back of the chair, on the bottom of the chair and completely separate from the chair such as on a desk as shown in the image below. The problem with the bottom of the chair is that because it is farther from the ultrasonic sensors and rig that we would require more wiring to get it to work, although this design would be a-lot prettier as the device would be hidden, it would be more costly. In addition since its on the bottom of the chair, we would then have to move the calibration button from the bottom as it would be inconvenient and move the speaker because it would hard to hear if the sound if coming from underneath the chair itself. In a similar vain, having the device on a desk would require even more wire management which would be a-lot less aesthetically appealing and be a-lot more costly. We opted for the final option of having the device on the back of the chair as it would require less wiring, would have a more accessible calibration button and the speaker would be able to channel the noise into the open space, making it easier for the user to hear when they are being notified of bad posture. 
                            </figcaption>
                        </div>
                    </AliceCarousel>
                </div>
                <div className="App py-40">
                    <h1>Posture Alert Storyboard</h1>
                    <YoutubeEmbed embedId="UUlc9Cae1RA" />
                </div>
                <div className="App py-40">
                    <h1>Posture Alert Demo</h1>
                    <YoutubeEmbed embedId="5xFqm6QPP1I" />
                </div>

            </div>
        </div>
    );
};

export default PostureAlert
