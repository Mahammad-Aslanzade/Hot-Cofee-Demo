import React from 'react'

const Slider = () => {
    return (
        <div className="slider-main">
            <div id="carouselExampleDark" className="carousel carousel-dark slide">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/slides-1-1.jpg" className="d-block w-100" alt="..." />

                        <div className="text-box">
                            <div className="text-main">
                                <p>Making Our coffee with love.</p>
                                <h1>Your Guide in the Coffee World</h1>
                                <button>About Us</button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/12/slides-1-2.jpg" className="d-block w-100" alt="..." />

                        <div className="text-box">
                            <div className="text-main">
                                <p>The fragrance is inspring.</p>
                                <h1>Start Your Day with Coffee </h1>
                                <button>About Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/12/slides-1-3.jpg" className="d-block w-100" alt="..." />

                        <div className="text-box">
                            <div className="text-main">
                                <p>Let yourself enjoy best.</p>
                                <h1>Feel the Delight of a Pefect Cup</h1>
                                <button>About Us</button>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev carousel-control" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <i class="fa-solid fa-arrow-left"></i>
                    <span className="" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next carousel-control" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <i class="fa-solid fa-arrow-right"></i>
                    <span className="" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider