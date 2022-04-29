import React from 'react'
import Bannerimg from '../Images/Bannerimg.png'
import Bannerimg1 from '../Images/Bannerimg1.png'
import Bannerimg2 from '../Images/Bannerimg2.png'
const Banner = () => {
  return (
    <>
    <div className='Banner_Background'>
        {/* <img src={Bannerimg} alt="loading" />     */}
       <div className='Banner_space'>
       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Bannerimg} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Bannerimg1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Bannerimg2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>   
       </div>
    </div>
    </>
  )
}

export default Banner