const searchBtn = document.getElementById('searchBtn');
const returnMessage = document.getElementById('SearchMessage');

searchBtn.addEventListener('click', async () => {
    if(ticketCodeInput.value != '') {
        const response = await fetch('http://localhost:8080/recharges', {
            method: 'GET',
            
        }).then(res => res.json()).then(res=>res)
        
        if(response.status == 'success') {
            returnMessage.textContent = "Código Válido!"
            returnMessage.classList.add('successMsg');
        }

    }else{
        returnMessage.textContent = "Código inválido!"
        returnMessage.classList.add('errorMsg');
    }
})