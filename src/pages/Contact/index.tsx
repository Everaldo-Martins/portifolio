import { useEffect, useRef } from 'react';
import './Contact.css';
import { FaUser, FaMapLocationDot, FaEnvelope } from 'react-icons/fa6';

function Contact(){
    const formRef = useRef<HTMLFormElement>(null);
    const statusRef = useRef<HTMLDivElement>(null);

    const setStatusMessage = (message: string, isSuccess: boolean) => {
        if (statusRef.current) {
            statusRef.current.innerHTML = `<p class="${isSuccess ? 'success' : 'error'}">${message}</p>`;
        }
    };

    const handleSubmit = async (event: Event) => {
        event.preventDefault();
        const form = formRef.current;
        if (!form) return;

        const data = new FormData(form);
        try {
            const response = await fetch('https://formspree.io/f/xdoqvvyr', {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setStatusMessage('Mensagem enviada! Obrigado por entrar em contato.', true);
                form.reset();
            } else {
                const responseData = await response.json();
                const errorMessage = responseData?.errors?.map((error: any) => error.message).join(', ') || 'Oops! Ocorreu um problema ao enviar seu formulário.';
                setStatusMessage(errorMessage, false);
            }
        } catch (error) {
            setStatusMessage('Oops! Ocorreu um problema ao enviar seu formulário.', false);
        }
    };

    useEffect(() => {
        const form = formRef.current;
        if (!form) return;

        form.addEventListener("submit", handleSubmit as EventListener);
        return () => form.removeEventListener("submit", handleSubmit as EventListener);
    }, []);

    return (
        <section className="contact">
            <div className="box-content">
                <div className="contact-left">
                    <h1 className="text">Entre em contato</h1>
                    <div className='contact-text'>
                        <h3>Tem alguma dúvida, sugestão ou precisa de suporte?</h3>
                        <p>Estamos esperando sua mensagem, não hesite em entrar em contato. Estamos aqui para ajudar! Utilize uma das formas de contato abaixo ou preencha o formulário para que possamos atendê-lo da melhor maneira possível.</p>
                    </div>
                    <div className="icons">
                        <div className="row">
                            <FaUser className="icon" />
                            <div className="info">
                                <div className="head">Nome</div>
                                <div className="sub-title">Everaldo Martins</div>
                            </div>
                        </div>
                        <div className="row">
                            <FaMapLocationDot className="icon" />
                            <div className="info">
                                <div className="head">Endereço</div>
                                <div className="sub-title">Rua Quatro de Outubro, Santa Luzia, Paraíba</div>
                            </div>
                        </div>
                        <div className="row">
                            <FaEnvelope className="icon" />
                            <div className="info">
                                <div className="head">E-mail</div>
                                <div className="sub-title">everaldoinfortecnico@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-right">
                    <h1 className="text">Envie-me uma mensagem</h1>
                    <div ref={statusRef} className="my-form-status"></div>
                    <form ref={formRef}> 
                        <div className="fields">
                            <div className="field">
                                <input type="text" name="name" placeholder="Nome" required />
                            </div>

                            <div className="field">
                                <input type="email" name="email" placeholder="E-mail" required />
                            </div>

                            <div className="field">
                                <input type="text" name="subject" placeholder="Assunto" required />
                            </div>                            
                        </div>

                        <div className="field">
                            <textarea name="message" cols={30} rows={10} placeholder="Mensagem" required></textarea>
                        </div>

                        <button type="submit" id="my-form-button"><i className="fa-solid fa-share-from-square"></i> Enviar</button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;