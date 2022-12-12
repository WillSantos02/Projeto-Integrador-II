const searchBtn = document.getElementById('searchBtn');
const returnMessage = document.getElementById('SearchMessage');
const ticket = document.getElementById('ticketCode')

const btnRecharge = document.getElementById('codeRecharge')
const btnUse = document.getElementById('useCode')

btnRecharge.classList.add('disable')
btnUse.classList.add('disable')

ticket.addEventListener('input', async () => {
    console.log('mudou')
    if (ticket.value.length == 12) {

        returnMessage.classList.remove('sucessMsg')
        returnMessage.classList.remove('warningMsg')
        returnMessage.classList.remove('errorMsg')

        const response = await fetch('http://localhost:8080/tickets/info', {
            method: 'GET',
            headers: {
                ticket: ticketCodeInput.value
            }
        }).then(res => res.json()).then(res=>res)



        if(response.payload.exist == false && response.payload.valid == false) {
            console.log('exist true')

            returnMessage.style.display = "flex"
            returnMessage.classList.add('errorMsg')
            returnMessage.innerHTML = "Código inválido!"

            btnRecharge.classList.add('disable')
            btnUse.classList.add('disable')
        }

        if(response.payload.exist == true && response.payload.valid == false){
            console.log('true false')


            returnMessage.style.display = "flex"
            returnMessage.classList.add('warningMsg')
            returnMessage.innerHTML = "Código válido porém não possui recarga para uso."

            btnRecharge.classList.remove('disable')
            btnUse.classList.add('disable')
        }

        if(response.payload.exist == true && response.payload.valid == true){
            console.log('true true')



            returnMessage.style.display = "flex"
            returnMessage.classList.add('sucessMsg')
            returnMessage.innerHTML = "Código válido e pode ser utilizado!"

            btnRecharge.classList.remove('disable')
            btnUse.classList.remove('disable')
        }
    }   
})

searchBtn.addEventListener('click', async () => {

    ticket.addEventListener("focus", () => 
        returnMessage.style.display = "none"
    )
    
    returnMessage.classList.remove('sucessMsg')
    returnMessage.classList.remove('warningMsg')
    returnMessage.classList.remove('errorMsg')

    btnRecharge.classList.remove('disable')
    btnUse.classList.remove('disable')

    if(ticketCodeInput.value != '') {
        const response = await fetch('http://localhost:8080/tickets/info', {
            method: 'GET',
            headers: {
                ticket: ticketCodeInput.value
            }
        }).then(res => res.json()).then(res=>res)

        if(response.payload.exist == false) {
            returnMessage.style.display = "flex"
            returnMessage.classList.add('errorMsg')
            returnMessage.innerHTML = "Código inválido!"

            btnRecharge.classList.add('disable')
            btnUse.classList.add('disable')
        }

        if(response.payload.exist == true && response.payload.valid == false){
            returnMessage.style.display = "flex"
            returnMessage.classList.add('warningMsg')
            returnMessage.innerHTML = "Código válido porém não possui recarga para uso."

            btnUse.classList.add('disable')
        }

        if(response.payload.exist == true && response.payload.valid == true){
            returnMessage.style.display = "flex"
            returnMessage.classList.add('sucessMsg')
            returnMessage.innerHTML = "Código válido e pode ser utilizado!"
        }

    }
})