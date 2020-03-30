import React from 'react';
import Section from './section';

export default ()=>
    <Section id="contato"  title="Contato" className="bg-gray-100">
    <div className="flex justify-center mt-5 ">
        <h3 className="text-xl text-center">Se gostou do meu portfólio, tem interesse no meu trabalho, ou quer tratar de projetos e demais informações, entre em contato comigo através do formulário abaixo:</h3>
    </div>
    <div className="flex justify-center">
        <form name="contact" action="https://formspree.io/xlelqdpr" method="POST" className="w-full sm:w-full md:w-1/2 lg:w-1/2   px-8 pt-6 pb-8 mb-4">
            <div className="mb-2">
                <input placeholder="Nome" className="text-xl shadow appearance-none border border-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" />
            </div>
            <div className="mb-2">
                <input placeholder="Email" type="email" name="_replyto" className="text-xl border-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="mb-2"> 
                <textarea placeholder="Mensagem" className="text-xl border-black shadow appearance-none border rounded-lg w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" name="message"></textarea>
            </div>
            <div className="flex justify-center">
                <button className="btn btn-xl bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full block focus:outline-none focus:shadow-outline" type="submit">Enviar</button>
            </div>
        </form>
    </div>
    </Section>