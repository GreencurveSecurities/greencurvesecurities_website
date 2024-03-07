import React from 'react';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/profile.php?id=100083023374508&mibextid=ZbWKwL'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/company/greencurve-securities/'},
    {Social: <FaInstagram /> , link: 'https://instagram.com/greencurve_securities?igshid=ZDdkNTZiNTM='},
    {Social: <FaTwitter /> , link: 'https://twitter.com/greencurve_s?t=KRmlZPGbWNt5uAbLf31Vog&s=08'},
]

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--100" >
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="/home-one">
                                    <img src="/assets/images/Green Curve Website/Logo.png" alt="Logo images"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="inner ">
                            <ul className="list-style--1 rn-lg-size d-flex justify-content-center ">
                            <p>
                              <li><a href="/disclosure">Disclosure </a></li>
                              <li><a href="/terms"> Terms and Condition </a> </li>
                              <li><a href="/policy">Privacy Policy </a> </li>
                              <li><a href="/refund">Refund Policy</a></li>
                              <li><a href="/disclaimer">Disclaimer</a></li>
                            </p>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <div className="text">
                        
                                <p>Copyright © 2022 Green Curve Securities. All Rights Reserved.</p>
                                
                                <p><a href="https://www.linkedin.com/company/branding-cataly/?originalSubdomain=in">Made with ❤️ Branding Catalyst</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterTwo;