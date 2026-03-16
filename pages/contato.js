import Link from "next/link";
import FormContato from "../components/formContato";
import Layout from "../components/layout";
import styles from '../styles/contato.module.css'

export default function Contato(){
    return <Layout>
        {/* Hero */}
        <section className={`bg-secondary ${styles.hero}`}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className="section-title" style={{ color: "#FFF" }}>
                Tudo certo! <br />
                vamos começar.
              </h1>
            </div>
          </div>
        </section>

        {/* Formulário + Info */}
        <section>
          <div className="container">
            <h1 className="section-title secondary">
              Envie seus dados <br /> que entraremos em contato com você.
            </h1>
            <div className={styles.contatoGrid}>
              <div className={styles.formCol}>
                <FormContato className={styles.formulario} />
              </div>
              <div className={styles.infoCol}>
                <h2>Contate-nos</h2>
                <div className={styles.infoItem}>
                  <img src="/whatsapp.svg" width="32" alt="WhatsApp" />
                  <a href="https://api.whatsapp.com/send/?phone=5511966342251&text=Ol%C3%A1%2C+quero+fazer+um+or%C3%A7amento%21+%0A&app_absent=0" target="_blank" rel="noopener noreferrer">
                    + 55 11 9 6634-2251
                  </a>
                </div>
                <div className={styles.infoItem}>
                  <img src="/emails.svg" width="32" alt="E-mail" />
                  <a href="mailto:contato@linqcode.com.br">contato@linqcode.com.br</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Layout>
}