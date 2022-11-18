const card_personalite = document.querySelector('.card_personalite');
const card_creditos = document.querySelector('.card_creditos');
const modalPersonalite = document.getElementById('modalRechargePersonalite');
const modalCreditos = document.getElementById('modalRechargeCreditos');

const buttonsCreditos = document.querySelectorAll('.action-btn')
const valorRecarga = document.querySelectorAll('.valorRecarga')

const inputPersonalite = document.getElementById('inputBilhetePersonalite')
const inputCreditos = document.getElementById('inputBilheteCreditos')


// 
card_personalite.addEventListener('click', () => {
    card_personalite.classList.contains('card_personalite') ? card_personalite.classList.replace('card_personalite', 'selecionado') : card_personalite.classList.replace('selecionado', 'card_personalite');
    if (card_creditos.classList.contains('selecionado_creditos'))
    {
        card_creditos.classList.replace('selecionado_creditos', 'card_creditos');
    }

    modalPersonalite.classList.contains('mostrar') ? modalPersonalite.classList.remove('mostrar') : modalPersonalite.classList.add('mostrar')


    if (modalCreditos.classList.contains('mostrar')){
        modalCreditos.classList.remove('mostrar');
        modalPersonalite.classList.add('mostrar')
    }

    buttonsCreditos.forEach(buttonF => {
        if (buttonF.classList.contains('btn-selected')){
            buttonF.classList.remove('btn-selected')
        }
    })

    valorRecarga.forEach(input => {
        input.placeholder = "R$10.00"
    })

    inputCreditos.value = '';
    inputPersonalite.value = '';
});

card_creditos.addEventListener('click', () => {
    card_creditos.classList.contains('card_creditos') ? card_creditos.classList.replace('card_creditos', 'selecionado_creditos') : card_creditos.classList.replace('selecionado_creditos', 'card_creditos');
    if (card_personalite.classList.contains('selecionado'))
    {
        card_personalite.classList.replace('selecionado', 'card_personalite')
    }

    modalCreditos.classList.contains('mostrar') ? modalCreditos.classList.remove('mostrar') : modalCreditos.classList.add('mostrar')


    if (modalPersonalite.classList.contains('mostrar')){
        modalPersonalite.classList.remove('mostrar')
        modalCreditos.classList.add('mostrar');
    }

    buttonsCreditos.forEach(buttonF => {
        if (buttonF.classList.contains('btn-selected')){
            buttonF.classList.remove('btn-selected')
        }
    })

    valorRecarga.forEach(input => {
        input.placeholder = "R$10.00"
    })

    inputCreditos.value = '';
    inputPersonalite.value = '';
});
