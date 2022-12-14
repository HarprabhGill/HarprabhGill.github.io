import React from 'react';
import WorkImg from '../assets/tug.png';
import OrigamiImg from '../assets/origami.png';
import TherapyImg from '../assets/arctic.png';
import PostureImg from '../assets/postureAlert.jpg';
import { Link } from 'react-scroll';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Tug of war */}
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Tug of War App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/FysalBeau/TugOfWar'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <Link to='tug' smooth={true} duration={500}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Details
                    </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Origami Unlock*/}
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${OrigamiImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Origami Unlock
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/HarprabhGill/Origami-Unlock'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <Link to='origami' smooth={true} duration={500}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Details
                    </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Pose Unlock */}
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${OrigamiImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Pose Unlock
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/FysalBeau/Pose-Unlock'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <Link to='pose' smooth={true} duration={500}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Details
                    </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Virtual Therapy*/}
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${TherapyImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Virtual Therapy
              </span>
              <div className='pt-8 text-center'>
                <a href='https://glitch.com/edit/#!/vr-therapist-cpsc581'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <Link to='therapy' smooth={true} duration={500}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Details
                    </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Posture Alert*/}
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${PostureImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Posture Alert
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/HarprabhGill/PostureAlert'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <Link to='posture' smooth={true} duration={500}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Details
                    </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;