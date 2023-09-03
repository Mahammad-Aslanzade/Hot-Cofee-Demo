import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { TiThMenuOutline } from '../../node_modules/react-icons/ti'
const Header = () => {
    // const [currentPage, setCurrentPage] = useState("");
    const pathName = window.location.pathname;
    // useEffect(() => {
    //     switch (pathName) {
    //         case '/':
    //             setCurrentPage(1)
    //             break;

    //         case '/shop':
    //             setCurrentPage(2)
    //             break;

    //         case '/blog':
    //             setCurrentPage(3)
    //             break;

    //         case '/events':
    //             setCurrentPage(4)
    //             break;

    //         case '/contact':
    //             setCurrentPage(5)
    //             break;

    //         default:
    //             setCurrentPage(1)
    //             break;
    //     }
    // }, [])

    return (
        <header>
            <div className="navbar-container">
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-12 col-md-5">

                            <button className="btn offcanvas-control-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                <i className="fa-solid fa-bars-staggered"></i>
                            </button>

                            <div className="offcanvas offcanvas-start left-canvas" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

                                <div className="offcanvas-body">
                                    <div className="left">

                                        <img src='https://hotcoffee.themerex.net/wp-content/uploads/2021/11/logo.png' className="offcanvas-title" id="offcanvasExampleLabel" />
                                        <button type="button" className=" text-reset left-canvas-close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                                            <i className="fa-solid fa-xmark"></i>
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


                                    <div className="right">
                                        <h2>salam</h2>
                                    </div>
                                </div>
                            </div>

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



                        <div className="col-12 col-md-2">
                            <div className="logo-box">
                                <img src="https://hotcoffee.themerex.net/wp-content/uploads/2021/11/logo.png" alt="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-5">

                            <div className="navbar-tools-box">
                                <div className="user-tool">
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </div>

                                <div className="user-tool">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>

                                <div className="user-tool">
                                    <i className="fa-solid fa-bars"></i>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header