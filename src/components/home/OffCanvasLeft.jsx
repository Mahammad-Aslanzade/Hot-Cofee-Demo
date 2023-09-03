import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const OffCanvasLeft = () => {
    return (
        <div className="offcanvas offcanvas-start left-canvas" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

            <div className="offcanvas-body">
                <div className="left">

                    <img src='https://hotcoffee.themerex.net/wp-content/uploads/2021/11/logo.png' className="offcanvas-title" id="offcanvasExampleLabel" />
                    <button type="button" className=" text-reset left-canvas-close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                        <span>Close</span>
                        <i className="fa-solid fa-xmark"></i>
                    </button>


                    <div className="pages-box">

                        <LinkContainer to='/'>
                            <p>
                                Home
                                <i class="fa-solid fa-arrow-right"></i>
                                <span className="hover-line"></span>
                            </p>
                        </LinkContainer>

                        <LinkContainer to='/shop'>
                            <p>
                                Shop
                                <i class="fa-solid fa-arrow-right"></i>
                                <span className="hover-line"></span>
                            </p>
                        </LinkContainer>

                        <LinkContainer to='/blog'>
                            <p>
                                Blog
                                <i class="fa-solid fa-arrow-right"></i>
                                <span className="hover-line"></span>
                            </p>
                        </LinkContainer>

                        <LinkContainer to='/events'>
                            <p>
                                Events
                                <i class="fa-solid fa-arrow-right"></i>
                                <span className="hover-line"></span>
                            </p>
                        </LinkContainer>

                        <LinkContainer to='/contact'>
                            <p>
                                Contact Us
                                <i class="fa-solid fa-arrow-right"></i>
                                <span className="hover-line"></span>
                            </p>
                        </LinkContainer>
                    </div>

                    <div className="line"></div>

                    <div className="soical-media-accounts">
                        <i className='fa-brands fa-facebook-f'></i>
                        <i className='fa-brands fa-twitter'></i>
                        <i class="fa-brands fa-dribbble"></i>
                        <i className='fa-brands fa-instagram'></i>
                    </div>
                </div>


                <div className="right">
                    <div className="faqs-box">
                        <div className="faq">
                            <p className='question'>Have Questions?</p>
                            <p className='answer email'>info@website.com</p>
                        </div>

                        <div className="faq">
                            <p className='question'>Want to Book a Tour?</p>
                            <LinkContainer to='/contact'>
                                <p className='answer'>
                                    Contact Us
                                    <i class="fa-solid fa-arrow-right"></i>
                                </p>
                            </LinkContainer>
                        </div>

                        <div className="faq">
                            <p className='question'>Want to Buy a Coffee?</p>
                            <LinkContainer  to='/shop'>
                                <p className='answer'>
                                    Go To Shop
                                    <i class="fa-solid fa-arrow-right"></i>
                                </p>
                            </LinkContainer>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffCanvasLeft