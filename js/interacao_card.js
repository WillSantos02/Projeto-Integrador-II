document.querySelectorAll('.card_unico, .card_sete').forEach(card => {
    card.addEventListener('click', event => {
        if(card.classList.contains('card_unico')) {
            card.classList.replace('card_unico', 'selecionado');
        } else {
            card.classList.replace('selecionado', 'card_unico');
        }
    });
});

document.querySelectorAll('.card_sete').forEach(card => {
    card.addEventListener('click', event => {
        if(card.classList.contains('card_sete')){
            card.classList.replace('card_sete', 'selecionado_sete');
        } else {
            card.classList.replace('selecionado_sete', 'card_sete');
        }
    });
});