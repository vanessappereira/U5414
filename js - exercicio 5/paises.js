async function fetchData() {
    const listElement = document.getElementById('listaPaises');
    const url = 'https://restcountries.com/v3.1/all';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        
    

        // Create the table structure
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');


        // Create table header row
        const headerRow = document.createElement('tr');
        const headerCell = document.createElement('th');

        headerCell.textContent = 'País';
        headerRow.appendChild(headerCell);
        thead.appendChild(headerRow);

        // Create table rows with flags and country names
        data.forEach((country) => {
            const row = document.createElement('tr');
            const flagCell = document.createElement('td');
            const nameCell = document.createElement('td');

            // Construct flag URL using country code
            const flagURL = `https://flagcdn.com/48x36/${country.cca2}.png`;

            console.log(country.cca2);

            // Create image element for flag
            const flagImage = document.createElement('img');
            flagImage.src = flagURL;

            // Set content and append elements
            nameCell.textContent = country.name.common;
            flagCell.appendChild(flagImage); // Attach image to flag cell
            row.appendChild(flagCell);
            row.appendChild(nameCell);
            tbody.appendChild(row);
        });

        // Assemble and append table elements
        table.appendChild(thead);
        table.appendChild(tbody);
        listElement.appendChild(table);

    } catch (error) {
        console.error('Error:', error);
        handleErrorMessage(error);
    }

}

function handleErrorMessage(error) {
    const listaPaisesElement = document.getElementById('listaPaises');
    let errorMessage = `
    <div class="alert alert-danger" role="alert">
     ${error.message}
    </div>`;
    listaPaisesElement.innerHTML = errorMessage;
}