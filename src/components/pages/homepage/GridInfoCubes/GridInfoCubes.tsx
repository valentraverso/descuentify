import styles from './GridInfoCubes.module.scss'

export default function GridInfoCubes() {
    return (
        <section className={styles['container-why-us']}>
            <h2 className={styles.h2}>We are Descuentify</h2>
            <div className={styles['container-grid-three']}>
                <div className={styles['container-block-why']}>
                    <p className={styles['title-block-why']}>¿Que es Descuentify?</p>
                    <span className={styles.span}>Somos una app en la cual ayudamos a las empresas y a los clientes a crear una relacion mas fuerte.</span>
                </div>
                <div className={styles['container-block-why']}>
                    <p className={styles['title-block-why']}>¿Para que sirve?</p>
                    <span className={styles.span}>Para fidelizar a clientes nuevos y recompensar a aquellos que son recurrentes.</span>
                </div>
                <div className={styles['container-block-why']}>
                    <p className={styles['title-block-why']}>¿Porque lo hacemos?</p>
                    <span className={styles.span}>Consideramos que ayudamos a mejorar los servicios y crear una mejor experiencia.</span>
                </div>
            </div>
        </section>
    )
}