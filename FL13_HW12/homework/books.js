'use strict';

(function () {

    const books = [{
            'id': 0,
            'bookName': 'Javascript for kids',
            'author': 'Nick Morgan',
            'img': 'https://www.bookclub.ua/images/db/goods/k/49789_84568_k.jpg',
            'plot': `JavaScript for Kids is a lighthearted introduction that 
    teaches programming essentials through patient, step-by-step examples 
    paired with funny illustrations. ... With visual examples like bouncing balls, 
    animated bees, and racing cars, you can really see what you're programming.`
        },
        {
            'id': 1,
            'bookName': 'A Briefer History of Time',
            'author': 'Stephen Hawking',
            'img': 'https://www.bookclub.ua/images/db/goods/53450_98111.jpg',
            'plot': `A Brief History of Time: From the Big Bang to Black Holes is a 
    popular-science book on cosmology (the study of the origin and evolution of 
        the universe) by British physicist Stephen Hawking. ... Finally, he talks
         about the search for a unifying theory that describes everything in the 
         Universe in a coherent manner.`
        },
        {
            'id': 2,
            'bookName': 'Head First Python: A Brain-Friendly Guide',
            'author': 'Paul Berry',
            'img': 'https://s5-goods.ozstatic.by/2000/819/630/10/10630819_0.jpg',
            'plot': `Paul Berry’s Head First Python: A Brain-Friendly Guide uses a more 
    innovative approach to teaching the Python programming language. Rather than 
    providing a text-heavy learning manual, Head First Python is formatted in a 
    “visually rich” manner to help “engage your mind” better.
    The core content of the book will help you understand the fundamentals of Python, 
    take you through building a web application, cover database management, exception
     handling, and data wrangling. Ultimately, though, if you’re looking for a more
      engaging style of a book to read to learn Python, Head First Python’s unique 
      format is worth checking out.
    `
        },
        {
            'id': 3,
            'bookName': 'Head First Java, 2nd Edition',
            'author': 'Kathy Sierra, Bert Bates',
            'img': 'https://javarush.ru/images/article/63198827-bd9a-4545-8b4e-4f99a3ce1e64/512.webp',
            'plot': `It's fast, it's fun, and it's effective. And, despite 
    its playful appearance, Head First Java is serious stuff: a complete 
    introduction to object-oriented programming and Java. You'll learn everything 
    from the fundamentals to advanced topics, including threads, network sockets, 
    and distributed programming with RMI.`
        },
        {
            'id': 4,
            'bookName': 'Head First PHP & MySQL',
            'author': 'Lynn Beighley, Michael Morrison',
            'img': 'https://softwares.at.ua/knigi/php_mysql.jpg',
            'plot': `Head First PHP & MySQL offers the same visually rich format that's 
    turned every title in the Head First series into a bestseller, with plenty of 
    exercises, quizzes, puzzles, and other interactive features to help you retain 
    what you've learned.`
        }
    ]


    function addBooksLocal() {

        for (let i = 0; i < books.length; i++) {
            if (localStorage.getItem(i)) {
                return;
            } else {
                localStorage.setItem(books[i].id, JSON.stringify(books[i]))
            }
        }
    }
    addBooksLocal()

})()