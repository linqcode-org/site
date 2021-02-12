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
    window.addEventListener('scroll', (event) => handleScrol(event));
  }, [])

  const handleScrol = (event) => {

    event.preventDefault();
    let nTop = event.srcElement.scrollingElement.scrollTop;

    if (nTop > 100){
      setStyleMenu(styles.menuOpacityOff)
    }else{
      setStyleMenu(styles.menuOpacityOn)
    }
  }

  return (
      <Layout isDark={true} menuClassName={styleMenu}>  
        <div className={styles.section}>
          <div className="container">
            <div className={styles.banner}>
              <div className={styles.title}>
                <h1>
                  Soluções tecnológicas <br/>
                  para unificar os processos <br/>
                  da sua empresa
                </h1>
                <div className={styles.saibaMais}>
                  <Link href="/contato"> 
                    <a>
                      ENTRE EM CONTATO
                    </a>
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
            <div className={`${styles.cards} displayColumn`}>
              <Card id="site-institucional" img="/web-responsive.svg" title="Web Sites" content="Crie agora mesmo o cartão de visita da sua empresa. Tenha seu próprio site." footer={<button className={styles.buttonSaibaMais}>Saiba mais</button>} link="/solucoes/#site-institucional" />
              <Card id="ecommerce" img="/img-ecommerce.svg" title="E-Commerce" content="Tenha sua loja na internet. Customize conforme seu negócio." footer={<button className={styles.buttonSaibaMais}>Saiba mais</button>} link="/solucoes/#ecommerce" />
              <Card id="mobile" img="/img-mobile.svg" title="Mobile" content="Desenvolvimento de Aplicativos. Integre a mobilidade ao seu negócio." footer={<button className={styles.buttonSaibaMais}>Saiba mais</button>} link="/solucoes/#mobile" />
              <Card id="app-customizado" img="/custom-app.svg" title="Custom App" content="Nada no mercado te atende por completo? Crie sua própria solução." footer={<button className={styles.buttonSaibaMais}>Saiba mais</button>} link="/solucoes/#aplicacao-customizada" />
            </div>
         </div>
       </section>

       <section style={{ backgroundColor: "#FF6000" }}>
         <div className="container">
           <h1 className="section-title" style={{ color: "#FFF" }}>
             Como fazemos
             <hr style={{ backgroundColor: "#FFF" }} />
           </h1>
           <p style={{ textAlign: "center", marginBottom: "3rem", color: "#FFF", fontSize: "1.4rem" }}>
             Nosso time está focado em gerar transformação. <br/>
             Sempre pensando em um relacionamento de confiança e parceria. <br />
             Com amor e dedicação no que fazemos, buscamos tornar sonhos em realidade. <br />
             A satisfação de nossos clientes é o que nos move. 
           </p> 
           <div className={`${styles.cardsCircle}`}>
             <CardCircle title="Agilidade" content="Focamos na transformação, em acelerar resultados." />
             <CardCircle title="Simplicidade" content="Focamos naquilo que realmente importa e gera resultados." />
             <CardCircle title="Compromisso" content="Nosso cliente, nosso projeto! Trabalhamos como donos do produto." />
           </div>
         </div>
       </section>
       
       

       <section style={{
         padding: "5rem 0 5rem 0",
         minHeight: "1vh"
       }}>
         <div className="container">
           <div className="text-center">
            <h1 className="section-title">Tecnologias</h1>
            <div style={{ width: "50%", margin: "auto" }}>
              <p>A Linqcode entende que cada projeto tem sua particularidade. Abaixo relacionamos as linguagens e frameworks no qual já trabalhos e possuímos expertise.</p>
            </div>
           </div>
          <div  style={{ fontSize: "1.5rem", width: "60%", margin: "auto", marginTop: "50px" }}>
            <div className="row">
              <div className="col-3"><b>BACKEND</b></div>
              <div className="col-9" style={{ fontWeight: "100" }}>ASP.NET CORE - JAVA - NODE.JS</div>
            </div>
            <div className="row">
              <div className="col-3"><b>FRONTEND</b></div>
              <div className="col-9" style={{ fontWeight: "100" }}>REACT.JS - NEXT.JS - ASP.NET WEB</div>
            </div>
            <div className="row">
              <div className="col-3"><b>MOBILE</b></div>
              <div className="col-9" style={{ fontWeight: "100" }}>REACT NATIVE - ANDROID JAVA</div>
            </div>
            <div className="row">
              <div className="col-3"><b>DATABASE</b></div>
              <div className="col-9" style={{ fontWeight: "100" }}>MYSQL - SQL SERVER - ORACLE</div>
            </div>
            <div className="row">
              <div className="col-3"><b>CLOUD</b></div>
              <div className="col-9" style={{ fontWeight: "100" }}>MICROSOFT AZURE - AMAZON AWS</div>
            </div>
            <div className="row">
              <div className="col-3"><b>QA</b></div>
              <div className="col-9" style={{ fontWeight: "100" }}>DOTNET - PYTHON</div>
            </div>
          </div>
         </div>
       </section>

       <section className="bg-secondary" style={{
         minHeight: "1vh",
         padding: "0"
       }}>
         <div className="container row">
           <div className="col-6">
              <h1 className="section-title" style={{ textAlign: "center", color: "#FFF" }}>
                O que nossos clientes dizem sobre nós
              </h1>
           </div>
           <div className="col-6">
            <div className={`${styles.depoimento}`}>
                  <div>
                    <img src="/logo-funeraria.png" style={{ maxWidth: "100px", width: "100%" }} alt="logo cliente funerária central de barueri" />
                  </div>
                  <div>
                    <h1>Funerária Central de Barueri</h1>
                    <span>"O sistema é bom e não dá problemas, e quando acontece, <br/> a Linqcode sempre se prontifica em resolvê-los."</span><br/>
                    <span>Sergio</span>
                  </div>
                </div>
           </div>
         </div>
       </section>

       <section>
         <div className="container">
          <h1 className="section-title secondary" >Envie seus dados <br /> que entramos em contato com você.</h1>
          <FormContato className={styles.formulario} />
         </div>
       </section>
    </Layout>
  )
}
