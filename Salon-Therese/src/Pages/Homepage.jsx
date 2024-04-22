import homepageStyle from './Homepage.module.scss'
import { WeOffer } from '../Components/We offer/WeOffer'
import { Address } from '../Components/Address/Address'
import { MeetUs } from '../Components/MeetUs/MeetUs'


export function Homepage() {

    return (
        <main className={homepageStyle.homePage}>
            <WeOffer />
            <MeetUs />
            <Address />
        </main>
    )
}