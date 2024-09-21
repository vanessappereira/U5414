async function fetchData() {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    const url = `https://fakestoreapi.com/products/${id}`;


    try {
        const response = await fetch(url);
        const data = await response.json();
        const product = data;

        if (product) {
            displayTableProduct(product);
            console.log(data);
        }
    } catch (error) {
        console.error('Error:', error);
        handleErrorMessage(error);
    }
}

function displayTableProduct(product) {
    const produtoInfoElement = document.getElementById('produtoInfo');

    // Create the table structure
    const table = document.createElement('table');
    table.style.width = '100%'; // Set table width to 100% of parent element
    table.style.borderCollapse = 'collapse'; // Set border collapse to make table fit page
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const tfoot = document.createElement('tfoot');

    // Create table header row
    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerCell.textContent = product.title;
    headerCell.colSpan = 2;
    headerRow.appendChild(headerCell);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const bodyRow1 = document.createElement('tr');
    const bodyRow2 = document.createElement('tr');

    const imgCell = document.createElement('td');
    imgCell.rowSpan = 2;

    const descriptionCell = document.createElement('td');
    descriptionCell.colSpan = 2;

    const categoryCell = document.createElement('td');
    const priceCell = document.createElement('td');

    // Table construction
    const imgSrc = product.image;
    const productImg = document.createElement('img');
    productImg.src = imgSrc;
    productImg.style.height = '100px';
    imgCell.appendChild(productImg);

    descriptionCell.textContent = product.description;

    bodyRow1.appendChild(imgCell);
    bodyRow1.appendChild(descriptionCell);
    tbody.appendChild(bodyRow1);

    categoryCell.textContent = product.category;
    priceCell.textContent = formatPrice(product.price);

    bodyRow2.appendChild(categoryCell);
    bodyRow2.appendChild(priceCell);
    tbody.appendChild(bodyRow2);

    table.appendChild(tbody);

    // Create table footer
    const footerRow = document.createElement('tr');
    const footerCell = document.createElement('td');
    footerCell.colSpan = 2;
    const backButton = document.createElement('a');
    backButton.href = 'javascript:history.back()';
    backButton.textContent = 'Back to previous page';
    footerCell.appendChild(backButton);
    footerRow.appendChild(footerCell);
    tfoot.appendChild(footerRow);
    table.appendChild(tfoot);

    produtoInfoElement.appendChild(table);
}

function formatPrice(price) {
    const options = { style: 'currency', currency: 'USD' };
    const formatter = new Intl.NumberFormat('en-US', options);
    return formatter.format(price);
}

function handleErrorMessage(error) {
    const produtoInfoElement = document.getElementById('produtoInfo');
    const errorMessage = `
      <div class="alert alert-danger" role="alert">
        ${error.message}
      </div>`;
    produtoInfoElement.innerHTML = errorMessage;
}