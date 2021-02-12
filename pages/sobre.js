import Layout from "../components/layout";
import styles from '../styles/Sobre.module.css'
import Card from '../components/card'

export default function Sobre(){
    return <Layout>
                <section className="bg-primary" style={{
                        backgroundImage: "url(/linqcode-logorgb1.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "auto 70%",
                        backgroundPosition: "right",
                        backgroundPositionX: "90%",
                        backgroundBlendMode: "luminosity",
                        minHeight: "3vh",
                        marginTop: "8rem",
                        color: "#FFF"
                    }}>
                        <div>
                    <div className="container row">
                        <div className="col-6">
                            <h1 className="section-title" style={{
                                color: "#fff",
                                fontWeight: "100"   
                            }}>
                                Quem somos
                            </h1>
                            <div>
                                <h3>
                                    <b>A LinqCode tem como objetivo transformar sua empresa</b>
                                </h3>
                            </div>
                            <div>
                                <p>
                                    Especializada em consultoria de
                                    sistemas e desenvolvimento de softwares que
                                    buscam simplificar e unificar os processos de seus
                                    clientes através de soluções tecnológicas.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>

        <div>

        <section>
            <div className="container">
                <h1 className="section-title" >
                    Nosso compromisso
                </h1>
            <section 
                className={`bg-tertiary ${styles.sectionCompromisso}`} 
            >
                <div className="container" style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <div>
                        <img src="/pessoa.svg" style={{ width: "100%", maxWidth: "275px" }} />
                    </div>
                    <div className="text-center" style={{ color: "#FFF", width: "80%" }}>
                        <h1 style={{ fontSize: "2rem" }}>Pessoas</h1>
                        <p>
                            Antes de qualquer CNPJ lidamos com
                                pessoas, nosso anseio é poder tornar os
                                seus sonhos realidade, ver a satisfação
                                e o sorriso no rosto de nossos clientes.
                        </p>
                    </div>
                </div>
            </section>
            <section 
                className={`bg-secondary ${styles.sectionCompromisso}`} 
            >
                <div className="container" style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <div className="text-center" style={{ color: "#FFF", width: "80%" }}>
                        <h1 style={{ fontSize: "2rem" }}>Empresas</h1>
                        <p>
                                Transformar empresas, para terem
                                processos mais enxutos, automatizados,
                                trazer de fato valor ao seu negócio.
                                Conhecendo a necessidade do mercado,
                                com experiências anteriores, queremos de
                                fato fazer a diferença.
                        </p>
                    </div>
                    <div>
                        <img src="/empresa.svg" style={{ width: "100%" }}  />
                    </div>
                </div>
            </section>
            </div>
            </section>


            <section className="bg-secondary" style={{
                color: "#FFF",
                minHeight: "3rem"
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1 className="section-title" style={{
                                color: "#FFF"
                            }}>
                                Valores
                            </h1>
                            <p style={{
                                fontSize: "1.3rem"
                            }}>
                            A Linqcode mais que uma empresa, somos pessoas que almejamos impactar pessoas, trazer transformação, ser mais do que entregamos e criar relacionamentos duradouros.<br />
                            Com determinação e paixão no que fazemos, queremos oforecer a melhor experiência que nossos clientes possam ter.<br />
                            </p>
                        </div>
                        <div className="col-6">
                            <h3 style={{color: "#FF6600" }}>Respeito</h3>
                            <p>
                                Base dos nossos princípios, acima de tudo.
                            </p>
                            <h3 style={{color: "#FF6600" }}>Atenção</h3>
                            <p>
                                Com empatia em entender a necessidade e o momento de nossos clientes.
                            </p>
                            <h3 style={{color: "#FF6600" }}>Compromisso</h3>
                            <p>
                                Lealdade aos nossos princípios e confiabilidade com nossos clientes.
                            </p>
                            <h3 style={{color: "#FF6600" }}>Simplicidade</h3>
                            <p>
                                Um bom trabalho está na simplificadade que ele é.<br />
                                Simplicidade não quer dizer menos, mas o essêncial. 
                            </p>
                            <h3 style={{color: "#FF6600" }}>Agilidade</h3>
                            <p>
                                Fadados a processos retrógados e lentos, queremos entregar a melhor experiência para nossos clientes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{
                minHeight: "1vh"
            }}>
                <div className="container">
                    <div className="displayColumn">
                        <Card img="/segmentos.svg" title="Segmento" content="Por desenvolvermos soluções personalizadas, atingimos divermos setores." />
                        <Card img="/grupo.svg" title="Colaboração" content="Individuos e interações estão a frente de processos, ferramentas e contratos." />
                    </div>
                </div>
            </section>
        </div>
    </Layout>
}