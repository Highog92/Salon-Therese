import OpeningHoursStyle from './OpeningHours.module.scss'

export function OpeningHours() {

    return (
        <section className={OpeningHoursStyle.OpeningHours}>
            <ul>
                <li>Åbningstider</li>
                <li>Mandag: Lukket</li>
                <li>Tirsdag - Torsdag: 09.00-17.30 </li>
                <li>Fredag: 09.00-18.00 </li>
                <li>Lørdag: 08.00-13.00</li>
            </ul>
        </section>
    )
}
