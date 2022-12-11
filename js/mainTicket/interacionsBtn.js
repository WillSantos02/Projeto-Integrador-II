const buttonsCreditos = document.querySelectorAll('.type-btn')
const valorRecarga = document.querySelectorAll('#valorRecarga')

buttonsCreditos.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('btn-selected')

        buttonsCreditos.forEach(buttonF => {
            if (buttonF != button){
                if (buttonF.classList.contains('btn-selected')){
                    buttonF.classList.remove('btn-selected')
                }
            }
        })

        valorRecarga.forEach(input => {
            input.placeholder = `R$ ${button.dataset.value}`
        })
    })
})