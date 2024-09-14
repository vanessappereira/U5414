async function validarNIF() {
    const loadingIndicator = document.getElementById('loading');
    const nif = document.getElementById('nif').value;
    const url = 'https://apilayer.net/api/validate?access_key=a85d930abf7f44193886c841a123f89b&vat_number=PT' + nif;

    loadingIndicator.style.display = 'block';

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const resultadoDiv = document.getElementById('resultado');

        resultadoDiv.innerHTML = `
        <p>NIF: ${data.country_code}${data.vat_number}</p>
        <p>Formato válido? ${data.format_valid}</p>
        <p>Organização: ${data.company_name}</p>
        <p>Morada: ${data.company_address}</p>
        `;
    } catch (error) {
        console.error('Erro ao validar o NIF:', error);
        handleErrorMessage(error);
    } finally {
        loadingIndicator.style.display = 'none';
    }
}
function handleErrorMessage(error) {
    const resultadoDiv = document.getElementById('resultado');
    let errorMessage = 'Erro ao validar o NIF. Tente novamente mais tarde.';

    if (error.status === 401) {
        errorMessage = 'Erro de autenticação. Verifique sua chave API.';
    } else if (error.status === 429) {
        errorMessage = 'Limite de requisições excedido. Tente novamente mais tarde.';
    }
    resultadoDiv.innerHTML = errorMessage;
}
