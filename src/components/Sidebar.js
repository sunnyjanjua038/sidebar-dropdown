// import React from 'react'
import SidebarItem from './SidebarItem'
import items from '../data/Sidebar.json'
import React, { useState } from 'react';


const Sidebar = () => {
  return (
    <div className='sidebar' >
    {
        items.map((item,index) => <SidebarItem key={index} item={item}/>)
    }
   </div>
  
  )
}

export default Sidebar
