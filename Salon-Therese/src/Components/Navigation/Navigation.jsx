import navStyle from './Navigation.module.scss'
import Logo from '../../assets/Logo/Logo.svg'
export function Navigation() {

    return (
        <nav className={navStyle.navigation}>
            <img src={Logo} alt="Logo" />
            <ul>
                <li>Her bliver du taget godt imod</li>
                <li>Bestil tid: +45 98 17 51 11</li>
            </ul>
        </nav>
    )
}