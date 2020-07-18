let people = document.getElementById('people');

function createImg() { // function pour créer une image, background aléatoire

    let newDiv = document.createElement('div');
    newDiv.classList.add('divImg');
    newDiv.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    people.appendChild(newDiv);

    let newPerson = document.createElement('img');
    newPerson.setAttribute('src', 'person.png');

    newDiv.append(newPerson);
}

let form = document.createElement('form');
form.setAttribute('method', 'post');

// créer les éléments du form
let select = document.createElement('select');
select.setAttribute('name', 'matieres');
select.setAttribute('id', 'matieres');
form.append(select);

let button = document.createElement('input');
button.setAttribute('type', 'submit');
button.setAttribute('value', 'OK');
form.append(button);

let option1 = document.createElement('option');
option1.textContent = 'Sélectionnez';
option1.setAttribute('value', ' ');
option1.setAttribute('selected', '');
select.append(option1);

let option2 = document.createElement('option');
option2.textContent = 'Développement';
option2.setAttribute('value', 'dev');
select.append(option2);

let option3 = document.createElement('option');
option3.textContent = 'Design';
option3.setAttribute('value', 'design');
select.append(option3);

let option4 = document.createElement('option');
option4.textContent = 'Marketing';
option4.setAttribute('value', 'mkt');
select.append(option4);

let divImg = document.getElementsByClassName('divImg');

for (i = 0; i < 30; i++) {
    createImg(); // 30 images se créent

    divImg[i].addEventListener('contextmenu', function (e) {
        e.preventDefault();
        form.reset();
        form.style.display = 'block';
        this.append(form); // le form se met dans la div de l'img
    });

    form.addEventListener('submit', function (e) { // envoie du form : n'actualise pas
        e.preventDefault();

        // Connaitre la matiere sélectionné
        let selecte = document.querySelector("select");
        let value = selecte.options[selecte.selectedIndex].value;


        // Prendre les blocs de div
        let dev = document.getElementById('dev');
        let design = document.getElementById('design');
        let mkt = document.getElementById('mkt');

        if (value === 'dev') {
            dev.appendChild(form.parentElement);
            form.style.display = 'none'; // De base j'avais form.remove();, mais ça m'affiche 30 erreurs dans chrome alors que ça fonctionnait...
        } else if (value === 'design') {
            design.appendChild(form.parentElement);
            form.style.display = 'none';
        } else if (value === 'mkt') {
            mkt.appendChild(form.parentElement);
            form.style.display = 'none';
        } else if (value === ' ') {
            people.appendChild(form.parentElement);
            form.style.display = 'none';
        }

    });

}