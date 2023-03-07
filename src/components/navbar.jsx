import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../store/context';
function Navbar(props) {
    const{  setscroll}=useContext(CartContext)
    return (
        <div className='navbar'>
            <div className='navbar-title' onClick={()=>{setscroll("toaboutme")}}> About me</div>
            <div className='navbar-title' onClick={()=>{setscroll("tomyskills")}}> My skills</div>
            <div className='navbar-title' onClick={()=>{setscroll("tocontact")}}> Contact me</div>
        </div>
    );
}

export default Navbar;