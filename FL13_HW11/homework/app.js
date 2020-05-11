'use strict';

const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
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
    li.innerHTML = obj[key].title ;

    let folders = '';
    if (obj[key].folder === true){
      folders = `
      <span id="folder" class="material-icons">
      folder
      </span>
      `;
    }else if(obj[key].folder === false) {
      folders = `<span id="folder" class="material-icons">
        folder_open
      </span>`;
    } else {
      folders = `<span id="file" class="material-icons">
      insert_drive_file
      </span>`
    }
    
    
    
    let span = document.createElement('span');
    span.className = 'text'
    span.insertAdjacentHTML('beforeend', folders)
    li.prepend(span);
    span.append(span.nextSibling);
    
    span.onclick = (event) => {
      const target = event.target;
      
      
      
      if(obj[key].folder === false){
        obj[key].folder = true;
      } else if(obj[key].folder === true) {
        obj[key].folder = false;
      } else {
        obj[key].folder = undefined;
      }

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
    if (obj[key].children === null){
      childrenUl.innerHTML = '<li class="text-null">Folder is empty</li>' ;
    }
    if (obj[key].folder){
      obj[key].folder = false;
    }
    childrenUl.hidden = true;
    ul.append(li);
    
  }
  return ul;
  
}

createTree(rootNode, data);



rootNode.addEventListener('contextmenu', () => {
  event.preventDefault();
  console.log('context')
})


