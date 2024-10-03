import React from 'react';

const Navbar = ({ title, logo }) => {
    return (
        <aside className="flex flex-column">
            <div className="flex flex-column">
                <div className="logo">
                    <a href="/">
                        
                    </a>
                </div>
                <div className="titulo">
                    <h1>{title}</h1>
                    <p className="subtitulo">
                        Aqui, você acontece com segurança e toda a praticidade que o Digital Bank oferece. Mais do que uma conta com cartão, você tem uma experiência completa com investimentos, Mimos exclusivos e muito mais.
                    </p>
                </div>
            </div>
            <small className="copyright">&copy; Criado por Robert Pereira Dos Santos 37021515</small>
        </aside>
    );
};

export default Navbar;
