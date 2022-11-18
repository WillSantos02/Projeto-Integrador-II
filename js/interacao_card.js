const card_personalite = document.querySelector('.card_personalite');
const card_creditos = document.querySelector('.card_creditos');
//const btn_creditos = document.querySelector('.btncreditos');

const umDiaUnico = document.getElementById('umDiaUnico');
const tresDiasDuplo = document.getElementById('tresDiasDuplo');
const seteDiasQuatorze = document.getElementById('seteDiasQuatorze');
const quatorzeDiasTrinta = document.getElementById('quatorzeDiasTrinta');
const trintaDias = document.getElementById('trintaDias');

// 
card_personalite.addEventListener('click', () => {
    card_personalite.classList.contains('card_personalite') ? card_personalite.classList.replace('card_personalite', 'selecionado') : card_personalite.classList.replace('selecionado', 'card_personalite');
    if (card_creditos.classList.contains('selecionado_creditos'))
    {
        card_creditos.classList.replace('selecionado_creditos', 'card_creditos');
        //btn_creditos.classList.replace('disable', 'btncreditos')
        umDiaUnico.textContent = '1 dia'
        tresDiasDuplo.textContent = '3 dias'
        seteDiasQuatorze.textContent = '7 dias'
        quatorzeDiasTrinta.textContent = '14 dias'
        trintaDias.style.display = 'flex';
    }
});

card_creditos.addEventListener('click', () => {
    card_creditos.classList.contains('card_creditos') ? card_creditos.classList.replace('card_creditos', 'selecionado_creditos') : card_creditos.classList.replace('selecionado_creditos', 'card_creditos');
    if (card_personalite.classList.contains('selecionado'))
    {
        card_personalite.classList.replace('selecionado', 'card_personalite')
        //btn_creditos.classList.replace('btncreditos', 'disable')
        umDiaUnico.textContent = 'UNICO'
        tresDiasDuplo.textContent = 'DUPLO'
        seteDiasQuatorze.textContent = '14 dias'
        quatorzeDiasTrinta.textContent = '30 dias'
        trintaDias.style.display = 'none';
    }
});
