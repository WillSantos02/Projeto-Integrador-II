function iniciaModal(){
    const modal = document.getElementById('modalRecharge');
    modal.classList.add('mostrar');
    
    modal.addEventListener('click', (e) => {
        console.log(e.target.id);

        /**if(e.target.id == 'modalRecharge' || e.target.id == 'btnGenerate'){
            modal.classList.remove('mostrar');
        }**/
    });
}

const card = document.querySelector('.card');
card.addEventListener('click', () => iniciaModal('modalRecharge'));

card_personalite.addEventListener('click', () => iniciaModal('modalRecharge'));