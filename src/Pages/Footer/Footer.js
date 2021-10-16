import React from 'react';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="bg-dark ">
            <div class="container overflow-hidden">
                <div class="row gx-5">
                    <div class="col mt-5">
                        <div class="p-3 bg-dark">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                    <div class="col mt-5">
                        <div class="p-3 bg-dark text-white text-start">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>About Us</li>
                                <li>Terms n Conditions</li>
                                <li>privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col mt-5">
                        <div class="p-3 bg-dark text-white text-start">
                            <h4>Contact Address</h4>
                            <p>House#20, Road#02, Sector#11, Uttara, Dhaka-1230 </p>
                            <p>Cell: 017160798943</p>
                            <p>Email: info@redonion.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container overflow-hidden bg-dark ">
                <div class="row gx-5">
                    <div class="col mt-5">
                    <div class="p-3 bg-dark text-white">Copyright @ 022.Red Onion Restaurent. All rights reserved.</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;