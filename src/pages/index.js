import { Navbar } from "@/components"
import { Body } from "@/components"
import Image1 from'./../components/1678043479223.jpg'
import Image2 from './../components/1678043479234.jpg'
import Image3 from './../components/1678043479244.jpg'
import Image4 from '../components/1678043479266.jpg'
import { Pictures } from "@/components"
import { Footer } from "@/components"
export default function Home() {
 
 
 
  return (
   <div className="all">
    <Navbar/>
    <Body />
    <Pictures  image1={Image1} 
    image2={Image2} 
    image3={Image3}
     image4={Image4}/>
     <Footer/>
    </div>
  )
}
