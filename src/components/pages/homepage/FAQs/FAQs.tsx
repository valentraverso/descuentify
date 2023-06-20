"use client"

import styles from './FAQs.module.scss';
import React, { useState } from 'react';
import Image from 'next/image';
interface Props { }

function FAQs() {

    const [open, setOpen] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false
    })

    return (
        <div className={styles['container-FAQs']}>
            <div className={styles['container-title']}>
                <h2 className={styles.title}>FAQs</h2>
            </div>
            {/* QUESTION 1 */}
            <div onClick={() => setOpen({ ...open, question1: !open.question1 })} className={styles['container-question']}>
                <div className={styles['container-head']}>

                    <div className={styles.head}>
                        <div className={styles['container-icon']}>
                            {
                                !open.question1
                                    ?
                                    <Image className={styles.icon} src='/assets/svg/arrowRigth.svg' alt='arrow-rigth' width={15} height={15} />
                                    :
                                    <Image className={styles.icon} src='/assets/svg/arrowDown.svg' alt='arrow-down' width={15} height={15} />
                            }
                        </div>
                        <div className={styles.question}>
                            Porque regalar consumisiones a los clientes?
                        </div>
                    </div>
                </div>

                <div className={styles['container-answer']}>

                    {
                        open.question1 &&
                        <div className={styles.answer}>
                            <hr className={styles.hr} />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorum quod eos eligendi laboriosam harum neque doloremque consectetur est, sequi aut atque. Mollitia omnis sunt ad, in quas est veritatis?
                        </div>
                    }
                </div>
            </div>


            {/* QUESTION 2 */}
            <div onClick={() => setOpen({ ...open, question2: !open.question2 })} className={styles['container-question']}>
                <div className={styles['container-head']}>

                    <div className={styles.head}>
                        <div className={styles['container-icon']}>
                            {
                                !open.question2
                                    ?
                                    <Image className={styles.icon} src='/assets/svg/arrowRigth.svg' alt='arrow-rigth' width={15} height={15} />
                                    :
                                    <Image className={styles.icon} src='/assets/svg/arrowDown.svg' alt='arrow-down' width={15} height={15} />
                            }
                        </div>
                        <div className={styles.question}>
                            Porque regalar consumisiones a los clientes?
                        </div>
                    </div>
                </div>

                <div className={styles['container-answer']}>

                    {
                        open.question2 &&
                        <div className={styles.answer}>
                            <hr className={styles.hr} />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorum quod eos eligendi laboriosam harum neque doloremque consectetur est, sequi aut atque. Mollitia omnis sunt ad, in quas est veritatis?
                        </div>
                    }
                </div>
            </div>



             {/* QUESTION 3 */}
             <div onClick={() => setOpen({ ...open, question3: !open.question3 })} className={styles['container-question']}>
                <div className={styles['container-head']}>

                    <div className={styles.head}>
                        <div className={styles['container-icon']}>
                            {
                                !open.question3
                                    ?
                                    <Image className={styles.icon} src='/assets/svg/arrowRigth.svg' alt='arrow-rigth' width={15} height={15} />
                                    :
                                    <Image className={styles.icon} src='/assets/svg/arrowDown.svg' alt='arrow-down' width={15} height={15} />
                            }
                        </div>
                        <div className={styles.question}>
                            Porque regalar consumisiones a los clientes?
                        </div>
                    </div>
                </div>

                <div className={styles['container-answer']}>

                    {
                        open.question3 &&
                        <div className={styles.answer}>
                            <hr className={styles.hr} />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorum quod eos eligendi laboriosam harum neque doloremque consectetur est, sequi aut atque. Mollitia omnis sunt ad, in quas est veritatis?
                        </div>
                    }
                </div>
            </div>




            {/* QUESTION 4 */}
            <div onClick={() => setOpen({ ...open, question4: !open.question4 })} className={styles['container-question']}>
                <div className={styles['container-head']}>

                    <div className={styles.head}>
                        <div className={styles['container-icon']}>
                            {
                                !open.question4
                                    ?
                                    <Image className={styles.icon} src='/assets/svg/arrowRigth.svg' alt='arrow-rigth' width={15} height={15} />
                                    :
                                    <Image className={styles.icon} src='/assets/svg/arrowDown.svg' alt='arrow-down' width={15} height={15} />
                            }
                        </div>
                        <div className={styles.question}>
                            Porque regalar consumisiones a los clientes?
                        </div>
                    </div>
                </div>

                <div className={styles['container-answer']}>

                    {
                        open.question4 &&
                        <div className={styles.answer}>
                            <hr className={styles.hr} />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorum quod eos eligendi laboriosam harum neque doloremque consectetur est, sequi aut atque. Mollitia omnis sunt ad, in quas est veritatis?
                        </div>
                    }
                </div>
            </div>



            {/* QUESTION 5 */}
            <div onClick={() => setOpen({ ...open, question5: !open.question5 })} className={styles['container-question']}>
                <div className={styles['container-head']}>

                    <div className={styles.head}>
                        <div className={styles['container-icon']}>
                            {
                                !open.question5
                                    ?
                                    <Image className={styles.icon} src='/assets/svg/arrowRigth.svg' alt='arrow-rigth' width={15} height={15} />
                                    :
                                    <Image className={styles.icon} src='/assets/svg/arrowDown.svg' alt='arrow-down' width={15} height={15} />
                            }
                        </div>
                        <div className={styles.question}>
                            Porque regalar consumisiones a los clientes?
                        </div>
                    </div>
                </div>

                <div className={styles['container-answer']}>

                    {
                        open.question5 &&
                        <div className={styles.answer}>
                            <hr className={styles.hr} />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorum quod eos eligendi laboriosam harum neque doloremque consectetur est, sequi aut atque. Mollitia omnis sunt ad, in quas est veritatis?
                        </div>
                    }
                </div>
            </div>





        </div>
    )
}

export default FAQs