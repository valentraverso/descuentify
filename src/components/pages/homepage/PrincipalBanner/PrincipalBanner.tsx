import Image from 'next/image';
import styles from './PrincipalBanner.module.scss';

export default function PrincipalBanner() {
    return (
        <section className={styles["container-principal-banner"]}>
            <div className={styles["container-grid-principal"]}>
                <div>
                    <span className={styles["first-text-main"]}>Bienvenido a la revolución de la <span className={styles.purple}>fidelización.</span></span>
                    <span className={styles["principal-button-main"]}>Me quiero unir</span>
                    <div className={styles['container-text']}>
                        <h2 className={styles.text}>
                            Hacer que vuelvas 🫂
                        </h2>
                    </div>
                </div>
                <div>
                    <img className={styles['mobile-img']} src="/assets/img/main/mobile-map-iphone.png" alt='image mobile' />
                </div>
            </div>
        </section>
    )
}