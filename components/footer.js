import Link from "next/link";
import styles from './footer.module.css';

export default function Footer() {
    return <footer>
        <section style={{
            minHeight: "20vh"
        }}>
            <div className="container">
                <div className={styles.footer}>
                    <div className={styles.menuLinks}>
                        <div>
                            <h3 className={styles.titleLinks}>Nos conheça</h3>
                            <div className={styles.itemLinks}>
                                <Link href="/">
                                    <a className={styles.itemMenuFooter}>Home</a>
                                </Link>
                                <Link href="/sobre">
                                    <a className={styles.itemMenuFooter}>Quem somos</a>
                                </Link>
                                <Link href="/solucoes">
                                    <a className={styles.itemMenuFooter}>Soluções</a>
                                </Link>
                                <Link href="/contato">
                                    <a className={styles.itemMenuFooter}>Contato</a>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className={styles.titleLinks}>O que oferemos</h3>
                            <div className={styles.itemLinks}>
                                <Link href="/solucoes/#site-institucional">
                                    <a className={styles.itemMenuFooter}>Web Sites</a>
                                </Link>
                                <Link href="/solucoes/#ecommerce">
                                    <a className={styles.itemMenuFooter}>E-Commerce</a>
                                </Link>
                                <Link href="/solucoes/#mobile">
                                    <a className={styles.itemMenuFooter}>Mobile</a>
                                </Link>
                                <Link href="/solucoes/#aplicacao-customizada">
                                    <a className={styles.itemMenuFooter}>Aplicações Customizadas</a>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className={styles.titleLinks}>Siga-nos</h3>
                            <div className={styles.itemLinks}>
                                <Link href="https://www.facebook.com/linqcode">
                                    <a target="_blank" className="text-center">
                                        <img src="/facebook.svg" className={styles.redesSociais}/>
                                    </a>
                                </Link>
                                <Link href="https://www.instagram.com/linqcode/">
                                    <a target="_blank" className="text-center">
                                        <img src="/instagram.svg" className={styles.redesSociais} />
                                    </a>
                                </Link>
                                <Link href="https://www.linkedin.com/company/linqcode">
                                    <a target="_blank" className="text-center">
                                        <img src="/linkedin.svg" className={styles.redesSociais}/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr className={styles.divisor} />
                    </div>
                    <div className={styles.contato}>
                        <div style={{ textAlign: "center" }}><img src="/logo-white.png" width="200px" /></div>
                        <h1 style={{ color: "#FFF" }}>Contate-nos</h1>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "1rem"  }}><img src="/whatsapp.svg" width="35px" /><span style={{ fontSize: "1.2rem", paddingLeft: "20px" }}>+ 55 11 9 6634-2251</span></div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"  }}><img src="/emails.svg" width="35px" /><span style={{ fontSize: "1.2rem", paddingLeft: "20px" }}><Link href="mailto: contato@linqcode.com.br"><a>contato@linqcode.com.br</a></Link></span></div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
}