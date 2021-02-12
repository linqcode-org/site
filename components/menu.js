import Link from 'next/link'
import { useEffect, useState } from 'react'
import ActiveLink from './activeLink'
import Brand from './brand'
import styles from './menu.module.css'

function ItemMenu({href, className, children }){
    return (
        <ActiveLink href={href} activeClassName={`${className || ''} ${styles.active}`}><a>{children}</a></ActiveLink>
    )
}

export default function Menu({ className, isDark }){

    const [styleMenu, setStyleMenu] = useState(styles.menuOpacityOn);
    const [toggle, setToggle] = useState(false);
    const [styleOn, setStyleOn] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', (event) => handleScrol(event));
    }, [])

    useEffect(() => {

        setStyleOn(toggle ? styles.on : '');

    }, [toggle])

    const handleScrol = (event) => {

        event.preventDefault();
        let nTop = event.srcElement.scrollingElement.scrollTop;

        if (nTop > 50){
        setStyleMenu(styles.menuOpacityOff)
        }else{
        setStyleMenu(styles.menuOpacityOn)
        }
    }

    const handleToogle = () => setToggle(!toggle);

    return (
        <div className={`${isDark ? styles.menuDark : ''} ${styleMenu || ''} ${className || ''} ${styles.container}`}>
            <div className="container">
                <div className={styles.menu}>
                    <Link href="/"><a><Brand isBlack={isDark} /></a></Link>
                    <div className={`${styles.menuSection} ${styleOn}`}>
                        <div className={styles.menuToggle} onClick={() => handleToogle()}>
                            <div className={styles.one}></div>
                            <div className={styles.two}></div>
                            <div className={styles.three}></div>
                        </div>
                        <nav>
                            <ul>
                            <li>
                                <ItemMenu href="/">Home</ItemMenu>
                            </li>
                            <li>
                                <ItemMenu href="/sobre">Quem somos</ItemMenu>
                            </li>
                            <li>
                                <ItemMenu href="/solucoes">Soluções</ItemMenu>  
                            </li>
                            <li>
                                <ItemMenu href="/contato">Contato</ItemMenu>
                            </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            
            {/* <div className="container">
                <nav className={styles.nav}>
                    <div className={styles.navItem}>
                        <Link href="/"><a><Brand isBlack={isDark} /></a></Link>
                        <div className={`${styles.links}`}>
                            <ItemMenu href="/">Home</ItemMenu>
                            <ItemMenu href="/sobre">Quem somos</ItemMenu>
                            <ItemMenu href="/solucoes">Soluções</ItemMenu>
                            {/* <ItemMenu href="/projetos">Projetos</ItemMenu>
                            <ItemMenu href="/clientes">Clientes</ItemMenu> }
                            <ItemMenu href="/contato">Contato</ItemMenu>
                        </div>
                    </div>
                </nav>
            </div>
            <div className={`${styles.menuIcon}`}>
                <div className={styles.lineOnde} />
                <div className={styles.lineTwo} />
                <div className={styles.lineThree} />
            </div> */}

        </div>
    )
}