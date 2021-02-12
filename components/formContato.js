import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './formContato.module.css'

export default function FormContato({ className }){

    const onSubmit = (data, event) => {

        event.preventDefault();
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = `
            <p><b>Nome:</b> ${data.nome}</p>
            <p><b>Telefone:</b> ${data.telefone}</p>
            <p><b>Empresa:</b> ${data.empresa}</p>
            <p><b>E-mail:</b> ${data.email}</p>
            <p><b>Assunto:</b> ${data.assunto}</p>
            <p><b>Mensagem:</b> ${data.mensagem}</p>
        `;

        var raw = JSON.stringify({
            subject: data.assunto,
            msg: body
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/contato", requestOptions)
        .then((response) => {
            if(response.status === 200){
                event.target.reset();
                alert("e-mail enviado com sucesso. Obrigado");
            }else{
                alert("Ops! tivemos um problema, tente novamente.");
            }
        })
        .catch(() => {
            alert("Ops! tivemos um problema, tente novamente.");
        });
    }

    const { register, handleSubmit, reset, errors } = useForm();

    return <form id="formulario" className={`${className} || ${styles.formulario}`} onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-6">
                  <label>Nome</label><br/>
                  <input id="nome" name="nome" required ref={register({ required: true })} />
                </div>
                <div className="col-6"> 
                  <label>E-mail</label><br/>
                  <input id="email" name="email" type="email"  required ref={register({ required: true })} />
                </div>
                <div className="col-6">
                  <label>Empresa</label>
                  <input id="empresa" name="empresa" ref={register} />
                </div>
                <div className="col-6">
                  <label>Telefone</label>
                  <input id="telefone" name="telefone" required ref={register({ required: true })} />
                </div>
                <div className="col-12">
                  <label>Assunto</label>
                  <input id="assunto" name="assunto" required ref={register({ required: true })} />
                </div>
                <div className="col-12">
                  <label>Mensagem</label>
                  <textarea id="mensagem" name="mensagem" required ref={register} />
                </div>
                <div className="col-12">
                  <button type="submit">Enviar</button>
                </div>
            </div>
        </form>
}