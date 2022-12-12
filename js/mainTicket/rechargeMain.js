const btnPersonalite = document.getElementById('btnRecargaPersonalite')
const btnCreditos = document.getElementById('btnRecargaCreditos')

const modalMensagemSuccess = document.getElementById('modalMensagemSuccess')
const modalMensagemError = document.getElementById('modalMensagemError')
const msgModal = document.querySelectorAll('.msgModal')

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

            if (response.status == 'success') {
                exibeModal(response.status, 'Bilhete Recarregado com Sucesso!', 'recharge');
                ticketCode.dispatchEvent(new Event('input'));
            } else {
                exibeModal(response.status, 'Erro ao recarregar bilhete!', 'recharge');
            }

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
            
            if (response.status == 'success') {
                exibeModal(response.status, 'Bilhete Recarregado com Sucesso!', 'recharge');
                ticketCode.dispatchEvent(new Event('input'));
            } else {
                exibeModal(response.status, 'Erro ao recarregar bilhete!', 'recharge');
            }
        }
    }
})

function exibeModal (status, message, operacao) {
    //alert(response.message);
    if(status == 'success'){

        if (operacao == 'recharge') {
            msgModal[0].innerHTML = message
        } else {
            msgModal[0].innerHTML = message
        }
        modalMensagemSuccess.style.display = 'flex';

        personaliteModal.style.display = "none";
        creditModal.style.display = "none";
            
        setTimeout(() => {
            modalMensagemSuccess.style.display = 'none';
            //consollog('entrou no setTimeout');
        }, 2000);
    } else {
        if (operacao == 'recharge') {
            msgModal[1].innerHTML = message
        } else {
            msgModal[1].innerHTML = message
        }

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