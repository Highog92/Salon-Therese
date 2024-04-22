import AddressStyle from './Address.module.scss'

export function Address() {

    return (
        <section className={AddressStyle.address} >
            <address>
                <h2>Find vores salon her</h2>
                <p>Vestergade 11, </p>
                <p>9400 Nørresundby </p>
            </address>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d263.4732701526023!2d9.920689877604225!3d57.059261723183674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932861af0b6c1%3A0x2dd840d0fde06fca!2sSalon%20Therese!5e0!3m2!1sda!2sdk!4v1713452317322!5m2!1sda!2sdk" frameborder="0"></iframe>
        </section>
    )
}
