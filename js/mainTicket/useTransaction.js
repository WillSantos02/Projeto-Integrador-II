const selectTransporte = document.getElementById('transporte')
const selectLocal = document.getElementById('local')
const useBtn = document.getElementById('btnticketUse')

useBtn.addEventListener('click', async (e) => {
    if(ticket.value.length != 0) {
        if(selectTransporte.value != '' && selectLocal.value != ''){
            const response = await fetch('http://localhost:8080/transactions', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    ticket: ticket.value
                },
                body: JSON.stringify({
                    place: selectLocal.value,
                    method: selectTransporte.value
                })
            }).then(res => res.json()).then(res=>res)

            exibeModal(response.status, 'Bilhete Utilizado com Sucesso!', 'transaction');
            ticketUseModal.style.display = 'none';

        }
    }
})
