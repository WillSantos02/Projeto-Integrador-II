function iniciaModal(){
    const modal = document.getElementById('termAcceptance');
    modal.classList.add('show');
    
    modal.addEventListener('click', (e) => {
        console.log(e.target.id);

        if(e.target.id == 'termAcceptance' || e.target.id == 'btnGenerate' || e.target.id == "cancel"){
            modal.classList.remove('show');
        }
    });
}

const openBtn = document.querySelector('.generic-btn');
openBtn.addEventListener('click', () => iniciaModal('termAcceptance'));