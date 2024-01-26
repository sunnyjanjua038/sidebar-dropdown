// import React, { useState } from 'react'

// const SidebarItem = ({item}) => {
//     const [open, setOpen] = useState(false)
//     const [isHovered, setIsHovered] = useState(false);

//     const handleMouseOver = () => {
//       setIsHovered(true);
//     };
  
// if(item.childrens){
//     return (
//         <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
//             <div className='sidebar-title' >
//                 <span>
//                 {item.icon && <i className={item.icon}></i>} 
//                     {/* Genral */}
//                     {item.title}
//                 </span>
//                 <i class="bi-chevron-down toggle-btn"onClick={()=>setOpen(!open)}></i>
//             </div>
//             <div className='sidebar-content'onMouseEnter={handleMouseOver}>
//                 {item.childrens.map((child,index)=><SidebarItem key={index} item={child}/>)}
//             </div>
          
//         </div>
//       )
// }else{
//     return (
//         <a href={item.path ||'#'} className='sidebar-item plain'>
            
//                 {/* <span> */}
//                 {/* <i class="bi-gear fill"></i> */}
//                     {item.icon && <i className={item.icon}></i>} 
//                     {item.title}
//                 {/* </span> */}
           
          
//         </a>
//       )
// }
// }

// export default SidebarItem

import React, { useState } from 'react';

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
    setOpen(true); // Open the dropdown when hovered over the down icon
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOpen(false); // Close the dropdown when the mouse leaves the area
  };

  if (item.childrens) {
    return (
      <div
        className={open ? 'sidebar-item open' : 'sidebar-item'}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div className="sidebar-title">
          <span>
            {item.icon && (
              <i className={item.icon} onMouseEnter={handleMouseOver}></i>
            )}
            {item.title}
          </span>
          <i
            className="bi-chevron-down toggle-btn"
            onMouseEnter={handleMouseOver}
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        {open && (
          <div className="sidebar-content">
            {item.childrens.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <a href={item.path || '#'} className="sidebar-item plain">
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    );
  }
};

export default SidebarItem;
