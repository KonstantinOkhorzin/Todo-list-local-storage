const bodyNote = document.querySelector('.row');
const parentText = document.querySelector('.parent-text');

let allNotes;
function toLocalStorage(){
    allNotes = bodyNote.innerHTML;
    localStorage.setItem('notes', allNotes);
}

parentText.addEventListener('change', () => {
    let randomNumber = Math.round(Math.random() * 10 - 5);
    let text = parentText.value;
    bodyNote.insertAdjacentHTML('beforeend', `<div style="transform: rotate(${randomNumber}deg)" class="new-note note-item">
    <p class="text">${text}</p>
    <i class="close fas fa-times"></i>
</div>`);
    parentText.value = '';
    toLocalStorage();
});


bodyNote.addEventListener('click', (e) => {
    if(e.target.tagName === "P") {  
        e.target.classList.toggle ('done');
        toLocalStorage(); 
    }
    else if(e.target.tagName === "I") {
        let close = e.target.parentNode; 
        close.remove(); 
        toLocalStorage();
    }
    });

    if(localStorage.getItem('notes')){
        bodyNote.innerHTML = localStorage.getItem('notes');
    }