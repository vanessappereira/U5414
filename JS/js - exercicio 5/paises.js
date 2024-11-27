async function fetchData() {
    const listaPaisesElement = document.getElementById('listaPaises');
    const url = 'https://restcountries.com/v3.1/all';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Create Pagination
        let currentPage = 1;
        const itemsPerPage = 15;
        const totalPages = Math.ceil(data.length / itemsPerPage);

        // Create function to display Table
        function displayTable(data, currentPage) {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const slicedData = data.slice(startIndex, endIndex);

            // Create the table structure
            const table = document.createElement('table');
            table.style.width = '100%'; // Set table width to 100% of parent element
            table.style.borderCollapse = 'collapse'; // Set border collapse to make table fit page
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            // Create table header row
            const headerRow = document.createElement('tr');
            const headerCell = document.createElement('th');
            headerCell.textContent = 'País';
            headerRow.appendChild(headerCell);
            thead.appendChild(headerRow);
            table.appendChild(thead);


            // Create table rows with flags and country names
            slicedData.forEach((country) => {
                const row = document.createElement('tr');
                const flagCell = document.createElement('td');
                const nameCell = document.createElement('td');

                // Construct flag URL using country code
                const flagURL = `https://flagcdn.com/48x36/${country.cca2.toLowerCase()}.png`;
                const flagImg = document.createElement('img');
                flagImg.src = flagURL;
                flagCell.appendChild(flagImg);

                console.log(country.cca2);

                // Set content and append elements
                nameCell.textContent = country.name.common;
                row.appendChild(flagCell);
                row.appendChild(nameCell);
                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            // Clear previous table and append new one
            listaPaisesElement.innerHTML = '';
            listaPaisesElement.appendChild(table);

            // Create pagination buttons
            const paginationElement = document.createElement('div');
            paginationElement.className = 'pagination';

            // Create previous button
            const prevButton = document.createElement('button');
            prevButton.className = 'btn'
            prevButton.textContent = 'Anterior';
            prevButton.disabled = currentPage === 1;
            prevButton.onclick = () => displayTable(data, currentPage - 1);
            paginationElement.appendChild(prevButton);

            // Create page number buttons
            for (let i = 1; i <= totalPages; i++) {
                const pageNumberButton = document.createElement('button');
                pageNumberButton.className = 'btn';
                pageNumberButton.textContent = i;
                pageNumberButton.onclick = () => displayTable(data, i);
                paginationElement.appendChild(pageNumberButton);
            }

            // Create next button
            const nextButton = document.createElement('button');
            nextButton.className = 'btn';
            nextButton.textContent = 'Seguinte';
            nextButton.disabled = currentPage === totalPages;
            nextButton.onclick = () => displayTable(data, currentPage + 1);
            paginationElement.appendChild(nextButton);

            // Append pagination buttons to listaPaisesElement
            listaPaisesElement.appendChild(paginationElement);

            // Button selected with a diferent class
            const buttons = listaPaisesElement.querySelectorAll('.btn');
            buttons[currentPage].classList.add('active');
        }

        // Call displayTable function with initial data and current page
        displayTable(data, currentPage);
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