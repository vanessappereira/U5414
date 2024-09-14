let url = 'https://dummyapi.online/api/users';
fetch(url)
    .then(response =>
        //converter resposta para Json
        response.json()).then(data => {
            //converter parâmetro data (Json) para Array
            const dados = Array.from(data);
            //ordenar dados pelo nome do utilizador
            //dados.sort((a, b) => (a.name).localeCompare(b.name));
            for (var i = 0; i < dados.length; i++) {
                var table = document.getElementById("utilizadores");
                //criar nova linha no final da tabela
                var row = table.insertRow(-1);
                //crias células na linha
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                //definir conteúdo das células
                cell1.innerHTML = dados[i].id;
                cell2.innerHTML = dados[i].name;
                cell3.innerHTML = dados[i].email;
                cell4.innerHTML = dados[i].address.city;
            }
        })
    .catch(error => console.log(error))
