import React from "react";
import '../../styles/sidebar.css'

const SideBar = () =>{
    return(
        <div className='sidebarContainer'>
        <ul>
            <li style={{marginBottom:'20px'}}><img  width='150px'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2Bsx5Xr-tTOpi_Fika2NvKQfvChZmWDt-QVT7OIQ&s"/></li>
          <li>Home</li>
          <li>Search</li>
          <li>Explore</li>
          <li>Reels</li>
          <li>Massages</li>
          <li>Notifications</li>
          <li>Create</li>
          <li>Profile</li>
        </ul>
    </div>
    )
}

export default SideBar