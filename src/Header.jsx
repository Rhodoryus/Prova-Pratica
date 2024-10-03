import React from 'react';

const Header = () => {
    return (
        <aside className="flex flex-column">
            <div className="flex flex-column">
                <div className="logo">
                    <a href="/">
                        <img src="img/logo.svg" alt="Logo" />
                    </a>
                </div>
                <div className="titulo">
                    <h1>Complete os campos ao lado para abrir sua Conta Digital</h1>
                    <p className="subtitulo">
                        Aqui, você acontece com segurança e toda a praticidade que o Digital Bank oferece. Mais do que uma conta com cartão, você tem uma experiência completa com investimentos, Mimos exclusivos e muito mais.
                    </p>
                </div>
                <small>&copy; Criado por Robert Pereira Dos Santos 37021515</small>
            </div>
        </aside>
    );
};

export default Header;
