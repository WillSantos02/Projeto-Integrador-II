const searchBtn = document.getElementById('searchBtn');
const returnMessage = document.getElementById('SearchMessage');
const ticket = document.getElementById('ticketCode')

const btnRecharge = document.getElementById('codeRecharge')
const btnUse = document.getElementById('useCode')
const btnCreate = document.getElementById('codeGenerate')

btnRecharge.classList.add('disable')
btnUse.classList.add('disable')

ticket.addEventListener("focus", () => 
    returnMessage.style.display = "none"
)

ticket.addEventListener('input', async () => {
    if (ticket.value.length == 12) {

        returnMessage.classList.remove('sucessMsg')
        returnMessage.classList.remove('warningMsg')
        returnMessage.classList.remove('errorMsg')

        btnCreate.classList.remove('purple')
        btnRecharge.classList.remove('purple')
        btnUse.classList.remove('purple')

        const response = await fetch('http://localhost:8080/tickets/info', {
            method: 'GET',
            headers: {
                ticket: ticketCodeInput.value
            }
        }).then(res => res.json()).then(res=>res)



        if(response.payload.exist == false && response.payload.valid == false) {

            returnMessage.style.display = "flex"
            returnMessage.classList.add('errorMsg')
            returnMessage.innerHTML = "Código inválido!"
            
            btnCreate.classList.add('purple')
            btnRecharge.classList.add('disable')
            btnUse.classList.add('disable')
        }

        if(response.payload.exist == true && response.payload.valid == false){

            returnMessage.style.display = "flex"
            returnMessage.classList.add('warningMsg')
            returnMessage.innerHTML = "Código válido porém não possui recarga para uso."

            btnRecharge.classList.remove('disable')
            btnRecharge.classList.add('purple')
            btnUse.classList.add('disable')
        }

        if(response.payload.exist == true && response.payload.valid == true){

            returnMessage.style.display = "flex"
            returnMessage.classList.add('sucessMsg')
            returnMessage.innerHTML = "Código válido e pode ser utilizado!"

            btnRecharge.classList.remove('disable')
            btnUse.classList.remove('disable')
            btnUse.classList.add('purple')
        }
    }   
})

searchBtn.addEventListener('click', async () => {
    
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