import Head from "next/head";
import Footer from "./footer";
import Menu from "./menu";

import styles from './layout.module.css'
import Link from "next/link";

export default function Layout({ children, menuClassName, isDark }) {
    return (
        <>
            <Head>
                <title>Linqcode Consultoria e Desenvolvimento de sistemas</title>
                <link rel="icon" href="/favicon.ico"></link>
                <link rel="shortcut icon" href="favicon_96.ico"></link>
                <meta name="description" content="Desenvolvimento|App Mobile|Web Sites|E-Commerce|Sob Medida"></meta>
                <meta property="og:title" content="Linqcode Consultoria e Desenvolvimento de sistemas" />
                <meta property="og:url" content="https://www.linqcode.com/" />
                <meta property="og:description" content="Web Sites|Mobile|E-Commerce|Sob Medida"></meta>
                <meta property="og:image" content="https://site-linqcode.vercel.app/linqcode-logorgb1.png"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=%G-6Y2LW033JK%" >
                </script>

                <script 
                    async 
                    src="https://www.googletagmanager.com/gtag/js?id=UA-189980657-1">
                </script>

                <script dangerouslySetInnerHTML={
                    { __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){window.dataLayer.push(arguments)}
                        gtag("js", new Date());
                        gtag("config", "G-6Y2LW033JK");
                    `}
                }></script>
                
                <script dangerouslySetInnerHTML={
                    { __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-189980657-1');
                    `}
                }></script>

            </Head>
            <div className={styles.container}>
                <header>
                    <div>
                        <Menu className = {menuClassName} isDark = {isDark} />
                    </div>
                </header>
                <main>
                    {children}
                </main>
                <Footer />
            </div>
            <Link href="https://api.whatsapp.com/send/?phone=5511966342251&text=Ol%C3%A1%2C+quero+fazer+um+or%C3%A7amento%21+%0A&app_absent=0">
                <a target="_blank" className={styles.iconeWhatsApp}>
                    <img src="/whatsapp.svg" style={{ width: "6rem" }} />
                </a>
            </Link>
        </>
    )
}