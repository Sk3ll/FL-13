'use strict';

const root = document.getElementById('root');

function createHeader() {
    const header = document.createElement('div');
    header.className = 'header';
    root.append(header);

    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.innerHTML = `
        <p class"logo-text">My <span class="logo-span">Book</span></p>
    `;
    header.append(logo);
}

function createMain() {
    const main = document.createElement('div');
    main.className = 'main';

    const aBtn = document.createElement('A');
    aBtn.href = `#add`;


    const addButton = document.createElement('BUTTON');
    const textAdd = document.createTextNode('Add');

    addButton.className = 'main-button';
    addButton.id = 'add-butoon';


    addButton.appendChild(textAdd);


    main.append(listBook());
    main.append(aBtn);
    aBtn.append(addButton);

    root.append(main);
}

function createFooter() {
    const footer = document.createElement('div');
    footer.className = 'footer';
    const footerWrap = document.createElement('div');
    footerWrap.className = 'footer-wrap';
    footerWrap.innerHTML = `
        <p class="footer-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat sed diam voluptua.
            <span>Copyright &copy; 2020 EPAM</span>
        </p>
    `;
    footer.append(footerWrap);

    root.append(footer);
}

function listBook() {

    const ul = document.createElement('ul');
    ul.className = 'list-books'


    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(i) === null) {
            return;
        } else {
            const li = document.createElement('li');
            li.innerHTML = JSON.parse(localStorage.getItem(i)).bookName;

            const editButton = document.createElement('BUTTON');
            const textEdit = document.createTextNode('Edit');
            editButton.className = 'edit-button';
            editButton.id = JSON.parse(localStorage.getItem(i)).id;
            editButton.appendChild(textEdit);
            li.append(editButton);


            let a = document.createElement('A');
            a.className = 'text';
            a.href = `?id=${JSON.parse(localStorage.getItem(i)).id}#preview`;
            a.id = JSON.parse(localStorage.getItem(i)).id;
            li.prepend(a);
            a.append(a.nextSibling);


            let aBtn = document.createElement('A');
            aBtn.href = `?id=${JSON.parse(localStorage.getItem(i)).id}#edit`;
            aBtn.id = JSON.parse(localStorage.getItem(i)).id;
            li.append(aBtn);
            aBtn.append(a.nextSibling);

            ul.append(li)
        }
    }
    return ul;
}
createHeader();
createMain();

function previewBlock({
    bookName,
    author,
    img,
    plot
}) {
    const preview = document.createElement('div');
    preview.className = 'preview';
    preview.insertAdjacentHTML('beforeend', `
        <img src=${img} alt=${bookName}></img>
        <h2>${bookName}</h2>
        <h5>Author: ${author}</h5>
        <p>${plot}</p>
    `);

    return preview;
}

function changePreview() {
    const prev = document.createElement('div');
    prev.className = 'change-preview';
    prev.id = 'preview';

    const ID = 4;
    let content;
    if (location.hash === '#preview') {


        if (JSON.parse(localStorage.getItem(location.search.slice(ID)))) {
            content = JSON.parse(localStorage.getItem(location.search.slice(ID)));
        } else {
            return;
        }
        if (content === undefined) {
            return;
        }

        prev.append(previewBlock(content));


        addOwnBtn('Cancel', prev, () => {
            location.href = location.origin + location.pathname;
        })
        root.append(prev);
    }
}

function editBlock({
    bookName,
    author,
    img,
    plot
}) {
    const edit = document.createElement('div');
    edit.className = 'edit';
    edit.insertAdjacentHTML('beforeend', `
        <input class="input-img" name="img" required="required" value="${img}"></input><br>
        <input class="input-name" name="img" required="required" value="${bookName}"></input><br>
        <input class="input-author" name="img" required="required" value="${author}"></input><br>
        <input class="input-plot" name="img" required="required" value="${plot}"></input>
    `);

    return edit;
}

function changeEdit() {
    const editing = document.createElement('div');
    editing.className = 'change-edit';
    let ID = 4;
    let content;
    if (location.hash === '#edit') {
        if (JSON.parse(localStorage.getItem(location.search.slice(ID)))) {
            content = JSON.parse(localStorage.getItem(location.search.slice(ID)));
        } else {
            return;
        }
        if (content === undefined) {
            return;
        }

        editing.append(editBlock(content));

        addOwnBtn('Save', editing, () => {
            const delay = 3000;

            setTimeout(() => {
                let changeBook = {
                    'id': location.search.slice(ID),
                    'bookName': document.querySelector('.input-name').value,
                    'author': document.querySelector('.input-author').value,
                    'img': document.querySelector('.input-img').value,
                    'plot': document.querySelector('.input-plot').value
                }
                localStorage.setItem(`${location.search.slice(ID)}`, JSON.stringify(changeBook));
                alert('Book successfully updated');
                window.onpopstate = (() => {
                    location.hash = '#preview'
                })()

            }, delay);
        })

        addOwnBtn('Cancel', editing, () => {
            if (confirm('Discard changes?')) {
                history.back();
            }
        })

        root.append(editing);

    }
}

function addOwnBtn(name, section, func) {
    const btn = document.createElement('BUTTON');
    const textBtn = document.createTextNode(name);

    btn.className = 'main-button';
    btn.id = `${name}-button`;
    btn.appendChild(textBtn);
    section.append(btn)
    btn.addEventListener('click', func)
}

function addBlock() {
    const adding = document.createElement('div');
    const add = document.createElement('div');
    adding.className = 'change-add';


    if (location.hash === '#add') {
        location.href = '/index.html#add';
        add.className = 'edit';
        add.insertAdjacentHTML('beforeend', `
            <input class="input-img" name="img" required="required" placeholder="Link img"></input><br>
            <input class="input-name" name="bookName" required="required" placeholder="Book name"></input><br>
            <input class="input-author" name="author" required="required" placeholder="Author"></input><br>
            <input class="input-plot" name="plot" required="required" placeholder="Plot"></input>
        `);
        adding.append(add);

        addOwnBtn('Save', adding, () => {
            let addBook = {
                'id': localStorage.length,
                'bookName': document.querySelector('.input-name').value,
                'author': document.querySelector('.input-author').value,
                'img': document.querySelector('.input-img').value,
                'plot': document.querySelector('.input-plot').value
            }


            localStorage.setItem(localStorage.length, JSON.stringify(addBook));
            location.href = `/index.html?id=${localStorage.length-1}#preview`;
        })
        addOwnBtn('Cancel', adding, () => {
            if (confirm('Discard changes?')) {
                history.back();
            }
        })
        root.append(adding);
    }

}

window.onhashchange = () => {
    location.reload()
}

addBlock()
changeEdit();
changePreview()
createFooter();

function errorList() {
    if (location.hash !== '#add' && location.hash !== '#preview' && location.hash !== '#edit' && location.hash !== '') {
        location.href = '/index.html';
    }
    let x = 1;
    for (let i = 0; i < localStorage.length; i++) {
        let ID = 4;
        if (Number(location.search.slice(ID)) === i) {
            console.log('все в порядке');
        } else {
            x++;
        }
        if (x > localStorage.length) {
            location.href = '/index.html';
        }
    }
}

errorList();