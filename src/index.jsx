import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa o componente App
import './css/style.css'; // Importe o seu CSS se necessário

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
