import Head from "next/head";
import Footer from "./footer";
import Menu from "./menu";

import styles from './layout.module.css'
import Link from "next/link";

export default function Layout({ children, menuClassName, isDark }) {
    return (
        <>
            <Head>
                <title>LinqCode</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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