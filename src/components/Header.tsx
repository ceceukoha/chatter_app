import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'

function Header() {
    const [showNavBar, setShowNavBar] = useState(false)
    useEffect(()=>{
        console.log(showNavBar)
    }, [showNavBar])
  return (
    <header className="flex px-12 py-4 justify-between items-center font-semibold">
        <h2 className="text-3xl text-blue-700">CHATTER</h2>
        <input className='w-[300px] border boder-gray-900 p-2 px-4 rounded-full' type="text" name='search-box' placeholder='search Chatter' />
        <button onClick={()=> setShowNavBar(prev=> !prev)} className='w-[50px] h-[50px] rounded-full border-2 border-blue-600'><img src="" alt="" /></button>
        {  showNavBar? (<NavBar />) : null}
    </header>
  )
}

export default Header