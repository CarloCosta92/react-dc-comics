import bigLogo from '../assets/img/dc-logo-bg.png';
import facebook from '../assets/img/footer-facebook.png';
import twitter from '../assets/img/footer-twitter.png';
import youtube from '../assets/img/footer-youtube.png';
import pinterest from '../assets/img/footer-pinterest.png';
import periscope from '../assets/img/footer-periscope.png';
import BlueBar from './BlueBar.jsx';
import Menu from './Menu.jsx';
import { dcComics, dc, sites, shop } from './arrays.jsx';


export default function Footer() {
    return (<>
        <BlueBar />
        <div className="main-footer-container"></div>
        <section className='mainFooter'>
            <div className="ft-left">
                <div className="footer-links-column">
                    <h3>DC COMICS</h3>

                    <Menu link={dcComics} />

                </div>
                <div className="footer-links-column">
                    <h3>DC</h3>

                    <Menu link={dc} />

                </div>
                <div className="footer-links-column">
                    <h3>SITES</h3>

                    <Menu link={sites} />
                </div>
                <div className="footer-links-column">
                    <h3>SHOP</h3>

                    <Menu link={shop} />

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