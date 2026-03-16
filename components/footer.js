import Link from "next/link";
import styles from './footer.module.css';

export default function Footer() {
    return <footer>
        <section style={{ minHeight: "auto", padding: "4rem 0 2rem" }}>
            <div className="container">
                <div className={styles.footer}>
                    <div className={styles.brandBlock}>
                        <img src="/logo-white.png" alt="Linqcode" className={styles.logo} />
                        <p className={styles.brandDesc}>
                            Consultoria e desenvolvimento de sistemas para empresas que precisam unificar processos e evoluir com tecnologia.
                        </p>
                        <div className={styles.socials}>
                            <a href="https://www.facebook.com/linqcode" target="_blank" rel="noreferrer">
                                <img src="/facebook.svg" alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/linqcode/" target="_blank" rel="noreferrer">
                                <img src="/instagram.svg" alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/company/linqcode" target="_blank" rel="noreferrer">
                                <img src="/linkedin.svg" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    <div className={styles.linksColumn}>
                        <h3 className={styles.titleLinks}>Nos conheça</h3>
                        <div className={styles.itemLinks}>
                            <Link href="/" className={styles.itemMenuFooter}>Home</Link>
                            <Link href="/sobre" className={styles.itemMenuFooter}>Quem somos</Link>
                            <Link href="/solucoes" className={styles.itemMenuFooter}>Soluções</Link>
                            <Link href="/clientes" className={styles.itemMenuFooter}>Clientes</Link>
                            <Link href="/contato" className={styles.itemMenuFooter}>Contato</Link>
                        </div>
                    </div>

                    <div className={styles.linksColumn}>
                        <h3 className={styles.titleLinks}>O que oferecemos</h3>
                        <div className={styles.itemLinks}>
                            <Link href="/solucoes/#site-institucional" className={styles.itemMenuFooter}>Web Sites</Link>
                            <Link href="/solucoes/#ecommerce" className={styles.itemMenuFooter}>E-Commerce</Link>
                            <Link href="/solucoes/#mobile" className={styles.itemMenuFooter}>Mobile</Link>
                            <Link href="/solucoes/#aplicacao-customizada" className={styles.itemMenuFooter}>Aplicações Customizadas</Link>
                        </div>
                    </div>

                    <div className={styles.linksColumn}>
                        <h3 className={styles.titleLinks}>Contate-nos</h3>
                        <div className={styles.contactList}>
                            <a href="https://api.whatsapp.com/send/?phone=5511966342251&text=Ol%C3%A1%2C+quero+fazer+um+or%C3%A7amento%21+%0A&app_absent=0" target="_blank" rel="noreferrer" className={styles.contactItem}>
                                <img src="/whatsapp.svg" alt="" />
                                <span>+55 11 9 6634-2251</span>
                            </a>
                            <a href="mailto:contato@linqcode.com.br" className={styles.contactItem}>
                                <img src="/emails.svg" alt="" />
                                <span>contato@linqcode.com.br</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <span>LINQCODE CONSULTORIA LTDA</span>
                    <span>38.350.776/0001-04</span>
                </div>
            </div>
        </section>
    </footer>
}