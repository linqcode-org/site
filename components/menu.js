import Link from 'next/link'
import { useEffect, useState } from 'react'
import ActiveLink from './activeLink'
import Brand from './brand'
import styles from './menu.module.css'

function ItemMenu({href, className, children, onClick }){
    return (
        <ActiveLink href={href} activeClassName={`${className || ''} ${styles.active}`} onClick={onClick}>{children}</ActiveLink>
    )
}

export default function Menu({ className, isDark }){

    const [isScrolled, setIsScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleToggle = () => setToggle(!toggle);
    const closeMenu = () => setToggle(false);

    const menuStyle = isDark && !isScrolled && !toggle 
        ? styles.menuTransparent 
        : styles.menuSolid;

    return (
        <div className={`${isDark ? styles.menuDark : ''} ${menuStyle} ${className || ''} ${styles.container}`}>
            <div className="container">
                <div className={styles.menu}>
                    <Link href="/"><Brand isBlack={isDark && !isScrolled && !toggle} /></Link>
                    <div className={`${styles.menuSection} ${toggle ? styles.on : ''}`}>
                        <div className={styles.menuToggle} onClick={handleToggle}>
                            <div className={styles.one}></div>
                            <div className={styles.two}></div>
                            <div className={styles.three}></div>
                        </div>
                        <nav>
                            <ul>
                                <li><ItemMenu href="/" onClick={closeMenu}>Home</ItemMenu></li>
                                <li><ItemMenu href="/sobre" onClick={closeMenu}>Quem somos</ItemMenu></li>
                                <li><ItemMenu href="/solucoes" onClick={closeMenu}>Soluções</ItemMenu></li>
                                <li><ItemMenu href="/clientes" onClick={closeMenu}>Clientes</ItemMenu></li>
                                <li><ItemMenu href="/contato" onClick={closeMenu}>Contato</ItemMenu></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}