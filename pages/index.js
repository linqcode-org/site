import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Card from '../components/card'
import CardCircle from '../components/cardCircle'
import FormContato from '../components/formContato'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [styleMenu, setStyleMenu] = useState(styles.menuOpacityOn);

  useEffect(() => {
    const handleScroll = () => {
      const nTop = window.scrollY;
      setStyleMenu(nTop > 100 ? styles.menuOpacityOff : styles.menuOpacityOn);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
      <Layout isDark={true} menuClassName={styleMenu}>  
        <div className={styles.section}>
          <div className={styles.heroOverlay}></div>
          <div className="container">
            <div className={styles.banner}>
              <div className={styles.title}>
                <h1>
                  Soluções tecnológicas<br/>
                  para unificar os processos<br/>
                  da sua empresa
                </h1>
                <p className={styles.heroSubtitle}>
                  Consultoria e desenvolvimento de sistemas sob medida para transformar seu negócio.
                </p>
                <div className={styles.heroActions}>
                  <Link href="/contato" className={styles.btnPrimary}>
                    ENTRE EM CONTATO
                  </Link>
                  <Link href="/solucoes" className={styles.btnSecondary}>
                    CONHEÇA NOSSAS SOLUÇÕES
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

       <section id="o-que-fazemos" name="o-que-fazemos"> 
         <div className="container">
            <h1 className="section-title">
              O que fazemos
              <hr/>
            </h1>
            <p className={styles.sectionSubtitle}>
              Desenvolvemos soluções digitais que simplificam processos e geram resultados reais para o seu negócio.
            </p>
            <div className={styles.cards}>
              <Card id="site-institucional" img="/web-responsive.svg" title="Web Sites" content="Crie agora mesmo o cartão de visita da sua empresa. Tenha seu próprio site." footer={<button className={styles.buttonSaibaMais}>Saiba mais</button>} link="/solucoes/#site-institucional" />
              <Card id="ecommerce" img="/img-ecommerce.svg" title="E-Commerce" content="Tenha sua loja na internet. Customize conforme seu negócio." footer={<button className={styles.buttonSaibaMais}>Saiba mais</button>} link="/solucoes/#ecommerce" />
              <Card id="mobile" img="/img-mobile.svg" title="Mobile" content="Desenvolvimento de Aplicativos. Integre a mobilidade ao seu negócio." footer={<button className={styles.buttonSaibaMais}>Saiba mais</button>} link="/solucoes/#mobile" />
              <Card id="app-customizado" img="/custom-app.svg" title="Custom App" content="Nada no mercado te atende por completo? Crie sua própria solução." footer={<button className={styles.buttonSaibaMais}>Saiba mais</button>} link="/solucoes/#aplicacao-customizada" />
            </div>
         </div>
       </section>

       <section className={styles.sectionComoFazemos}>
         <div className="container">
           <h1 className="section-title" style={{ color: "#FFF" }}>
             Como fazemos
             <hr style={{ background: "#FFF" }} />
           </h1>
           <p className={styles.sectionSubtitleLight}>
             Nosso time está focado em gerar transformação.<br/>
             Sempre pensando em um relacionamento de confiança e parceria.<br/>
             Com amor e dedicação no que fazemos, buscamos tornar sonhos em realidade.<br/>
             A satisfação de nossos clientes é o que nos move. 
           </p> 
           <div className={`${styles.cardsCircle}`}>
             <CardCircle title="Agilidade" content="Focamos na transformação, em acelerar resultados." />
             <CardCircle title="Simplicidade" content="Focamos naquilo que realmente importa e gera resultados." />
             <CardCircle title="Compromisso" content="Nosso cliente, nosso projeto! Trabalhamos como donos do produto." />
           </div>
         </div>
       </section>

       <section className={styles.sectionTech}>
         <div className="container">
           <div className="text-center">
            <h1 className="section-title">Tecnologias</h1>
            <p className={styles.sectionSubtitle}>
              Utilizamos as melhores tecnologias do mercado para entregar soluções robustas, escaláveis e modernas.
            </p>
           </div>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <div className={styles.techIcon}><Image src="/tech-backend.svg" alt="Backend" width={80} height={80} /></div>
              <div className={styles.techLabel}>BACKEND</div>
              <div className={styles.techDesc}>APIs robustas e microsserviços escaláveis</div>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}><Image src="/tech-frontend.svg" alt="Frontend" width={80} height={80} /></div>
              <div className={styles.techLabel}>FRONTEND</div>
              <div className={styles.techDesc}>Interfaces modernas e responsivas</div>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}><Image src="/tech-mobile.svg" alt="Mobile" width={80} height={80} /></div>
              <div className={styles.techLabel}>MOBILE</div>
              <div className={styles.techDesc}>Apps nativos e multiplataforma</div>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}><Image src="/tech-database.svg" alt="Banco de Dados" width={80} height={80} /></div>
              <div className={styles.techLabel}>BANCO DE DADOS</div>
              <div className={styles.techDesc}>Modelagem e alta disponibilidade</div>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}><Image src="/tech-cloud.svg" alt="Cloud" width={80} height={80} /></div>
              <div className={styles.techLabel}>CLOUD</div>
              <div className={styles.techDesc}>Infraestrutura em nuvem segura</div>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}><Image src="/tech-qa.svg" alt="Qualidade" width={80} height={80} /></div>
              <div className={styles.techLabel}>QUALIDADE</div>
              <div className={styles.techDesc}>Testes automatizados e CI/CD</div>
            </div>
          </div>
         </div>
       </section>

       <section className="bg-secondary">
         <div className="container">
           <div className={styles.testimonialGrid}>
             <div className={styles.testimonialTitle}>
                <h1 className="section-title" style={{ color: "#FFF" }}>
                  O que nossos clientes dizem sobre nós
                </h1>
             </div>
             <div className={styles.testimonialContent}>
                <div className={styles.depoimento}>
                  <div>
                    <img src="/logo-funeraria.png" style={{ maxWidth: "100px", width: "100%", borderRadius: "12px" }} alt="logo cliente funerária central de barueri" />
                  </div>
                  <div>
                    <h2 style={{ marginTop: 0, marginBottom: "0.5rem" }}>Funerária Central de Barueri</h2>
                    <p style={{ fontSize: "1.1rem", fontStyle: "italic", opacity: 0.9, lineHeight: 1.6 }}>&ldquo;O sistema é bom e não dá problemas, e quando acontece, a Linqcode sempre se prontifica em resolvê-los.&rdquo;</p>
                    <span style={{ opacity: 0.7 }}>Sergio</span>
                  </div>
                </div>
             </div>
           </div>
         </div>
       </section>

       <section className={styles.sectionClientes}>
         <div className="container">
           <h1 className="section-title">
             Nossos clientes
             <hr />
           </h1>
           <div className={styles.clientesStrip}>
             <div className={styles.clienteItem}>
               <img className={styles.clienteLogoHome} src="/starsoft.png" alt="StarSoft" />
               <span className={styles.clienteNome}>StarSoft</span>
             </div>
             <div className={styles.clienteItem}>
               <img className={styles.clienteLogoHome} src="/logo-antaresgolden.png" alt="Antares Golden" />
               <span className={styles.clienteNome}>Antares Golden</span>
             </div>
             <div className={styles.clienteItem}>
               <img className={styles.clienteLogoHome} src="/logo-brentservice.png" alt="Brent Service" />
               <span className={styles.clienteNome}>Brent Service</span>
             </div>
             <div className={styles.clienteItem}>
               <img className={styles.clienteLogoHome} src="/autonomoz.png" alt="Autonomoz" />
               <span className={styles.clienteNome}>Autonomoz</span>
             </div>
             <div className={styles.clienteItem}>
               <img className={styles.clienteLogoHome} src="/agile-innovatti-icon.png" alt="Agile Innovatti" />
               <span className={styles.clienteNome}>Agile Innovatti</span>
             </div>
             <div className={styles.clienteItem}>
               <img className={styles.clienteLogoHome} src="/logo-funeraria.png" alt="Funerária Central" />
               <span className={styles.clienteNome}>Funerária Central</span>
             </div>
             <div className={styles.clienteItem}>
               <img className={styles.clienteLogoHome} src="/schioppa.webp" alt="Schioppa" />
               <span className={styles.clienteNome}>Schioppa</span>
             </div>
             <div className={styles.clienteItem}>
               <img className={styles.clienteLogoHome} src="/ministrapp-icon.png" alt="MinistrApp" />
               <span className={styles.clienteNome}>MinistrApp</span>
             </div>
           </div>
           <div style={{ textAlign: "center", marginTop: "2rem" }}>
             <Link href="/clientes" className={styles.btnPrimary}>
               VER TODOS OS CLIENTES
             </Link>
           </div>
         </div>
       </section>

       <section className={styles.sectionContato}>
         <div className="container">
          <h1 className="section-title" style={{ color: "#FFF" }}>Envie seus dados<br/> que entraremos em contato com você.</h1>
          <div className={styles.contatoGrid}>
            <div className={styles.contatoForm}>
              <FormContato className={styles.formulario} />
            </div>
          </div>
         </div>
       </section>
    </Layout>
  )
}
