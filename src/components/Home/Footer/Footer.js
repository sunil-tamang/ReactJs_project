import React from 'react'
import {Link} from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import gpay from './gpay.png';
import apple from './apple.png';

import './Footer.css'

export default function Footer() {
    return (
        <div className="footer-wrapper">
           
            <ul className="footer-list__item__wrapper">
                   
                    <li className="footer-list__item">
                        <Link className="footer-list__item--head">Explore</Link>
                        <Link to="/engineering"> IIT Jee</Link>
                        <Link to="/medical"> Neet</Link>
                        <Link to="/engineering"> NIMCET</Link>
                        <Link to="/medical"> CBSE Class 12</Link>
                    </li>

                    <li className="footer-list__item">
                        <Link className="footer-list__item--head">Company</Link>
                        <Link to="/about"> About Us</Link>
                        <Link to="/career"> Careers</Link>
                        <Link to="/blog"> Blogs</Link>
                        <Link to="/privacy"> Privacy Policy</Link>
                    </li>

                      <li className="footer-list__item">
                        <Link to="/career" className="footer-list__item--head">Other Links</Link>
                        <Link to="/terms"> Terms and Conditions</Link>
                        <Link to="/career"> Become a Teacher</Link>
                        <Link to="/career"> Sitemap</Link>
                        <Link to="/career"> Refund Policy</Link>
                    </li>

                    <li className="footer-list__item">
                        <Link to="/career" className="footer-list__item--head">Social</Link>
                        <Link to="/career" className="footer-list__item_links"><TwitterIcon />  &nbsp; Twitter</Link>
                        <Link to="/career" className="footer-list__item_links" ><InstagramIcon /> &nbsp; Instagram</Link>
                        <Link to="/career" className="footer-list__item_links"><FacebookIcon />  &nbsp; Facebook</Link>
                        <Link to="/career" className="footer-list__item_links"><LinkedInIcon /> &nbsp;  LinkedIn</Link>
                
                    </li>

                    <li className="footer-list__item">
                        <Link className="footer-list__item--head">Download</Link>
                        <Link to="/career"> <img src={gpay} className="download_btn" alt=""/> </Link>
                        <Link to="/career"> <img src={apple} className="download_btn" alt=""/> </Link>
                    </li>

            </ul>
        </div>
    )
}
