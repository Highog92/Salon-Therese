import MeetUsStyle from './MeetUs.module.scss'
import Personale from '../../assets/Images/Personale.png'

export function MeetUs() {

    return (
        <section className={MeetUsStyle.MeetUs}>
            <p>Kom ned og mød os</p>
            <p>eller bestil tid på tlf:</p>
            <p>+45 98 17 51 11</p>
            <img src={Personale} alt="Personale" />
        </section>
    )
}