async function fetchData() {
    const url = 'https://api.ipma.pt/open-data/distrits-islands.json';
    try {
        fetch(url)
            .then(response => response.json())
            .then(dataAPI => {
                console.log(dataAPI);

                const selectElement = document.getElementById('distritos');

                dataAPI.data.forEach(element => {
                    // Create a new element option
                    const option = document.createElement('option');

                    // Define value - globalIdLocal
                    option.value = element.globalIdLocal;

                    // Define text - name
                    option.textContent = element.local;
                    //console.log(option);

                    // Add to Select
                    selectElement.appendChild(option);
                });
            })
    } catch (error) {
        console.error(error);
        document.getElementById('previsao').innerHTML = '<p class="text-danger">Erro a encontrar distritos!</p>';
    }
}

async function getImagemPrecipitacao(precipitaProb) {
    // converter texto em double
    const doublePrecipitacao = parseFloat(precipitaProb);
    console.log(doublePrecipitacao);

    if (isNaN(doublePrecipitacao)) {
        return 'semtempo.png'; // No data case
    }
    if (doublePrecipitacao === 0) {
        return 'sol.png';
    } else if (doublePrecipitacao <= 30) {
        return 'nublado.png';
    } else if (doublePrecipitacao <= 70) {
        return 'aguaceiros.png';
    } else {
        return 'chuva.png';
    }
}

async function obterPrevisao() {
    const selectElement = document.getElementById('distritos');
    const selectedOptions = Array.from(selectElement.selectedOptions);

    if (selectedOptions.length === 0) {
        alert("Seleciona um distrito.");
        return;
    }
    // Get value of selected option
    const selectedValue = selectedOptions[0].value;

    // Get text from selected option from fetchData
    const selectedText = selectedOptions[0].text;
    document.getElementById('previsao').innerHTML = `<h5>${selectedText}</h5>`;

    // Definition of the URL depending on the location
    const apiURL = 'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/' + selectedValue + '.json';

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error("Erro ao obter dados!");
        }
        const dataPrevisao = await response.json();

        let meteoHTML = '<table>';

        for (const forecast of dataPrevisao.data) {
            const imagemSrc = await getImagemPrecipitacao(forecast.precipitaProb);
            meteoHTML += `
                <tr class="tabela">
                    <td>Date: ${forecast.forecastDate}</td>
                    <td><img src="imagens/${imagemSrc}" height="55"></td>                    
                    <td>Min Temperature: ${forecast.tMin}°C</td>
                    <td>Max Temperature: ${forecast.tMax}°C</td>
                </tr>`;
        }
        meteoHTML += '</table>';
        document.getElementById('previsao').innerHTML += meteoHTML;
    } catch (error) {
        console.log(error);
        document.getElementById('previsao').innerHTML += '<p class="text-danger">Erro a encontrar meteorologia!</p>';
    }
}

document.getElementById('distritos').addEventListener('change', () => {
    obterPrevisao().catch(error => console.error('Error in obterPrevisao:', error));
});
window.onload = fetchData; // Fetch distritos no reload