<script>
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtém os valores do formulário
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    // Cria um novo elemento de avaliação
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    
    const reviewTitle = document.createElement('h4');
    reviewTitle.textContent = name;
    
    const reviewText = document.createElement('p');
    reviewText.textContent = review;
    
    // Adiciona o título e o texto à avaliação
    reviewItem.appendChild(reviewTitle);
    reviewItem.appendChild(reviewText);

    // Adiciona a nova avaliação à lista de avaliações
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.appendChild(reviewItem);

    // Limpa o formulário após enviar
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';
});

function handleProductActions() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart'); // Supondo que esses botões têm essa classe
    const buyNowButtons = document.querySelectorAll('.buy-now'); // Supondo que esses botões têm essa classe

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.dataset.productName; // Supomos que o nome do produto está armazenado como atributo de dados
            alert(`${productName} foi adicionado ao carrinho!`);
            // Aqui você pode adicionar a lógica para adicionar ao carrinho, como enviar os dados ao servidor ou ao localStorage
        });
    });

    buyNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.dataset.productName;
            alert(`Você comprou o produto: ${productName}`);
            // Aqui você pode implementar a lógica de compra, como redirecionar para a página de checkout
        });
    });
}

function redirectToInstagram() {
    const instagramIcon = document.getElementById('instagramIcon'); // Supondo que o ícone tenha esse id

    instagramIcon.addEventListener('click', function() {
        window.open('https://www.instagram.com/sua_pagina', '_blank');
    });
}

function initializeSite() {
    // Inicia o carrossel de imagens
    startImageCarousel();
    
    // Configura os eventos de botões de produtos
    handleProductActions();
    
    // Configura o formulário de avaliações
    handleReviewSubmission();
    
    // Configura redirecionamento do Instagram
    redirectToInstagram();
}

// Executa a função de inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeSite);

</script>
