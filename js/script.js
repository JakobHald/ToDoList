const container = document.querySelector('.container');
const taskBtn = document.querySelector('.taskBtn')






taskBtn.addEventListener('click', () =>{

    if(container.childElementCount === 10) {

    }
    else {

        ranNumber();

        
        
    }
})

function ranNumber(){
    const listArray = ["Skralde kartoffler", "Slå græsset", "Tømme opvasker", "Gå en tur", "Hente post", "Støvsuge", "Gøre rent", "Starte opvasker", "Tag en lur", "Hakke gulerødder"];
    const randomTask = listArray[(Math.floor(Math.random() * (listArray.length)))];
    container.innerHTML += `<p class="list">${randomTask}</p>`
    taskDone()
}

function taskDone(){
    const list = document.querySelectorAll('.list')

    list.forEach(item => {
        let clickCount = 0;

        item.addEventListener('click', (e) => {
            clickCount++;

            if (clickCount === 1) {
                e.target.classList.add('bold');

            } else if (clickCount === 2) {
                e.target.remove();
            }
        });
    });
}