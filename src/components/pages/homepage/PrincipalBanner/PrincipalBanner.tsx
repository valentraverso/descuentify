import Image from 'next/image';
import styles from './PrincipalBanner.module.scss';

export default function PrincipalBanner() {
    return (
        <section className={styles["container-principal-banner"]}>
            <div className={styles["container-grid-principal"]}>
                <div>
                    <span className={styles["first-text-main"]}>Bienvenido a la revolución de la <span className={styles.purple}>fidelización.</span></span>
                    <span className={styles["principal-button-main"]}>Me quiero unir</span>
                </div>
                <div>
                    <Image src="/assets/images/main/mobile-map-iphone.png" alt='image mobile' width={500} height={500} />
                </div>
            </div>
        </section>
    )
}