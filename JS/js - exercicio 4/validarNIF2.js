async function validarNIF() {
    const loadingIndicator = document.getElementById('loading');
    const nifInput = document.getElementById('nif').value;
    const url = `https://apilayer.net/api/validate?access_key=a85d930abf7f44193886c841a123f89b&vat_number=PT${nifInput}`;
    const formatElement = document.getElementById('format');
    const companyElement = document.getElementById('company');
    const addressElement = document.getElementById('address');
    const resultNIFElement = document.getElementById('resultNIF');

    loadingIndicator.style.display = 'block';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.valid) {
            updateGUI(data, formatElement, companyElement, addressElement, resultNIFElement);
        }
    } catch (error) {
        handleErrorMessage(error);
        console.log(error);
    } finally {
        loadingIndicator.style.display = 'none';
    }
}

function updateGUI(data, formatElement, companyElement, addressElement, resultNIFElement) {
    resultNIFElement.innerHTML = `${data.query}`;
    formatElement.innerHTML = `${data.format_valid}`;
    companyElement.innerHTML = `${data.company_name}`;
    addressElement.innerHTML = `${data.company_address}`;
}

function handleErrorMessage(error) {
    const resultadoDiv = document.getElementById('resultado');
    let errorMessage;

    switch (error.status) {
        case 401:
            errorMessage = 'Erro de autenticação. Verifique sua chave API.';
            break;
        case 429:
            errorMessage = 'Limite de requisições excedido. Tente novamente mais tarde.';
            break;
        default:
            errorMessage = 'Erro ao validar o NIF. Tente novamente mais tarde.';
    }

    resultadoDiv.innerHTML = errorMessage;
}