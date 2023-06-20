import Image from 'next/image';
import styles from './PrincipalBanner.module.scss';

export default function PrincipalBanner() {
    return (
        <section className={styles["container-principal-banner"]}>
            <img className={styles['jungle5']} src='/assets/img/main/jungle5.png' alt='jungle decoration' />
            <img className={styles['jungle6']} src='/assets/img/main/jungle6.png' alt='jungle decoration' />
            <img className={styles['jungle8']} src='/assets/img/main/jungle8.png' alt='jungle decoration' />
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