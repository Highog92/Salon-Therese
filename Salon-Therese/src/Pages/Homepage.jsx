import homepageStyle from './Homepage.module.scss'
import { WeOffer } from '../Components/We offer/WeOffer'
import { Address } from '../Components/Address/Address'
import Personale from './../assets/Images/Personale.jpg'


export function Homepage() {

    return (
        <main className={homepageStyle.homePage}>
            <WeOffer />
            <div>
                <p>Kom ned og mød os</p>
                <p>eller bestil tid på tlf:</p>
                <p>+45 98 17 51 11</p>
                <img src={Personale} alt="Personale" />
            </div>
            <Address />
        </main>
    )
}