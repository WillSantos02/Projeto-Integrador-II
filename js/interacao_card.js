const card_personalite = document.querySelector('.card_personalite');
const card_creditos = document.querySelector('.card_creditos');
// 
card_personalite.addEventListener('click', () => {
    card_personalite.classList.contains('card_personalite') ? card_personalite.classList.replace('card_personalite', 'selecionado') : card_personalite.classList.replace('selecionado', 'card_personalite');
    if (card_creditos.classList.contains('selecionado_creditos'))
    {
        card_creditos.classList.replace('selecionado_creditos', 'card_creditos')
    }
});

card_creditos.addEventListener('click', () => {
    card_creditos.classList.contains('card_creditos') ? card_creditos.classList.replace('card_creditos', 'selecionado_creditos') : card_creditos.classList.replace('selecionado_creditos', 'card_creditos');
    if (card_personalite.classList.contains('selecionado'))
    {
        card_personalite.classList.replace('selecionado', 'card_personalite')
    }
});


// document.querySelectorAll('.card_personalite').forEach(card => {
//     card.addEventListener('click', event => {
//         if(card.classList.contains('card_personalite')) {
//             card.classList.replace('card_personalite', 'selecionado');
//         } else {
//             card.classList.replace('selecionado', 'card_personalite');
//         }
//     });
// });

// document.querySelectorAll('.card_creditos').forEach(card => {
//     card.addEventListener('click', event => {
//         if(card.classList.contains('card_creditos')){
//             card.classList.replace('card_creditos', 'selecionado_creditos');
//         } else {
//             card.classList.replace('selecionado_creditos', 'card_creditos');
//         }
//     });
// });