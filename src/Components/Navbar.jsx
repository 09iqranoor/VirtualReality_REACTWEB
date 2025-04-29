import {Menu, X} from "lucide-react"
import { useState } from "react"
import logo from "../assets/logo.png"
import {navItems} from "../constants"
const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toogleNav = ()=>{
        setDrawerOpen(!drawerOpen);
    }
  return (
   <nav className="sticky top-0 z-20 py-3 backdrop-blur-lg border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between
         item-center">
            <div className="flex item-center flex-shrink-0">
                <img  className="h-10 w-10 mr-2 " src={logo} alt="" />
                <span className="text-xl tracking-tight mt-2">
                    VirtualReality   
                </span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12 mt-3"> 
            {navItems.map((item, index)=>(
                <li key={index}>
                    <a href={item.href}> {item.label} </a>
                </li>
            )
            )}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
                <a href="#" className="py-2 px-3 border rounded-md"> Sign in</a>
                <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md">
                    Create an account
                </a>
            </div>
            <div className="lg:hidden md-flex flex-col justify-end">
                <button onClick={toogleNav}>
                   {drawerOpen ? <X/> : <Menu/>} 
                </button>
            </div>
        </div>
        {drawerOpen &&(
            <div className="fixes right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                    {navItems.map((items,index)=>(
                    <li key={index} className="py-4">
                        <a href={items.href}>{items.label}</a>
                    </li>
                    ))}
                </ul>
                <div className="flex space-x-6">
                    <a href="#" className="py-2 px-3 border rounded-md">
                        Sign in
                    </a>
                    <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800" >
                        Create an account
                    </a>
                </div>
            </div>
        ) }
    </div>
   </nav>

  );
}

export default Navbar
