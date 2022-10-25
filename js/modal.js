function iniciaModal(){
    const modal = document.getElementById('termAcceptance');
    modal.classList.add('mostrar');
    
    modal.addEventListener('click', (e) => {
        console.log(e.target.id);

        if(e.target.id == 'termAcceptance' || e.target.id == 'btnGenerate' || e.target.id == "cancel"){
            modal.classList.remove('mostrar');
        }
    });
}

const btnext = document.querySelector('.btnext');
btnext.addEventListener('click', () => iniciaModal('termAcceptance'));