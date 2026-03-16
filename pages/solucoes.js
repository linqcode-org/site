import Card from "../components/card";
import Layout from "../components/layout";
import styles from '../styles/solucoes.module.css'

export default function Solucoes(){
    return <Layout>
        <div>
          {/* Hero */}
          <section className={`bg-secondary ${styles.hero}`}>
            <div className="container">
              <div className={styles.heroContent}>
                <h1 className="section-title" style={{ color: "#FFF" }}>
                  Conheça nossas <br/> soluções
                </h1>
                <p>
                  Possuímos uma metodologia de desenvolvimento alinhada a resultados, com a estratégia necessária para que sua aplicação tenha o sucesso esperado.
                </p>
              </div>
            </div>
          </section>

          {/* Site Institucional */}
          <section className={styles.section} id="site-institucional">
            <div className="container">
              <div className={styles.servico}>
                <div className={styles.servicoImg}>
                  <img src="/web-responsive.svg" alt="Site responsivo" />
                </div>
                <div className={styles.servicoContent}>
                  <h1 className="section-title text-center">Site institucional</h1>
                  <p className="text-center">
                    <b>Crie agora mesmo o cartão de visita da sua empresa.</b>
                  </p>
                  <ul>
                    <li>Páginas <b className="primary">responsivas</b></li>
                    <li>Hospedagem inclusa</li>
                    <li>Conta de e-mail</li>
                    <li>Suporte</li>
                    <li>WhatsApp</li>
                    <li>Atualização Mensal</li>
                    <li>Certificado de segurança SSL</li>
                    <li>Relatórios Google Analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* E-Commerce */}
          <section className={`${styles.section} ${styles.sectionAlt}`} id="ecommerce">
            <div className="container">
              <div className={styles.servico}>
                <div className={styles.servicoContent}>
                  <h1 className="section-title text-center">E-Commerce</h1>
                  <p className="text-center">
                    <b>Tenha sua própria loja virtual personalizada.</b>
                  </p>
                  <ul>
                    <li>Páginas <b className="primary">responsivas</b></li>
                    <li>Hospedagem inclusa</li>
                    <li>Conta de e-mail</li>
                    <li>Suporte</li>
                    <li>WhatsApp</li>
                    <li>Chat Online</li>
                    <li>Atualização Mensal</li>
                    <li>Integração com meio de pagamento</li>
                    <li>Envio de e-mail para carrinho abandonado</li>
                    <li>Certificado de segurança SSL</li>
                    <li>Relatórios Google Analytics</li>
                  </ul>
                </div>
                <div className={styles.servicoImg}>
                  <img src="/img-ecommerce.svg" alt="E-commerce" />
                </div>
              </div>
            </div>
          </section>

          {/* Mobile */}
          <section className={styles.section} id="mobile">
            <div className="container">
              <div className={styles.servico}>
                <div className={styles.servicoImg}>
                  <img src="/img-mobile.svg" alt="Aplicativo mobile" />
                </div>
                <div className={styles.servicoContent}>
                  <h1 className="section-title text-center">Mobile</h1>
                  <p className="text-center">
                    <b>Integre a mobilidade aos seus processos.</b>
                  </p>
                  <ul>
                    <li>Disponível nas plataformas <b className="primary">Android</b> e <b className="primary">IOS</b></li>
                    <li>Desenvolvemos do zero</li>
                    <li>Totalmente customizável</li>
                    <li>Suporte</li>
                    <li>Manutenção</li>
                    <li>Integração com bases existentes</li>
                    <li>Mensageria Push</li>
                    <li>Atualização Mensal</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Aplicações Customizadas */}
          <section className={`${styles.section} ${styles.sectionAlt}`} id="aplicacao-customizada">
            <div className="container">
              <div className={styles.servico}>
                <div className={styles.servicoContent}>
                  <h1 className="section-title text-center">Aplicações Customizadas</h1>
                  <p className="text-center">
                    <b>Nada no mercado te atende, está na hora de desenvolver sua própria solução.</b>
                  </p>
                  <ul>
                    <li>Desenvolvemos do zero</li>
                    <li>Suporte</li>
                    <li>Manutenção</li>
                    <li>Hospedagem</li>
                    <li>Ambiente</li>
                  </ul>
                </div>
                <div className={styles.servicoImg}>
                  <img src="/custom-app.svg" alt="Aplicação customizada" />
                </div>
              </div>
            </div>
          </section>
        </div>
    </Layout>
}