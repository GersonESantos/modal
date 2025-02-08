// Seleciona todos os botões que abrem e fecham o modal
const openButtons = document.querySelectorAll('.open-modal');

// Percorre cada botão de abrir e adiciona o evento de click
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Pega o id do modal que o botão abre
        const modalId = button.getAttribute('data-modal');

        // Pega o modal pelo id
        const modal = document.getElementById(modalId);

        // Abre o modal
        modal.showModal();
    });
});

