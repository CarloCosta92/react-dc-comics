import digitalComics from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import subscriptions from '../assets/img/buy-comics-subscriptions.png';
import shopLocator from '../assets/img/buy-comics-shop-locator.png';
import powerVisa from '../assets/img/buy-dc-power-visa.svg';

export default function BlueBar() {
    <div className="blue-banner">
        <div className="card">
            <img src={digitalComics} alt="Fumetti Digitali" />
            <span>FUMETTI DIGITALI</span>
        </div>
        <div className="card">
            <img src={merchandise} alt="Merchandising DC" />
            <span>MERCHANDISING DC</span>
        </div>
        <div className="card">
            <img src={subscriptions} alt="Abbonamenti" />
            <span>ABBONAMENTI</span>
        </div>
        <div className="card">
            <img src={shopLocator} alt="Trova Fumetteria" />
            <span>TROVA FUMETTERIA</span>
        </div>
        <div className="card">
            <img src={powerVisa} alt="DC Power Visa" />
            <span>DC POWER VISA</span>
        </div>
    </div>
}