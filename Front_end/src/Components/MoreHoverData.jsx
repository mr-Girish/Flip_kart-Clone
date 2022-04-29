import React from 'react'
// import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { Download, DownloadDone, LiveHelp } from '@mui/icons-material';
const MoreHoverData = () => {
  return (
    <div className="HoverDataList">
    
      <li className="data_tool">
        <p className="for_icon">
        <i class="fa-solid fa-bell hicon"></i>
        </p>
        <p className="name">Notification Preferences</p>
      </li>
      <li className="data_tool">
        <p className="icon"><i class="fa-solid fa-briefcase hicon"></i></p>
        <p className="name">Sell on Flipkart</p>
      </li>
      <li className="data_tool">
          <p className="icon"><LiveHelp className="hicon" /></p>
          <p className="name">24x7 Customer Care</p>
     </li>
      <li className="data_tool">
        <p>
        <i class="fa-solid fa-arrow-trend-up hicon"></i>
        </p>
        <p>Advertise</p>
      </li>
      <li className="data_tool">
        <p className="icon"><Download className="hicon"/> </p>
        <p className="name">Downlode App</p>
      </li>
      
    </div>
  )
}

export default MoreHoverData