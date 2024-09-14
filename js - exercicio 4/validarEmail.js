async function validarEmail() {
    const loadingIndicator = document.getElementById('loading');
    const email = document.getElementById('email').value;
    let url = 'https://emailvalidation.abstractapi.com/v1/?api_key=aeeb974f9aaf45c484e7a2349f3c167d&email=' + email;

    loadingIndicator.style.display = 'block';


    try {
        const response = await fetch(url);
        const data = await response.json();

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
        <p>Email: ${data.email}</p>
        <p>Formato válido? ${data.is_valid_format.text}</p>
        <p>SMTP? ${data.is_smtp_valid.text}</p>
        <p>É temporário? ${data.is_disposable_email.text}</p>
        `;
    } catch (error) {
        console.error('Erro ao validar o email:', error);
        handleErrorMessage(error);
    } finally {
        loadingIndicator.style.display = 'none';
    }
}

function handleErrorMessage(error) {
    const resultadoDiv = document.getElementById('resultado');
    let errorMessage = 'Erro ao validar o email. Tente novamente mais tarde.';

    if (error.status === 401) {
        errorMessage = 'Erro de autenticação. Verifique sua chave API.';
    } else if (error.status === 429) {
        errorMessage = 'Limite de requisições excedido. Tente novamente mais tarde.';
    }
    resultadoDiv.innerHTML = errorMessage;
}