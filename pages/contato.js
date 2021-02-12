import Link from "next/link";
import FormContato from "../components/formContato";
import Layout from "../components/layout";
import styles from '../styles/contato.module.css'

export default function Contato(){


    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(event);
    }

    return <Layout>
        <section className="bg-tertiary" 
                    style={{ 
                        backgroundImage: "url(/linqcode-logorgb4.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "auto 70%",
                        backgroundPosition: "right",
                        backgroundPositionX: "90%",
                        backgroundBlendMode: "soft-light",
                        minHeight: "3vh",
                        marginTop: "8rem",
                        color: "#FFF"
                    }}
                        
                >
            <div className="container">
                <h1 className="section-title" style={{
                    color: "#FFF"
                }}>
                    Tudo certo? <br />
                    vamos começar.
                </h1>
            </div>
        </section>
        <section>
            <div className="container">
                <h1 className="section-title secondary" >Envie seus dados <br /> que entramos em contato com você.</h1>
                <div className="col-6">
                    <FormContato className={styles.formulario} />
                    {/* <form id="formulario" className={`${styles.formulario}`} onSubmit={(event) => handleSubmit(event)}>
                        <label>Nome</label>
                        <input id="nome" name="nome" required />
                        <label>E-mail</label>
                        <input id="email" nome="email" type="email" required />
                        <label>Empresa</label>
                        <input id="empresa" nome="empresa" />
                        <label>Telefone</label>
                        <input id="telefone" nome="telefone" required />
                        <label>Assunto</label>
                        <input id="assunto" nome="assunto" required />
                        <label>Mensagem</label>
                        <textarea id="mensagem" nome="mensagem" required />
                        <button type="submit">Enviar</button>
                    </form> */}
                </div>
                <div className="col-3">
                    <div style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <h1>Contate-nos</h1>
                        <div style={{ display: "inline-flex", paddingBottom: "1rem", alignItems: "center"  }}><img src="/whatsapp.svg" width="35px" /><span style={{ fontSize: "1.2rem", paddingLeft: "20px" }}>
                        <Link href="https://api.whatsapp.com/send/?phone=5511966342251&text=Ol%C3%A1%2C+quero+fazer+um+or%C3%A7amento%21+%0A&app_absent=0">
                            <a target="_blank">
                            + 55 11 9 6634-2251
                            </a>
                        </Link>
                        </span></div>
                        <div style={{ display: "inline-flex", alignItems: "center"  }}><img src="/emails.svg" width="35px" /><span style={{ fontSize: "1.2rem", paddingLeft: "20px" }}><Link href="mailto: contato@linqcode.com.br"><a>contato@linqcode.com.br</a></Link></span></div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
}