// Crie um script que peça ao utilizador o seu nome completo; a partir do nome definido, deverão ser geradas sugestões de endereços de email;
function gerarEmails() {
    let fullNameInput = document.getElementById("fullName");

    let fullName = fullNameInput.value.trim();
    /* 
    Remover caracteres especiais e substituir 
    */
    let r = fullName.toLowerCase();
    r = r.replace(/[àáâãäå]/g, "a");
    r = r.replace(/ç/g, "c");
    r = r.replace(/[èéêë]/g, "e");
    r = r.replace(/[ìíîï]/g, "i");
    r = r.replace(/[òóôõö]/g, "o");
    r = r.replace(/[ùúûü]/g, "u");


    // Separar o nome em partes individuais
    let names = r.split(" ");

    // Gerar emails
    let sugestoesEmail = [];

    for (let i = 0; i < names.length; i++) {
        let sugestao = "";
        for (let j = 0; j <= i; j++) {
            sugestao += names[j].toLowerCase();
            if (j < i) {
                sugestao += ".";
            }
        }
        sugestoesEmail.push(sugestao + "@exemplo.com");
    }

    let elementoEmail = document.getElementById("emailGerado");
    elementoEmail.innerHTML = "<strong>Sugestões de email:</strong><br>";
    for (let i = 0; i < sugestoesEmail.length; i++) {
        elementoEmail.innerHTML += sugestoesEmail[i] + "<br>";
    }
} 