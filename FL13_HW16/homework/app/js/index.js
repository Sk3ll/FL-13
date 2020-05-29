'use strict';

const statusErrors = 400;

const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');
const userList = document.getElementById('container_UserList');
const addName = document.querySelector('.container_input-name');
const addUsername = document.querySelector('.container_input-username');
const addBtn = document.querySelector('.container_input-addBtn');
const loading = document.querySelector('.loading');


function render(list) {
    const ul = document.createElement('ul');
    ul.className = 'list-users';

    for (let i = 0; i < list.length; i++) {

        const li = document.createElement('li');
        li.innerHTML = `
            <p>${list[i].id}</p>
        `;
        const formDiv = document.createElement('div');

        const inputName = document.createElement('INPUT');
        inputName.type = 'form';
        inputName.value = list[i].name;
        formDiv.append(inputName);
        const inputUsername = document.createElement('INPUT');
        inputUsername.type = 'form';
        inputUsername.value = list[i].username;
        formDiv.append(inputUsername)

        const updeBtn = document.createElement('BUTTON');
        const textUPD = document.createTextNode('Update');
        updeBtn.className = 'li_update';
        updeBtn.appendChild(textUPD);
        formDiv.append(updeBtn);

        const deleteBtn = document.createElement('BUTTON');
        const textDlt = document.createTextNode('Delete');
        deleteBtn.className = 'li_update';
        deleteBtn.appendChild(textDlt);
        formDiv.append(deleteBtn);

        li.append(formDiv)

        li.addEventListener('click', (event) => {

            if (event.target === deleteBtn) {
                dlt(list[i].id)
            }

            if (event.target === updeBtn) {
                upd(list[i].id, inputName.value, inputUsername.value)
            }
        })

        ul.append(li);
    }
    userList.append(ul)
}

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';

        if (body !== null) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.setRequestHeader('Authorization', 'admin')


        xhr.onload = () => {
            loading.style = 'display: none'
            if (xhr.status >= statusErrors) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject(xhr.response);
        }

        xhr.send(JSON.stringify(body));
    })
}

function dlt(id) {
    sendRequest('DELETE', `${baseUrl}/users/${id}`)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    location.reload();
}

function upd(id, name, username) {
    const body = {
        name,
        username
    }
    sendRequest('PUT', `${baseUrl}/users/${id}`, body)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    location.reload();
}

sendRequest('GET', baseUrl + '/users')
    .then(data => render(data))
    .catch(err => console.log(err))

addBtn.onclick = () => {
    const body = {
        name: addName.value,
        username: addUsername.value
    }
    sendRequest('POST', baseUrl + '/users', body)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    location.reload();
}