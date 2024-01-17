document.addEventListener('click', function (event) {
    var modal = document.getElementById('pokemon--Modal');
    var pokemonCard = document.querySelector('.pokemon-info');

    // Verifica se o elemento clicado está fora do card
    if (event.target !== pokemonCard && !pokemonCard.contains(event.target)) {
        // Fecha o modal
        modal.style.display = 'none';
    }
});
