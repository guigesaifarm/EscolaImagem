// Variável para armazenar a imagem selecionada
let selectedImageId = null;

// Função para selecionar a imagem
function selectImage(imageId) {
    // Desmarcar qualquer imagem previamente selecionada
    const images = document.querySelectorAll('.quiz-image');
    images.forEach(image => image.classList.remove('selected'));

    // Marcar a imagem clicada como selecionada
    const selectedImage = document.getElementById(imageId);
    selectedImage.classList.add('selected');

    // Armazenar a imagem selecionada
    selectedImageId = imageId;
}

// Função para ir para a próxima página
function nextPage(pageNumber) {
    // Verificar se uma imagem foi selecionada antes de continuar
    if (selectedImageId === null) {
        alert("Por favor, selecione uma imagem antes de continuar.");
        return;
    }

    // Verificar a resposta
    checkAnswer(selectedImageId, pageNumber);

    // Esconde todas as páginas de perguntas
    document.getElementById("question-page").style.display = "none";
    document.getElementById("question-page2").style.display = "none";
    document.getElementById("question-page3").style.display = "none";
    
    // Mostra a página atual
    if (pageNumber === 1) {
        document.getElementById("question-page2").style.display = "block";
    } else if (pageNumber === 2) {
        alert("Obrigado por responder!");
    } else if (pageNumber === 3) {
        alert("Obrigado por responder!");
    }
}

// Função para verificar a resposta
function checkAnswer(selectedImageId, pageNumber) {
    let correctAnswer;

    // Definir a resposta correta dependendo da página
    if (pageNumber === 1) {
        correctAnswer = "image1"; // Exemplo: o gato é a imagem1
    } else if (pageNumber === 2) {
        correctAnswer = "image4"; // Exemplo: o cachorro é a imagem4
    } else if (pageNumber === 3) {
        correctAnswer = "image4"; // Exemplo: o cachorro é a imagem4

    // Verificar se a resposta está correta
    if (selectedImageId === correctAnswer) {
        alert("Resposta correta!");
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }
}
