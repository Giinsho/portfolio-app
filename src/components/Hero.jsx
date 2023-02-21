import React from 'react';
import styles from '../style';
import { check, robot } from '../assets';
import GetStarted from './GetStarted';
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={check} alt="check" className="w-[32px] h-[32px] " />
          <p className={`${styles.paragraph} ml-2`}> 
            <span className='text-white 20'>Bledner, ZBrush</span> enjoyer with {" "}
            <span className='text-white 20'>Several</span> projects
          </p>
          
          
        </div>

        <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={check} alt="check" className="w-[32px] h-[32px] " />
          <p className={`${styles.paragraph} ml-2`}> 
            <span className='text-white 20'>Unity</span> and  {" "}
            <span className='text-white 20'>Unreal</span> {" "}
             projects <span className='text-white 20'>creator</span>
          </p>
          
          
        </div>

        <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={check} alt="check" className="w-[32px] h-[32px] " />
          <p className={`${styles.paragraph} ml-2`}> 
            <span className='text-white 20'>React, Firebase, Ionic, .Net </span> developer with {" "}
            <span className='text-white 20'>nicely done web applications</span> {" "}
          </p>
        </div>

        <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={check} alt="check" className="w-[32px] h-[32px] " />
          <p className={`${styles.paragraph} ml-2`}> 
            <span className='text-white 20'>Kotlin, Flutter, Java, Python</span> with {" "}
            <span className='text-white 20'>basic knowledge</span> {" "}
          </p>
        </div>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white 
          ss:leading-[100px] leading-[75px] ">
            Trustworthy <br className="sm:block hidden" /> {" "}
            <span className="text-gradient">Developer</span> {" "}
            
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>
        </div>

       <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white 
          ss:leading-[100px] leading-[75px] w-full">
            At young age.
        </h1>
        <p class={` ${styles.paragraph} max-w-[470px] mt-5`}>
          Ambitious, heatedly,  most likely to fit your needs.
          Looking for a team and job which will allow me to
          get experience and push my passions
          to the limit.</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero