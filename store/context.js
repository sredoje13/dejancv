import { createContext ,useState} from "react";
const CartContext=createContext()
const Provider=({children})=>{
 const [scroll, setscroll]=useState("")
 const[onchange,setchange]=useState("oneimage")

    const mn={
        scroll, setscroll,
        onchange,setchange,
       
    }
 return(
    <CartContext.Provider value={mn}>{children}</CartContext.Provider>
 )  

    
}
export {Provider,CartContext}