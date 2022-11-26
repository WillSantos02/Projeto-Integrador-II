function iniciaModal(){
    const modal = document.getElementById('useTicket');
    modal.classList.add('show');
    
    modal.addEventListener('click', (e) => {
        console.log(e.target.id);

        if(e.target.id == 'useTicket' || e.target.id == 'use-btn' || e.target.id == "cancel"){
            modal.classList.remove('show');
        }
    });
}

const openBtn = document.querySelector('.use-btn');
openBtn.addEventListener('click', () => iniciaModal('useTicket'));