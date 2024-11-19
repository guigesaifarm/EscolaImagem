// Função para ir para a próxima página
function nextPage(pageNumber) {
    // Esconde todas as páginas de perguntas
    document.getElementById("question-page").style.display = "none";
    document.getElementById("question-page2").style.display = "none";
    
    // Mostra a página atual
    if (pageNumber === 1) {
        document.getElementById("question-page2").style.display = "block";
    } else if (pageNumber === 2) {
        alert("Obrigado por responder!");
    }
}

// Função para verificar qual imagem foi selecionada
function checkAnswer(selectedImageId) {
    if (selectedImageId === "image1" || selectedImageId === "image3") {
        alert("Resposta correta!");
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }
}