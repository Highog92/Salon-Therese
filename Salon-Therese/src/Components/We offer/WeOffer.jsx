import WeOfferStyle from './WeOffer.module.scss'
import Hairwash from '../../assets/Images/Hairwash.svg'
import LadyHair from '../../assets/Images/LadyHair.svg'
import Kids from '../../assets/Images/Kids.svg'
import StraighterCurler from '../../assets/Images/StraighterCurler.svg'
import ManHair from '../../assets/Images/ManHair.svg'
import Coloring from '../../assets/Images/Coloring.svg'
import Eyelashes from '../../assets/Images/Eyelashes.svg'
import Beard from '../../assets/Images/Beard.svg'
export function WeOffer() {



    return (
        <section className={WeOfferStyle.WeOffer}>

            <h2>Vi tilbyder</h2>
            
            <div>
                <ul>
                    <img src={LadyHair} alt="Dameklip" />
                    <li>Dameklip</li>
                </ul>
                <ul>
                    <img src={ManHair} alt="Herreklip" />
                    <li>Herreklip</li>
                </ul>
                <ul>
                    <img src={Kids} alt="Børneklip" />
                    <li>Børneklip</li>
                </ul>
                <ul>
                    <img src={Hairwash} alt="Hårvask" />
                    <li>Hårvask</li>
                </ul>
                <ul>
                    <img src={Coloring} alt="Favning" />
                    <li>Favning</li>
                </ul>
                <ul>
                    <img src={Beard} alt="Skægtrimning" />
                    <li>Skægtrimning</li>
                </ul>
                <ul>
                    <img src={StraighterCurler} alt="Permanentekrøller" />
                    <li>Permanente krøller</li>
                </ul>
                <ul>
                    <img src={Eyelashes} alt="Bryn og vipper" />
                    <li>Bryn og vipper</li>
                </ul>
            </div>

        </section>
    )
}
