"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/general.module.scss';
import Link from 'next/link';
interface Props {}

function HeaderLayout () {
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
                <img className={styles['LOGO']} src="/assets/img/Descuentify.png" alt="logo" />
                <Link className={styles.link} href={'value'}>text</Link>
                <Link className={styles.link} href={'value'}>text</Link>
                <Link className={styles.link} href={'value'}>text</Link>
                <Link className={styles.link} href={'value'}>text</Link>
            </div>
            <div>
                <button>Contact</button>
            </div>
        </>
        :
        ''
}
</nav>
  )
}

export default HeaderLayout