const btnPersonalite = document.getElementById('    ')
const btnCreditos = document.getElementById('btnRecargaCreditos')

const modalMensagemSuccess = document.getElementById('modalMensagemSuccess')
const modalMensagemError = document.getElementById('modalMensagemError')

btnPersonalite.addEventListener('click', async () => {
    if (inputPersonalite.value != '')
    {//tem algo digitado
        const btnSelect = document.querySelectorAll('.btn-selected')

        if (btnSelect.length != 0)
        {
            const response = await fetch('http://localhost:8080/recharges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ticket: inputPersonalite.value,
                    type: btnSelect[0].id
                }
            }).then(res => res.json()).then(res=>res)

            exibeModal(response.status);
        }
    }
})

btnCreditos.addEventListener('click', async () => {
    if (inputCreditos.value != '')
    {//tem algo digitado
        const btnSelect = document.querySelectorAll('.btn-selected')

        if (btnSelect.length != 0)
        {
            const response = await fetch('http://localhost:8080/recharges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ticket: inputCreditos.value,
                    type: btnSelect[0].id
                }
            }).then(res => res.json()).then(res=>res)
            
            exibeModal(response.status);
        }
    }
})

function exibeModal (status) {
    //alert(response.message);
    if(status == 'success'){
        modalMensagemSuccess.style.display = 'flex';
        //console.log('entrou no if');
        
        setTimeout(() => {
            modalMensagemSuccess.style.display = 'none';
            //consollog('entrou no setTimeout');
        }, 5000);
    } else {
        modalMensagemError.style.display = 'flex';
        //nsole.log('entrou no else');

        setTimeout(() => {
            modalMensagemError.style.display = 'none';
            // consollog('entrou no setTimeout');
        }, 5000);
    }
}