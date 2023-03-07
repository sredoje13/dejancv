import React, { useEffect } from 'react';
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineLeft} from 'react-icons/ai'
import Image from 'next/image';
import {GoPrimitiveDot} from 'react-icons/go'
import { useState,useContext } from 'react';
import { useRef } from 'react';
import { CartContext } from '../../store/context';
import Myskills from './Myskills';
function Pictures(props) {
    const {scroll,setscroll,  onchange,setchange}=useContext(CartContext)
    const ref=useRef()
    
 if(scroll==="tomyskills"){
  ref.current.scrollIntoView({behavior: 'smooth', top: ref.current.offsetTop});
  setscroll("")
 }
   const[index,setindex]=useState(0)
   
   useEffect(() => {
    const interval = setInterval(() => {
     
     setchange("oneimage")

    }, 600);
    return () => clearInterval(interval);
  },[setchange]); 
   
    const images=[props.image1, props.image2,props.image3, props.image4]

    const rightimage=()=>{
  
   if(index===images.length-1){
    setindex(3)

   }
   else{
   setindex((prevval)=>prevval+1)
  setchange("oneimage change2")
 
   }

    }
    const leftimage=()=>{
 if(index===0){
   }
   else{
 setindex((prevval)=>prevval-1)
setchange("oneimage change")

   }
  
    }
  const clickondot=(i)=>{
    setchange("oneimage change")
    setindex(i.id)
    }

  const dots=[{id:0},{id:1},{id:2},{id:3}]
    const alldots=dots.map((item)=>
    <GoPrimitiveDot className='dot' onClick={()=>clickondot(item)} key={item.id}/>
    )
   let disableleft;
   if(index===0){
    disableleft===true
   }
   else {disableleft=false}
   console.log(disableleft)
    return (
        <div ref={ref} className='pictures'>
          <Myskills/>
        <div className='imagediv'>
          <button className='arrows' disabled={index===0} onClick={leftimage}> <AiOutlineLeft  /> </button>
       
        <div className="image-slider">
        <Image className={onchange} width="600" height="600" alt="slika"
        src={images[index]}/>
          
        </div>
        <button className='arrows' disabled={index===images.length-1} onClick={rightimage}><AiOutlineRight  /> 
</button>
        </div>
        <div className='alldots'>{alldots}</div>
        </div>
    );
}

export default Pictures;