import Card from "../components/card";
import Layout from "../components/layout";
import styles from '../styles/solucoes.module.css'

export default function Solucoes(){
    return <Layout>
        <div>
                <section className="bg-secondary" 
                    style={{ 
                        backgroundImage: "url(/linqcode-logorgb1.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "auto 70%",
                        backgroundPosition: "right",
                        backgroundPositionX: "90%",
                        backgroundBlendMode: "normal",
                        minHeight: "3vh",
                        marginTop: "8rem",
                        color: "#FFF"
                    }}
                        
                >
                    <div className="container row">
                        <div className="col-6">
                            <h1 className="section-title" style={{ color: "#FFF", fontWeight: "100" }} >Conheça nossas <br/> soluções</h1>
                            <div>
                                <p>
                                    Possuímos uma metodologia de desenvolvimento alinhada a resultados, com a estratégia necessária para que sua aplicação tenha o sucesso esperado.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.section} id="site-institucional" style={{
                    backgroundImage: "url('/linqcode-logorgb4.png')",
                    backgroundColor: "#e6e6e6",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "soft-light",
                    backgroundPositionX: "right",
                    backgroundPositionY: "unset"
                }}>
                    <div className="container">
                        <div className={styles.servico}>
                            <div className="text-center">
                                <img src="/web-responsive.svg" /> 
                            </div>
                            <div>
                                <h1 className="section-title text-center">Site institucional</h1>
                                <p className="text-center">
                                    <b>Crie agora mesmo o cartão de visita da sua empresa.</b>
                                </p>
                                <p>
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
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${styles.section}`} id="ecommerce" style={{
                    backgroundImage: "url('/linqcode-logorgb4.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "soft-light",
                    backgroundPositionX: "right",
                    backgroundPositionY: "bottom",
                    backgroundColor: "#f8f8f8"
                }}>
                    <div className="container">
                        <div className={styles.servico}>
                            <div>
                                <h1 className="section-title text-center">E-Commerce</h1>
                                <p className="text-center">
                                    <b>Tenha sua própria loja virtual personaliada.</b>
                                </p>
                                <p>
                                    <ul>
                                        <li>Páginas adaptáveis para qualquer tamanho de tela</li>
                                        <li>Hospedagem inclusa</li>
                                        <li>Conta de e-mail</li>
                                        <li>Suporte</li>
                                        <li>WhatsApp</li>
                                        <li>Chat Online</li>
                                        <li>Atualização Mensal</li>
                                        <li>Integração  com meio de pagamento</li>
                                        <li>Envio de e-mail para carrinho abondonado</li>
                                        <li>Certificado de segurança SSL</li>
                                        <li>Relatórios Google Analytics</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="text-center">
                                <img src="/img-ecommerce.svg" /> 
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${styles.section}`} id="mobile" style={{
                    backgroundImage: "url('/linqcode-logorgb4.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "soft-light",
                    backgroundPositionX: "left",
                    backgroundPositionY: "unset",
                    backgroundColor: "#f8f8f8",
                }}>
                    <div className="container">
                        <div className={styles.servico}>
                            <div className="text-center">
                                <img src="/img-mobile.svg" />
                            </div>
                            <div>
                                <h1 className="section-title text-center">Mobile</h1>
                                <p className="text-center">
                                    <b>Integre a mobilidade aos seus processos.</b>
                                </p>
                                <p>
                                    <ul>
                                        <li>Disponível nas principais plataformas <b className="primary">Android</b> e <b className="primary">IOS</b></li>
                                        <li>Desenvolvemos do zero</li>
                                        <li>Totalmente customizado</li>
                                        <li>Suporte</li>
                                        <li>Manutenção</li>
                                        <li>Integração com base existentes</li>
                                        <li>Menssageria Push</li>
                                        <li>Atualização Mensal</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${styles.section}`} id="aplicacao-customizada" style={{
                     backgroundImage: "url('/linqcode-logorgb4.png')",
                     backgroundRepeat: "no-repeat",
                     backgroundBlendMode: "soft-light",
                     backgroundPositionX: "left",
                     backgroundPositionY: "bottom",
                     backgroundColor: "#e6e6e6"
                }}>
                    <div className="container">
                        <div className={styles.servico}>
                            <div>
                                <h1 className="section-title text-center">Aplicações Customizadas</h1>
                                <p className="text-center">
                                    <b>Nada no mercado te atende, está na hora de desenvolver sua própria solução.</b>
                                </p>
                                <p>
                                    <ul>
                                        <li>Desenvolvemos do zero</li>
                                        <li>Totalmente customizado</li>
                                        <li>Suporte</li>
                                        <li>Manutentação</li>
                                        <li>Hospedagem</li>
                                        <li>Ambiente</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="text-center">
                                <img src="/custom-app.svg" />
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    </Layout>
}