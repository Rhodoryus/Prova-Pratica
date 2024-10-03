import React, { useState, useEffect } from 'react';

const Form = () => {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        senha: '',
    });
    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/esconder a senha
    const [progress, setProgress] = useState(0); // Estado para a barra de progresso

    useEffect(() => {
        const filledFields = Object.values(formData).filter(field => field.trim() !== '').length; // Conta quantos campos estão preenchidos
        const totalFields = Object.keys(formData).length; // Total de campos
        setProgress((filledFields / totalFields) * 100); // Calcula a porcentagem da barra de progresso
    }, [formData]); // Atualiza sempre que formData muda

    const handleCheckboxChange = () => {
        setTermsAccepted(!termsAccepted);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword); // Alterna o estado de mostrar/esconder a senha
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Dados do formulário:', formData);
    };

    return (
        <div className="flex flex-column">
            <div className="formulario flex flex-column">
                <div className="progresso">
                    <label>Preencha os campos</label>
                    <progress value={progress} max="100" style={{ appearance: 'none' }}></progress>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-column">
                        <label htmlFor="nome">Digite seu nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex flex-column">
                        <label htmlFor="telefone">Digite seu telefone</label>
                        <input
                            type="text"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex flex-column">
                        <label htmlFor="email">Digite seu e-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex flex-column">
                        <label htmlFor="senha">Digite sua senha</label>
                        <input
                            type={showPassword ? "text" : "password"} // Alterna entre "text" e "password"
                            id="senha"
                            name="senha"
                            value={formData.senha}
                            onChange={handleInputChange}
                        />
                        <button type="button" className="mostra-senha" onClick={handleShowPassword}>
                            {showPassword ? "Ocultar senha" : "Mostrar senha"}
                        </button>
                    </div>

                    <div className="flex termos">
                        <input
                            type="checkbox"
                            name="aceita-termos"
                            id="aceita-termos"
                            checked={termsAccepted}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="aceita-termos">
                            Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta
                        </label>
                    </div>

                    <div className="flex">
                        <button className="botao" id="botao-aceitar" disabled={!termsAccepted} onClick={handleSubmit}>
                            Aceite os termos
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
