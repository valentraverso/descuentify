import React from 'react';
import styles from './About.module.scss';
import Image from 'next/image';

interface Props {}

const About = () => {
  return (
    <div className={styles['container-about']}>


        <div className={styles['container-title']}>
            <h2 className={styles['title']}>About the platform 📱</h2>
        </div>

        <div className={styles['container-separation']}>

            <div className={styles['container-side']}>
                
                    <h3 className={styles['side-title']}>👤 Usuario</h3>

                    <div className={styles['container-list']}>
                        <div className={styles.row}>
                            <p className={styles.p}>ya tu sape, dice el bananero</p>
                            <div className={styles.icon} >🔷</div>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.p}>ya tu sape, dice el bananero</p>
                            <div className={styles.icon} >🔷</div>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.p}>ya tu sape, dice el bananero</p>
                            <div className={styles.icon} >🔷</div>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.p}>ya tu sape, dice el bananero</p>
                            <div className={styles.icon} >🔷</div>
                        </div>
                    </div>
               


            </div>

            {/* <div className={styles['colum']}></div> */}
            <Image src='/assets/img/main/FifyMA.png' alt='Fify' width={200} height={200}/>
            <div className={styles['container-side']}>
                
                    <h3 className={styles['side-title']}>🏪 Compañia</h3>

                    <div className={styles['container-list']}>
                        <div className={styles.row}>
                            <div className={styles.icon} >🔷</div>
                            <p className={styles.p}>ya tu sape, dice el bananero</p>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.icon} >🔷</div>
                            <p className={styles.p}>ya tu sape, dice el bananero</p>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.icon} >🔷</div>
                            <p className={styles.p}>ya tu sape, dice el bananero</p>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.icon} >🔷</div>
                            <p className={styles.p}>ya tu sape, dice el bananero</p>
                        </div>
                    </div>
               


            </div>
        </div>
    </div>
  )
}

export default About