const geracaoCodigoModal = document.getElementById('termUseModal');
const selecTypeRechargeModal = document.getElementById('rechargeModal');
const creditModal = document.getElementById('creditModal');
const personaliteModal = document.getElementById('personaliteModal');
const ticketUseModal = document.getElementById('ticketUseModal');
const usageTermModal = document.getElementById('usageTermModal');

function abrirModalTermoGeracao(){
    geracaoCodigoModal.style.display = "flex";

    geracaoCodigoModal.addEventListener('click', (e) => {

    if(e.target.id == 'termUseModal' || 
        e.target.id == 'codeGenerate' || 
        e.target.id == "closeModal"){
            geracaoCodigoModal.style.display = "none";
        }
    });
}

function abrirModalRecarga(){
    selecTypeRechargeModal.style.display = "flex";

    selecTypeRechargeModal.addEventListener('click', (e) => {
    if(e.target.id == 'rechargeModal' || 
        e.target.id == 'codeRecharge' || 
        e.target.id == 'closeModal' || 
        e.target.id == 'CancelBtn'){
            selecTypeRechargeModal.style.display = "none";
        } 
    });
}

function abrirModalCredito(){
    creditModal.style.display = "flex";
    selecTypeRechargeModal.style.display = "none";

    creditModal.addEventListener('click', (e) => {
        if(e.target.id == 'creditModal' ||
            e.target.id == 'closeModal' ||
            e.target.id == 'CancelBtn' ||
            e.target.id == 'PersonaliteOptionBtn'){
            creditModal.style.display = "none";
        }
    });

    buttonsCreditos.forEach(buttonF => {
        if (buttonF.classList.contains('btn-selected')){
            buttonF.classList.remove('btn-selected')
        }
    })

    valorRecarga.forEach(input => {
            input.placeholder = "R$10.00"
    })
}

function abrirModalPersonalite(){
    personaliteModal.style.display = "flex";
    selecTypeRechargeModal.style.display = "none";

    personaliteModal.addEventListener('click', (e) => {
        if(e.target.id == 'personaliteModal' ||
            e.target.id == 'closeModal' ||
            e.target.id == 'CancelBtn'){
            personaliteModal.style.display = "none";
        }
    })

    buttonsCreditos.forEach(buttonF => {
        if (buttonF.classList.contains('btn-selected')){
            buttonF.classList.remove('btn-selected')
        }
    })

    valorRecarga.forEach(input => {
            input.placeholder = "R$10.00"
    })
}

function abrirModalUso(){
    ticketUseModal.style.display = "flex";

    ticketUseModal.addEventListener('click', (e) => {
        if(e.target.id == 'ticketUseModal' ||
            e.target.id == 'closeModal' ||
            e.target.id == 'CancelBtn'){
            ticketUseModal.style.display = "none";
        }
    })
}

function abrirModalTermoUso(){
    ticketUseModal.style.display = "none";
    usageTermModal.style.display = "flex";

    usageTermModal.addEventListener('click', (e) => {
        if(e.target.id == 'usageTermModal' ||
            e.target.id == 'closeModal'){
                usageTermModal.style.display = "none";
        }
    })
}

const openGeracao = document.querySelector('#codeGenerate');
openGeracao.addEventListener('click', () => abrirModalTermoGeracao('termUseModal'));

const openRecharge = document.querySelector('#codeRecharge');
openRecharge.addEventListener('click', () => abrirModalRecarga('rechargeModal'));

const openCredit = document.querySelector('#cardCredito');
openCredit.addEventListener('click', () => abrirModalCredito('creditModal'));

const openPersonalite = document.querySelector('#cardPersonalite');
openPersonalite.addEventListener('click', () => abrirModalPersonalite('personaliteModal'));

const openUseModal = document.querySelector('#useCode');
openUseModal.addEventListener('click', () => abrirModalUso('ticketUseModal'))

const openTermUseModal = document.querySelector('#btnticketUse');
openTermUseModal.addEventListener('click', () => abrirModalTermoUso('usageTermModal'));;