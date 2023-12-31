import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import OffCanvasLeft from './home/OffCanvasLeft';
const Header = () => {
    
    const [searchOpen, setSearchOpen] = useState(false);
    const [socialMediaOpen , setSocialMediaOpen] = useState(false);
    
    return (
        <>
            <div className="navbar-container">
                <div className='container-fluid'>
                    <div className="row">

                        <OffCanvasLeft />
                        <div className="col-12 col-sm-12 col-md-5 d-none d-sm-none d-md-block">

                            <button className="btn offcanvas-control-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                <i className="fa-solid fa-bars-staggered"></i>
                            </button>


                            <div className="pages-box">

                                <LinkContainer to='/'>
                                    <p>
                                        Home
                                        <span className="hover-line"></span>
                                    </p>
                                </LinkContainer>

                                <LinkContainer to='/shop'>
                                    <p>
                                        Shop
                                        <span className="hover-line"></span>
                                    </p>
                                </LinkContainer>

                                {/* <LinkContainer to='/'>
                                    <p>
                                        Pages
                                        <span className="hover-line"></span>
                                        </p>
                                </LinkContainer> */}

                                <LinkContainer to='/blog'>
                                    <p>
                                        Blog
                                        <span className="hover-line"></span>
                                    </p>
                                </LinkContainer>

                                <LinkContainer to='/events'>
                                    <p>
                                        Events
                                        <span className="hover-line"></span>
                                    </p>
                                </LinkContainer>

                                <LinkContainer to='/contact'>
                                    <p>
                                        Contact Us
                                        <span className="hover-line"></span>
                                    </p>
                                </LinkContainer>
                            </div>

                        </div>



                        <div className="col-8 col-sm-6 col-md-2">
                            <div className="logo-box">
                                <img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/logo.png" alt="" />
                            </div>
                        </div>

                        <div className="col-4 col-sm-6 col-md-5">

                            <div className="navbar-tools-box">
                                <div className="user-tool">
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </div>

                                <div className="user-tool" onClick={() => setSearchOpen(true)}>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>

                                <div className="user-tool d-none d-sm-none d-md-block" onClick={()=>setSocialMediaOpen(true)}>
                                    <i className="fa-solid fa-bars"></i>
                                </div>

                                <button className="btn offcanvas-control-btn d-block d-sm-block d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    <i className="fa-solid fa-bars-staggered"></i>
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            {/* Search Canvas  */}
            <div className={`search-container ${searchOpen ? "search-box-show" : ""}`}>
                <div className="container">

                    <div className="head">
                        <img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/logo-dark.png" alt="" />

                        <i className="fa-solid fa-xmark" onClick={() => setSearchOpen(false)}></i>
                    </div>

                    <div className="search-input">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="input-group-text" id="basic-addon2"><i className="fa-solid fa-magnifying-glass"></i></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`social-media-canvas ${socialMediaOpen ? "social-media-show" : ""}`}>
                <div className="social-media-container">
                    <div className="head">
                        <img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/logo-dark.png" alt="" />
                        <i className="fa-solid fa-xmark" onClick={()=>setSocialMediaOpen(false)}></i>
                    </div>

                    <div className="media-accounts">
                        <div className="item">
                            <i className='fa-brands fa-facebook-f'></i>
                            <p>Facebook</p>
                        </div>

                        <div className="item">
                            <i className='fa-brands fa-twitter'></i>
                            <p>Twitter</p>
                        </div>

                        <div className="item">
                            <i class="fa-brands fa-dribbble"></i>
                            <p>Dribble</p>
                        </div>

                        <div className="item">
                            <i className='fa-brands fa-instagram'></i>
                            <p>Instagram</p>
                        </div>
                    </div>

                    <div className="contact-info">
                        <p>+1 840 841 25 69</p>
                        <span>info@email.com</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header