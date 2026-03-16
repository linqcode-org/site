import Link from "next/link";
import Layout from "../components/layout";
import styles from '../styles/Clientes.module.css'

const clientes = [
  { nome: "StarSoft", logo: "/starsoft.png" },
  { nome: "Antares Golden", logo: "/logo-antaresgolden.png" },
  { nome: "Brent Service", logo: "/logo-brentservice.png" },
  { nome: "Autonomoz", logo: "/autonomoz.png" },
  { nome: "Agile Innovatti", logo: "/agile-innovatti-icon.png" },
  { nome: "Aparas Macedo", logo: "/aparas-macedo.png" },
  { nome: "Funerária Central Barueri", logo: "/logo-funeraria.png" },
  { nome: "R&S Accountants", logo: "/rsaccountants.png" },
  { nome: "Schioppa", logo: "/schioppa.webp" },
  { nome: "MinistrApp", logo: "/ministrapp-icon.png" },
];

export default function Clientes(){
    return <Layout>
      {/* Hero */}
      <section className={`bg-primary ${styles.hero}`}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="section-title" style={{ color: "#FFF" }}>
              Clientes que confiaram <br/> em nosso trabalho
            </h1>
            <p>
              Temos orgulho de ter contribuído com a transformação digital de empresas de diversos segmentos.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de clientes */}
      <section style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <h1 className="section-title">Nossos parceiros<hr/></h1>
          <div className={styles.clientesGrid}>
            {clientes.map((cliente) => (
              <div key={cliente.nome} className={styles.clienteCard}>
                <img 
                  src={cliente.logo} 
                  alt={`Logo ${cliente.nome}`} 
                  className={styles.clienteLogo} 
                />
                <span className={styles.clienteNome}>{cliente.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Quer fazer parte desta lista?</h2>
          <p style={{ marginBottom: "2rem", color: "#555" }}>Entre em contato e descubra como podemos ajudar sua empresa.</p>
          <Link href="/contato" className={styles.ctaButton}>
            ENTRE EM CONTATO
          </Link>
        </div>
      </section>
    </Layout>
}