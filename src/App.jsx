import React from 'react';
import './css/style.css'; // Importe seu CSS global
import Navbar from './Navbar';
import Form from './Form';
import Footer from './Footer';

function App() {
    const title = "Complete os campos ao lado para abrir sua Conta Digital";
    const logo = "img/logo.svg"; // Certifique-se de que o caminho está correto
    const progress = 100; // Exemplo de valor de progresso

    return (
        <main className="flex">
            <Navbar title={title} logo={logo} />
            <Form progress={progress} />
            <Footer />
        </main>
    );
}

export default App;
