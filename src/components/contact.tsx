import React, { useEffect, useRef } from 'react';

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const statusRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const form = formRef.current;
        const status = statusRef.current;

        if (!form || !status) return;

        const handleSubmit = async (event: Event) => {
            event.preventDefault();
            const data = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.innerHTML = "<p class=\"success\">Mensagem enviada! Obrigado por entrar em contato.</p>";
                    form.reset();
                } else {
                    const responseData = await response.json();
                    if ('errors' in responseData) {
                        status.innerHTML = responseData.errors.map((error: any) => error.message).join(", ");
                    } else {
                        status.innerHTML = "<p class=\"error\">Oops! Ocorreu um problema ao enviar seu formulário.</p>";
                    }
                }
            } catch (error) {
                status.innerHTML = "<p class=\"error\">Oops! Ocorreu um problema ao enviar seu formulário.</p>";
            }
        };

        form.addEventListener("submit", handleSubmit as EventListener);

        return () => {
            form.removeEventListener("submit", handleSubmit as EventListener);
        };
    }, []);

    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Meus contatos</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Entre em contato</div>
                        <p>Tem alguma dúvida, sugestão ou precisa de suporte? Entre em contato através de um dos métodos abaixo ou também pode preencher o formulário abaixo com sua mensagem e entraremos em contato com você. Agradeço o interesse e aguardo seu contato!</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Nome</div>
                                    <div className="sub-title">Everalo Martins</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Endereço</div>
                                    <div className="sub-title">Rua Quatro de Outubro, Santa Luzia, Paraíba</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">E-mail</div>
                                    <div className="sub-title">everaldoinfortecnico@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Envie-me uma mensagem</div>
                        <div ref={statusRef} className="my-form-status"></div>
                        <form ref={formRef} action="https://formspree.io/f/xdoqvvyr" method="POST">
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" name="name" placeholder="Nome" required />
                                </div>
                                <div className="field email">
                                    <input type="email" name="email" placeholder="E-mail" required />
                                </div>
                            </div>
                            <div className="field">
                                <input type="text" name="subject" placeholder="Assunto" required />
                            </div>
                            <div className="field textarea">
                                <textarea name="message" cols={30} rows={10} placeholder="Mensagem" required></textarea>
                            </div>
                            <div className="button-area">
                                <button type="submit" id="my-form-button"> Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;