import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className="bg-gray-900 h-24 flex flex-col justify-center">
        <div className="flex flex-row justify-between px-5" >
            <div className="flex hover:text-red-300 h-10 align-middle transform:scale cursor-pointer">
                <Link to="/">
                <h1 className="font-bold text-xl text-white text-center">Notty</h1>
                </Link>                
           </div>
            <div className=" w-2/4 h-10 align-middle rounded-md items-center">
                    <form>
                        <input type="text" className="w-full rounded-md pt-3 px-3" />
                    </form>
            </div>
            <div className="flex justify-items-stretch h-10 align-middle text-white ">
                <div className="flex text-lg font-medium px-5 hover:text-red-300 transform:scale cursor-pointer ">
                    Register
                </div>
                <div className="flex text-lg font-medium hover:text-red-300 transform:scale cursor-pointer">
                    Login
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header
