'use strict';

const data = [{
    'folder': true,
    'title': 'Pictures',
    'children': [{
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [{
          'title': 'spain.jpeg'
        }]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [{
      'folder': true,
      'title': 'screenshots',
      'children': null
    }]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [{
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function createTree(rootNode, obj) {
  rootNode.append(createTreeDom(obj));
}

function createTreeDom(obj) {
  //if (!obj.length) return;

  const ul = document.createElement('ul');
  ul.className = 'tree';

  for (let key in obj) {
    const li = document.createElement('li');
    li.innerHTML = obj[key].title;

    let folders = '';
    if (obj[key].folder === true) {
      folders = `
      <span id="folder" class="material-icons">
      folder
      </span>
      `;
    } else if (obj[key].folder === false) {
      folders = `<span id="folder" class="material-icons">
        folder_open
      </span>`;
    } else {
      folders = `<span id="file" class="material-icons">
      insert_drive_file
      </span>`
    }



    let span = document.createElement('span');
    span.className = 'text';
    span.insertAdjacentHTML('afterbegin', folders);
    li.prepend(span);
    span.append(span.nextSibling);


    span.onclick = (event) => {
      const target = event.target;
      const folder = target.querySelector('span');
      folder.innerHTML = '';
      let folders = '';
      if (obj[key].folder === true) {
        obj[key].folder = false;
        folders = `
        <span id="folder" class="material-icons">
        folder
        </span>
        `;
      } else if (obj[key].folder === false) {
        obj[key].folder = true;
        folders = `<span id="folder" class="material-icons">
          folder_open
        </span>`;
      } else {
        obj[key].folder = undefined;
        folders = `<span id="file" class="material-icons">
        insert_drive_file
        </span>`
      }
      folder.insertAdjacentHTML('beforeend', folders);


      if (target.tagName !== 'SPAN') {
        return;
      }
      let childrenContainer = target.parentNode.querySelector('ul');
      if (!childrenContainer) {
        return;
      }
      childrenContainer.hidden = !childrenContainer.hidden;




    }

    let childrenUl = createTreeDom(obj[key].children);
    if (childrenUl) {
      li.append(childrenUl);
    }
    if (obj[key].children === null) {
      childrenUl.innerHTML = '<li class="text-null">Folder is empty</li>';
    }
    if (obj[key].folder) {
      obj[key].folder = false;
    }
    childrenUl.hidden = true;
    ul.append(li);

  }

  return ul;

}


function createContextMenu() {
  const ul = document.createElement('ul');
  ul.className = 'right-click-menu';

  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  li1.id = 'contentEditable';
  li2.id = 'delete';
  li1.textContent = 'Rename';
  li2.textContent = 'Delete item';
  ul.append(li1);
  ul.append(li2);
  rootNode.append(ul);


  let del = '';

  rootNode.addEventListener('contextmenu', event => {
    event.preventDefault();
    ul.style.top = `${event.clientY}px`;
    ul.style.left = `${event.clientX}px`;
    ul.classList.add('active');
    del = event.target.parentNode.querySelector('span');

  }, false);

  document.addEventListener('click', event => {
    const rightClick = 2;
    if (event.button !== rightClick) {
      ul.classList.remove('active');
    }
  }, false);

  document.querySelector('#contentEditable').addEventListener('click', () => {
    del.contentEditable = true;
  }, false);
  document.querySelector('#delete').addEventListener('click', () => {
    del.remove();
  }, false);



  return ul;
}
createContextMenu();
createTree(rootNode, data);