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
                  para unificar processos <br/>
                  da sua empresa
                </h1>
                <div className={styles.saibaMais}>
                  <Link href="#o-que-fazemos"> 
                    <a>
                      ENTRE EM CONTATO
                    </a>
                  </Link> 
                </div>
              </div>
              {/* <div className={styles.containerButton}>
                <Link href="/contato">
                  <a>
                    <div></div>
                  </a>
                </Link>
              </div> */}
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
             Com amor e dedicação no que fazemos, buscamos em tornar sonho em realidade. <br />
             A satisfação de nossos clientes é o que nos move. 
           </p> 
           <div className={`${styles.cardsCircle}`}>
             <CardCircle title="Agilidade" content="Focamos na transformação, em acelerar resultados." />
             <CardCircle title="Simplicidade" content="Focamos naquilo que realmente importa e gere resultados." />
             <CardCircle title="Compromisso" content="Nosso cliente, nosso projeto! Trabalhamos como dono do produto." />
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
              <p>A LinqCode entende que cada projeto tem sua particularidade. Abaixo relacionamos as linguagens e frameworks no qual já trabalhos e possuímos expertise.</p>
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
                    <span>"O sistema é bom e não dá problemas, e quando acontece, <br/> a LinqCode sempre se prontifica em resolvê-los."</span><br/>
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

          {/* <form id="formulario" className={`${styles.formulario}`}>
            <div className="row">
                <div className="col-6">
                  <label>Nome</label><br/>
                  <input id="nome" name="nome" required />
                </div>
                <div className="col-6"> 
                  <label>E-mail</label><br/>
                  <input id="email" nome="email" type="email" required />
                </div>
                <div className="col-6">
                  <label>Empresa</label>
                  <input id="empresa" nome="empresa" />
                </div>
                <div className="col-6">
                  <label>Telefone</label>
                  <input id="telefone" nome="telefone" required />
                </div>
                <div className="col-12">
                  <label>Assunto</label>
                  <input id="assunto" nome="assunto" required />
                </div>
                <div className="col-12">
                  <label>Mensagem</label>
                  <textarea id="mensagem" nome="mensagem" required />
                </div>
                <div className="col-12">
                  <button type="submit">Enviar</button>
                </div>
            </div>
            </form> */}
         </div>
       </section>

       {/* <section>
         <div className="container">
            <h1 className="section-title">Tecnologias e aplicações</h1>
         </div>
       </section> */}
       {/* 
       <section style={{ backgroundColor: "#191C24", minHeight: "10vh" }}>
          <div className="container">
            <div>
              <h1 className="section-title" style={{ color: "#FFF" }}>Clientes atendidos</h1>
              <hr style={{ backgroundColor: "#FFF" }} />
              <div className={styles.clientesAtendidos}>
                  <img src="/logo-antaresgolden.png" alt="logo cliente Antares Golden" />
                  <img src="/logo-autonomoz.png" alt="logo cliente Autonomoz" />
                  <img src="/logo-brentservice.png" width="120px" alt="logo cliente Brent Service" />
                  <img src="/logo-funeraria.png" width="80px" alt="logo cliente funerária central de barueri" />
                  <img src="/logo-starsoft.svg" alt="logo cliente Starsoft" />
              </div>
            </div>
            <div style={{ marginTop: "5rem" }}>
              <h3 className="section-title" style={{ textAlign: "center", color: "#B63533", fontSize: "2rem" }}>
                O que nossos clientes dizem sobrem nós
              </h3>
              <div className={styles.depoimento}>
                <div>
                  <img src="/logo-funeraria.png" width="100px" alt="logo cliente funerária central de barueri" />
                </div>
                <div>
                  <h1>Funerária Central de Barueri</h1>
                  <span>"O sistema é bom e não dá problemas, e quando acontece, <br/> a LinqCode sempre se prontifica em resolvê-los."</span><br/>
                  <span>Sergio</span>
                </div>
              </div>
            </div>
          </div>
       </section> */}
    </Layout>
  )
}
