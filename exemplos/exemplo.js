async function validarEmail() {
    const emailInput = document.getElementById('email');
    const resultadoElement = document.getElementById('temporario');
    const loadingIndicator = document.getElementById('loading'); // Elemento para indicar carregamento

    // Validação básica do formato do email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailInput.value)) {
        resultadoElement.textContent = 'Formato de email inválido.';
        return;
    }

    loadingIndicator.style.display = 'block'; // Mostrar indicador de carregamento

    try {
        const response = await fetch(`https://disposable.debounce.io/?email=${emailInput.value}`);
        const data = await response.json();

        resultadoElement.textContent = data.disposable === 'true' ? 'Sim' : 'Não';
    } catch (error) {
        console.error('Erro ao verificar o email:', error);
        resultadoElement.textContent = 'Ocorreu um erro ao verificar o email. Tente novamente mais tarde.';
    } finally {
        loadingIndicator.style.display = 'none'; // Ocultar indicador de carregamento
    }
}

