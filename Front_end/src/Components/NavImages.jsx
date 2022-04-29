import React from "react";
import Appliances from "./SmallComponent/Appliances";
import Beauty_Toys from "./SmallComponent/Beauty_Toys";
import Electronics from "./SmallComponent/Electronics";
import FashionData from "./SmallComponent/FashionData";
import Home_data from "./SmallComponent/Home_data";

const NavImages = () => {
  return (
    <div className="Navimages">
      <div className="innertag_first">

      </div>
      <div className="innertag">
        <div className="item">
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            alt="Loading..."
          />
         <center> <p>Top Offers</p></center>
        </div>
        <div className="item">
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
            alt=""
          />
         <center> <p>Grocery</p></center>
        </div>
        <div className="item">
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
            alt=""
          />
          <center><p>Mobiles</p></center>
        </div>
        <div className="item">
          <div className="tool">
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
            alt=""
          />
          <center><p>Fashion &nbsp;<i class="fa-solid fa-angle-down"></i></p></center>
            <div className="tooltext">
             <FashionData/>
            </div>
            
          </div>
        
        </div>
        <div className="item">
          <div className="tool">
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
            alt=""
          />
          <center><p>Electronics&nbsp;<i class="fa-solid fa-angle-down"></i></p></center>
            <div className="tooltext">
              <Electronics/>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="tool">
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
            alt=""
          />
          <center><p>Home&nbsp;<i class="fa-solid fa-angle-down"></i></p></center>
            <div className="tooltext">
              <Home_data/>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="tool">
          <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
            alt=""
          />
         <center> <p>Appliances&nbsp;<i class="fa-solid fa-angle-down"></i></p></center>
         <div className="tooltext">
           <Appliances/>
         </div>
          </div>
        </div>
        <div className="item">
         <div className="tool">
         <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
            alt=""
          />
          <center><p>Travel</p></center>
         </div>
       
        </div>

        <div className="item">
            <div className="tool">
            <img
            src="https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
            alt=""
          />
          <center><p>Beauty,Toys & More&nbsp;<i class="fa-solid fa-angle-down"></i></p></center>
          <div className="tooltext">
            <Beauty_Toys/>
            </div>
          
           
           </div>
        </div>
      </div>
      <div className="innertag_last">
        
      </div>
    </div>
  );
};

export default NavImages;
