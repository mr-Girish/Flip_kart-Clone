import React from "react";
import BackToOfficeEssestial from "./BackToOfficeEssestial";
import Banner from "./Banner";
import BestPhone from "./BestPhone";
import Footer from "./Footer";
import LoginHoverData from "./LoginHoverData";
import LoginPage from "./LoginPage";
import MoreHoverData from "./MoreHoverData";
import NavImages from "./NavImages";
import TopStyleDscount from "./TopStyleDscount";
import TrendingOffer from "./TrendingOffer";

const Navbar = () => {
  return (
    <div className="outNav">
      <div className="Navbar">
        <ul className="logo">
          <li className="logo_side">
            <strong> Flipkart</strong>
            <small>
              Explore <span style={{ color: "#ffff00" }}> Plus</span>
            </small>
          </li>
          <li className="search_bar">
            <input
              type="text"
              placeholder="Search for products,brands and more"
            />
          </li>

          <li className="search_icon">
            <i class="fa-solid fa-magnifying-glass custom"></i>
          </li>
        </ul>

        <ul className="right">
          <li className="RightNav">
            <span className="cart_side">
              <span>
                {/* <button className="tool" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  login
                  <span className="tooltext">
                    <LoginHoverData />
                  </span>
                </button> */}
                <button
                  type="button"
                  className="tool"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  login
                  <span className="tooltext">
                    <LoginHoverData />
                  </span>
                </button>
              </span>
              <span>
                <span className="tool">
                  More &nbsp;<i class="fa-solid fa-angle-down"></i>
                  <span className="tooltext">
                    <MoreHoverData />
                  </span>
                </span>
              </span>
              <span>
                <i className="fa-solid fa-cart-shopping"></i> &nbsp;Cart
              </span>
            </span>
          </li>
          {/* <li>
                Singup
            </li> */}
        </ul>
      </div>
      <br />
      <NavImages />
      <Banner />
      <BackToOfficeEssestial />
      <TrendingOffer />
      <TopStyleDscount />
      <BestPhone />
      <center>{/* <LoginPage /> */}</center>

      {/* <!-- Button trigger modal --> */}
      {/* <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button> */}

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">
          <div class="modal-content ">
            <div className="for_fles">
              <div class="modal-bodyy">
                <LoginPage />
              </div>
              <div class="modal-headerr ">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="yes">
        <div className="no">hnjjiiiii</div>
        <div className="noy">tussjfljfj</div>
        <div className="no">fuckkk off</div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Navbar;
