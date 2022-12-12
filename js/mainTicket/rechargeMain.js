const btnPersonalite = document.getElementById('btnRecargaPersonalite')
const btnCreditos = document.getElementById('btnRecargaCreditos')

const modalMensagemSuccess = document.getElementById('modalMensagemSuccess')
const modalMensagemError = document.getElementById('modalMensagemError')
const msgModal = document.getElementById('msgModal')

const ticketCodeInput = document.getElementById('ticketCode')


btnPersonalite.addEventListener('click', async () => {
if (ticketCodeInput.value != '')
    {//tem algo digitado
        const btnSelect = document.querySelectorAll('.btn-selected')

        if (btnSelect.length != 0)
        {
            const response = await fetch('http://localhost:8080/recharges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ticket: ticketCodeInput.value,
                    type: btnSelect[0].id
                }
            }).then(res => res.json()).then(res=>res)

            exibeModal(response.status, 'Bilhete Recarregado com Sucesso!', 'recharge');

            ticketCode.dispatchEvent(new Event('input'));
        }
    }
})

btnCreditos.addEventListener('click', async () => {
    if (ticketCodeInput.value != '')
    {//tem algo digitado
        const btnSelect = document.querySelectorAll('.btn-selected')

        if (btnSelect.length != 0)
        {
            const response = await fetch('http://localhost:8080/recharges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ticket: ticketCodeInput.value,
                    type: btnSelect[0].id
                }
            }).then(res => res.json()).then(res=>res)
                
            exibeModal(response.status, 'Bilhete Recarregado com Sucesso!', 'recharge');
        }
    }
})

function exibeModal (status, message, operacao) {
    //alert(response.message);
    if(status == 'success'){

        if (operacao == 'recharge') {
            msgModal.innerHTML = message
        } else {
            msgModal.innerHTML = message
        }
        modalMensagemSuccess.style.display = 'flex';

        personaliteModal.style.display = "none";
        creditModal.style.display = "none";
            
        setTimeout(() => {
            modalMensagemSuccess.style.display = 'none';
            //consollog('entrou no setTimeout');
        }, 2000);
    } else {
        modalMensagemError.style.display = 'flex';
        personaliteModal.style.display = "none";
        creditModal.style.display = "none";
        //nsole.log('entrou no else');

        setTimeout(() => {
            modalMensagemError.style.display = 'none';
            // consollog('entrou no setTimeout');
        }, 2000);
    }
}