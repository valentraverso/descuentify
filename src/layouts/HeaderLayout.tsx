"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/general.module.scss';
import Link from 'next/link';
interface Props { }

function HeaderLayout() {
    const lastScrollTop = useRef(0);
    const [isNavBarVisible, setIsNavBarVisible] = useState(true)

    const handleScroll = () => {
        const { pageYOffset } = window;

        if (pageYOffset > lastScrollTop.current) {
            setIsNavBarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
            setIsNavBarVisible(true);
        }
        lastScrollTop.current = pageYOffset;
    }

    useEffect(() => {
        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );
        // return window.removeEventListener(
        //     "scroll", handleScroll
        // )
    }, [])
    return (

        <nav className={`${isNavBarVisible ? styles['nav-visible'] : "nav"
            }`}>
            {
                isNavBarVisible
                    ?
                    <>
                        <div className={styles['nav-items']}>
                            <div className={styles['LOGO']}></div>
                            {/* <img className={styles['LOGO']} src="/assets/img/Descuentify.png" alt="logo" /> */}
                            <Link className={styles.link} href='#About'>About</Link>
                            <Link className={styles.link} href='#FAQs'>FAQs</Link>
                            <Link className={styles.link} href='#Contact'>Contact</Link>
                        </div>
                        <div>
                            <button className={styles['principal-button-header']}>Contact</button>
                        </div>
                    </>
                    :
                    <div className={styles['nav-none']}></div>
            }
        </nav>
    )
}

export default HeaderLayout