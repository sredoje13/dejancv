import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useContext,useRef } from "react"
import { CartContext } from "../../store/context"
const Body = () => {
    const {scroll,setscroll}=useContext(CartContext)
    const ref=useRef()
    
 if(scroll==="toaboutme"){
  ref.current.scrollIntoView({behavior: 'smooth'});
  setscroll("")
 }
 
    useEffect(()=>{
Aos.init()
    },[])
    return (
        <div ref={ref} className='body'>
           <div data-aos="fade-right" 
           data-aos-duration="400"
           data-aos-easing="ease"
           className='div1 divbody'>
            My name is Dejan Jovanovic. I was born on August 31, 1991, in Nis. I graduated from the Military Academy, specialty Missile Systems. I am currently working at the Batajnica military airbase on the missile system, as the commander of the missile guidance platoon. My duty is the maintenance and use of the missile system, as well as the training of young officers and soldiers. </div>
           <div data-aos="fade-right" 
           data-aos-easing="ease"
           data-aos-duration="400"
           data-aos-delay="400"
           className='div2 divbody'>
         In addition to the work I am currently doing, I have successfully mastered the topic related to software testing. I enjoy working in a team and inspiring others to reach their full potential. I am open-minded and want to gain new experiences and meet new people. I am confident in myself and respect others. 

           </div>
           <div data-aos="fade-right"
           data-aos-easing="ease"
           data-aos-duration="400"
           data-aos-delay="800"
           className='div3 divbody'>
             I am excellent in working with people and well organized, effective in making decisions and I function well in difficult situations. I am always open to new challenges and am currently looking for a suitable position in a company that is looking for individuals who want to progress, learn and contribute to the development of the company.
           </div>
        </div>
    );
};

export default Body;