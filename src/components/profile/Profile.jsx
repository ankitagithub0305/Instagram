import React from "react";
import SideBar from "../common/SideBar";
import { myInfo } from "../../data/myinfo";
import Header from "./Header";
import MyPost from "./MyPost";
const Profile  = () =>{
    return (
        <div style={{display:"flex",gap:"5vw"}}>
            <SideBar/>
            <div>
            <Header myInfo={myInfo}/>
            <MyPost post = {myInfo.posts}/>
            </div>
            
        
        {/* <Header/> */}
        </div>
    )
}


export default Profile
