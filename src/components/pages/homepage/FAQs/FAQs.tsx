"use client"

import styles from './FAQs.module.scss';
import React, { useState } from 'react';

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
            <div onClick={() => setOpen({ ...open, question1: !open.question1 })} className={styles['container-question']}>
                <div className={styles.head}>
                    <div className={styles.icon}>
                        icon
                    </div>
                    <div className={styles.question}>
                        question
                    </div>
                </div>
                {
                    open.question1 &&
                    <div className={styles.answer}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorum quod eos eligendi laboriosam harum neque doloremque consectetur est, sequi aut atque. Mollitia omnis sunt ad, in quas est veritatis?
                    </div>
                }
            </div>
        </div>
    )
}

export default FAQs