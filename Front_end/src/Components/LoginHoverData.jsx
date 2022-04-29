import React from "react";
import StoreIcon from '@mui/icons-material/Store';
import { Store } from "@mui/icons-material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
const LoginHoverData = () => {
  return (
    <div className="HoverDataList">
      <li className="data_tool">
       <span>New Customer?</span><span>Sing Up</span>
      </li>
      
      <li className="data_tool">
        <p className="for_icon">
          <i class="fa-solid fa-circle-user hicon"></i>
        </p>
        <p className="name"> My Profile</p>
      </li>
     
      <li className="data_tool">
        <p className="icon">
         <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png" className="hicon" alt="" /> 
        </p>
        <p className="name">Flipkart Plus Zone</p>
      </li>
    
      <li className="data_tool">
          <p className="icon"><Store className="hicon"/> </p>
          <p className="name">Orders</p>
     </li>
 
      <li className="data_tool">
        <p>
          <i class="fa-solid fa-heart hicon"></i>
        </p>
        <p>Whislist</p>
      </li>

      <li className="data_tool">
        <p className="icon"><EmojiEventsIcon className="hicon"/></p>
        <p className="name">Rewards</p>
      </li>
      
      <li className="data_tool">
        <p>
        <i class="fa-solid fa-gift hicon"></i>
        </p>
        <p className="name">Gift Cards</p>
      </li>
    </div>
  );
};

export default LoginHoverData;
