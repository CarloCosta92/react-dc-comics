import digitalComics from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import subscriptions from '../assets/img/buy-comics-subscriptions.png';
import shopLocator from '../assets/img/buy-comics-shop-locator.png';
import powerVisa from '../assets/img/buy-dc-power-visa.svg';
import bigLogo from '../assets/img/dc-logo-bg.png';
import facebook from '../assets/img/footer-facebook.png';
import twitter from '../assets/img/footer-twitter.png';
import youtube from '../assets/img/footer-youtube.png';
import pinterest from '../assets/img/footer-pinterest.png';
import periscope from '../assets/img/footer-periscope.png';
import BlueBar from './BlueBar.jsx';

export default function Footer() {
    return (<>
        <BlueBar />
        <div className="main-footer-container"></div>
        <section className='mainFooter'>
            <div className="ft-left">
                <div className="footer-links-column">
                    <h3>DC COMICS</h3>
                    <ul>
                        <li><a href="#">Characters</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
                <div className="footer-links-column">
                    <h3>DC</h3>
                    <ul>
                        <li><a href="#">Termo Of Use</a></li>
                        <li><a href="#">Privacy Policy(New)</a></li>
                        <li><a href="#">Ad Choices</a></li>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Subscription</a></li>
                        <li><a href="#">Talent WOrkshop</a></li>
                        <li><a href="#">Cpsc Certificates</a></li>
                        <li><a href="#">Ratings</a></li>
                        <li><a href="#">Hop Helps</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-links-column">
                    <h3>SITES</h3>
                    <ul>
                        <li><a href="#">DC</a></li>
                        <li><a href="#">MAD Magazine</a></li>
                        <li><a href="#">DC Kids</a></li>
                        <li><a href="#">DC Universe</a></li>
                        <li><a href="#">DC Power Visa</a></li>

                    </ul>
                </div>
                <div className="footer-links-column">
                    <h3>SHOP</h3>
                    <ul>
                        <li><a href="#">Shop DC</a></li>
                        <li><a href="#">Shop DCCollectibles</a></li>
                    </ul>

                </div>
            </div>
            <div className="ft-right">
                <img src={bigLogo} alt="biglogo" />
            </div>
        </section>

        <section className='footer-social-container'>
            <div>
                <button className="signup-button">SIGN-UP NOW!</button>
            </div>
            <div className="social-container">
                <span>FOLLOW US</span>
                <div className="social-icons">
                    <a href="#" className="social-icon">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="#" className="social-icon">
                        <img src={twitter} alt="twitter" />
                    </a>
                    <a href="#" className="social-icon">
                        <img src={youtube} alt="youtube" />
                    </a>
                    <a href="#" className="social-icon">
                        <img src={pinterest} alt="pinterest" />
                    </a>
                    <a href="#" className="social-icon">
                        <img src={periscope} alt="periscope" />
                    </a>

                </div>
            </div>
        </section>
    </>)
};