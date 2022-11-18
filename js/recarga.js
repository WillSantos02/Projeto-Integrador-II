const btnPersonalite = document.getElementById('btnRecargaPersonalite')
const btnCreditos = document.getElementById('btnRecargaCreditos')

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
            
            //alert(response.message);
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
            
            alert(response.message);
        }

    }
})