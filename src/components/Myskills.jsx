import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {ImCheckmark} from 'react-icons/im'
function Myskills(props) {
    useEffect(()=>{
        Aos.init()
        Aos.refresh()
    })
    return (
        <div className='skills'>
<div className='skill leftdiv' data-aos="zoom-in-right"  data-aos-duration="2000">
<span><ImCheckmark className='spanphone'/></span>Able to understand the testing requirements
</div>
<div className='skill rightdiv' data-aos="zoom-in-left" data-aos-duration="2000">
<span><ImCheckmark className='spanphone'/></span>Execute testing
</div>
<div className='skill leftdiv' data-aos="zoom-in-right" data-aos-duration="2000">
<span><ImCheckmark className='spanphone'/></span>Track the results
</div>
<div className='skill rightdiv' data-aos="zoom-in-left" data-aos-duration="2000">
<span><ImCheckmark className='spanphone'/></span>Manage defects logging
</div>
<div className='skill leftdiv' data-aos="zoom-in-right" data-aos-duration="2000">
<span><ImCheckmark className='spanphone'/></span>Software manual test expirience
</div>
<div className='skill rightdiv' data-aos="zoom-in-left" data-aos-duration="2000">
<span><ImCheckmark className='spanphone'/></span>Jira, Trello and nTask knowledge
</div>
<div className='skill leftdiv' data-aos="zoom-in-right" data-aos-duration="2000">
<span><ImCheckmark className='spanphone'/> </span>MS office knowledge
</div>
        </div>
    );
}

export default Myskills;