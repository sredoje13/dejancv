import React from 'react';
import  { useRef ,useState} from 'react';
import emailjs from '@emailjs/browser';
import {AiFillLinkedin, AiFillInstagram,AiOutlineMail} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { useContext } from 'react';
import { CartContext } from '../../store/context';
import Link from 'next/link';
import toast, { Toaster} from 'react-hot-toast';

function Footer(props) {
    const {scroll, setscroll}=useContext(CartContext)
    
    
    
    const [message,setmessage]=useState("")
    const[name,setname]=useState("")
   const form=useRef()
   if(scroll==="tocontact"){
    form.current.scrollIntoView({behavior: 'smooth', top: form.current.offsetTop});
    setscroll("")
   }
    const changemail=(e)=>{
    setmessage(e.target.value)
    }
    const changename=(e)=>{
        setname(e.target.value)
    }
  const sendEmail = (e) => {
    e.preventDefault();
    
       if(name.trim()!==""&&message.trim()!==""&&name.includes("@")) {
        emailjs.sendForm('service_ghr3z7e', 'template_pnmkpgk', e.target, 'SBDeuygNiZL1vlEjM')
        .then((result) => {

            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
        e.target.reset()
        toast.success("Uspesno ste poslali poruku!")
       }
       else if(name.trim()===""||message.trim()===""){
        toast.error("Popunite oba polja!")
       }
       else if(!name.includes("@")){
        toast.error("E-mail mora biti validan!")
       }
   
  };
const scroltoinput=(()=>{
    form.current.scrollIntoView({behavior: 'smooth', block: 'end',
    inline: 'nearest'});
    console.log(form.current)
})
    return (
        <div  className='footer'>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
            <form ref={form} className='form' onSubmit={sendEmail}> 
                <input name="name" onChange={changename} placeholder='E-mail' type="text" className='form-input text'/>
                <input name="message" onChange={changemail} placeholder='Message' type="text"  className='form-input textarea'/>
                <button  className='form-button'>
                    Posalji
                </button>
            </form>
            <div className="contact">

            <div className='mob'>
                <p style={{display:"flex", justifyContent:"flex-start"}}> <span className='spanphone'><BsFillTelephoneFill/></span>:+381637554548</p>
                <p style={{display:"flex", justifyContent:"flex-start"}}><span className='spanphone'> <AiOutlineMail/></span>:+jovanovicdejan91@gmail.com</p>
                </div>
            <div className='footer-icons'>
                <Link href="https://www.linkedin.com/in/dejan-jovanovi%C4%87-345144145
" className='mailLink'>
                <AiFillLinkedin/>
                </Link>
                <Link href="https://instagram.com/dexy_co_jovanovic?igshid=YmMyMTA2M2Y=" className='mailLink'>
                <AiFillInstagram/>
                </Link>
                <span onClick={scroltoinput}className='mailLink'>
                <AiOutlineMail/>
                </span>
            </div>
            </div>
            
        </div>
    );
}

export default Footer;