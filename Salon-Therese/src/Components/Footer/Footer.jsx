import footerStyle from './Footer.module.scss'
import Facebook from '../../assets/Socials/Facebook.svg'
import Instagram from '../../assets/Socials/Instagram.svg'
import { OpeningHours } from '../Opening Hours/OpeningHours'

export function Footer() {

    return (
        <footer className={footerStyle.footer}>
            <ul>
                <li>Salon Therese I/S</li>
                <li>CVR-nr: 39801973</li>
                <li>Telefon: +45 98 17 51 11</li>
                <li>Adresse: Vestergade 11, 9400 Nørresundby</li>
            </ul>
            <OpeningHours/>
            <div>
                <a href="https://www.facebook.com/p/Salon-Therese-100057563585153/">Følg os på Facebook
                    <img src={Facebook} alt="Link til Facebook" />
                </a>
                <a href="https://www.instagram.com/salontherese/">Følg os på Instagram
                    <img src={Instagram} alt="Link til Instagram" />
                </a>
            </div>
        </footer>
    )
}
