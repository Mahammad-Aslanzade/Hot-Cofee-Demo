import React from 'react'
import Slider from '../components/home/Slider'

const Home = () => {
  return (
    <section className="home-page">
      <Slider />

      <div className="our-coffee-section">
        <div className="container">

          <div className="row g-5">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="col-left">

                <div className="text-box">
                  <span>Our Coffee</span>
                  <h2>We Grow & Harvest Every Coffee Grain with Love</h2>
                </div>

                <div className="image-container">
                  <div className="img-box">
                    <img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/img-home-1.jpg" alt="" />

                    <img className='circle' src="https://hotcoffee.themerex.net/wp-content/uploads/2021/08/about-us.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-12 col-md-6' id='left-part-col'>
              <div className="col-right">
                <img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/img-home-2.jpg" alt="" />
              </div>

              <div className="col-right col-right-span">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit.</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="our-blends-section">
        <div className="container">

          <div className="text-box">
            <span>Our Coffee</span>
            <h2>We Grow & Harvest Every Coffee Grain with Love</h2>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Home