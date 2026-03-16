import Layout from "../components/layout";
import styles from '../styles/Sobre.module.css'
import Card from '../components/card'

export default function Sobre(){
    return <Layout>
        {/* Hero */}
        <section className={`bg-primary ${styles.hero}`}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className="section-title" style={{ color: "#FFF" }}>
                Quem somos
              </h1>
              <h3><b>A Linqcode tem como objetivo transformar sua empresa</b></h3>
              <p>
                Especializada em consultoria de
                sistemas e desenvolvimento de softwares que
                buscam simplificar e unificar os processos de seus
                clientes através de soluções tecnológicas.
              </p>
            </div>
          </div>
        </section>

        {/* Nosso compromisso */}
        <section>
          <div className="container">
            <h1 className="section-title">Nosso compromisso<hr/></h1>

            <div className={`bg-tertiary ${styles.compromissoCard}`}>
              <div className={styles.compromissoImg}>
                <img src="/pessoa.svg" alt="Pessoas" />
              </div>
              <div className={styles.compromissoText}>
                <h2>Pessoas</h2>
                <p>
                  Antes de qualquer CNPJ lidamos com
                  pessoas, nosso anseio é poder tornar os
                  seus sonhos realidade, ver a satisfação
                  e o sorriso no rosto de nossos clientes.
                </p>
              </div>
            </div>

            <div className={`bg-secondary ${styles.compromissoCard}`}>
              <div className={styles.compromissoText}>
                <h2>Empresas</h2>
                <p>
                  Transformar empresas, para terem
                  processos mais enxutos, automatizados,
                  trazer de fato valor ao seu negócio.
                  Conhecendo a necessidade do mercado,
                  com experiências anteriores, queremos de
                  fato fazer a diferença.
                </p>
              </div>
              <div className={styles.compromissoImg}>
                <img src="/empresa.svg" alt="Empresas" />
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="bg-secondary" style={{ color: "#FFF" }}>
          <div className="container">
            <div className={styles.valoresGrid}>
              <div>
                <h1 className="section-title" style={{ color: "#FFF" }}>Valores<hr/></h1>
                <p className={styles.valoresIntro}>
                  A Linqcode é mais que uma empresa, somos pessoas que almejam impactar pessoas, trazer transformação, ser mais do que entregamos e criar relacionamentos duradouros.<br />
                  Com determinação e paixão no que fazemos, queremos oferecer a melhor experiência que nossos clientes possam ter.
                </p>
              </div>
              <div className={styles.valoresList}>
                <div className={styles.valorItem}>
                  <h3>Respeito</h3>
                  <p>Base dos nossos princípios, acima de tudo.</p>
                </div>
                <div className={styles.valorItem}>
                  <h3>Atenção</h3>
                  <p>Com empatia em entender a necessidade e o momento de nossos clientes.</p>
                </div>
                <div className={styles.valorItem}>
                  <h3>Compromisso</h3>
                  <p>Lealdade aos nossos princípios e confiabilidade com nossos clientes.</p>
                </div>
                <div className={styles.valorItem}>
                  <h3>Simplicidade</h3>
                  <p>Um bom trabalho está na sua simplicidade. Simplicidade não quer dizer menos, mas o essencial.</p>
                </div>
                <div className={styles.valorItem}>
                  <h3>Agilidade</h3>
                  <p>Fadados a processos retrógrados e lentos, queremos entregar a melhor experiência para nossos clientes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Segmento e Colaboração */}
        <section>
          <div className="container">
            <div className="displayColumn">
              <Card id="segmento" img="/segmentos.svg" title="Segmento" content="Por desenvolvermos soluções personalizadas, atingimos os mais diversos segmentos do mercado" />
              <Card id="colaboracao" img="/grupo.svg" title="Colaboração" content="Indivíduos e interações estão à frente de processos, ferramentas e contratos." />
            </div>
          </div>
        </section>
    </Layout>
}