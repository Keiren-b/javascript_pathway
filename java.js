let myLibrary = [];
const container = document.getElementById('cardContainer')

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

book_1 = new Book('The Lord of the Rings', 'J.R.R Tolkien', "295", 'Not Read')
book_2 = new Book('Harry Potter and the Prisoner of Azkaban', 'J.K Rowling', '600', 'Read')
book_3 = new Book('The Lion, The Witch and the Wardrobe', 'C. S. Lewis', '135', 'Read')
book_4 = new Book('Ulyses',  'James Joyce', '531', 'Not Read')
book_5 = new Book('The Catcher in the Rye', 'J. D. Salinger', '130', 'Not Read')
book_6 = new Book('To Kill a Mockingbird', 'Harper Lee', '1358', 'Read')


myLibrary.push(book_1)
createDivs()
myLibrary.push(book_2)
createDivs()
myLibrary.push(book_3)
createDivs()
myLibrary.push(book_4)
createDivs()
myLibrary.push(book_5)
createDivs()
myLibrary.push(book_6)
createDivs()

// for (let i=1; i<20; i++){
//     x = new Book (i,i,i,'read')
//     myLibrary.push(x)
//     createDivs()
// }

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('add').addEventListener('click', addBook)
})

const addBook = (ev) => {
    ev.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
    createDivs()
}

function createDivs() {

    const info = document.createElement('div')
    info.classList.add('info')
    // info.dataset.index = myLibrary.length-1
    
    const titleCard = document.createElement('h2')
    titleCard.textContent=myLibrary[myLibrary.length-1].title
    titleCard.style.fontStyle = 'italic'
    info.appendChild(titleCard)

    const authorCard = document.createElement('h2')
    authorCard.textContent = myLibrary[myLibrary.length-1].author
    info.appendChild(authorCard)

    const pagesCard = document.createElement('h2')
    pagesCard.textContent='Number of Pages: ' + myLibrary[myLibrary.length-1].pages
    info.appendChild(pagesCard)

    const readCard = document.createElement('button')
    readCard.textContent = myLibrary[myLibrary.length-1].read
    info.appendChild(readCard)
    if (readCard.textContent === 'Read'){

        readCard.classList.toggle('toggleRead')
    } else {
        
        readCard.classList.toggle('toggleNotRead')
        
    }
    readCard.classList.add('cardBtn')
    readCard.addEventListener('click', readToggle)

    const rmv = document.createElement('button')
       rmv.textContent='Remove';
       rmv.addEventListener('click', removeCard)
       
       
        // (element)=> {
        //         let rmvObj = element.target.parentElement       
        //         rmvObj.remove()
        // })
    info.appendChild(rmv)

    container.appendChild(info)
    assignData()       
       }
    
    function removeCard(element) {
        let rmvObj = element.target.parentElement
        myLibrary.splice(rmvObj.dataset.index, 1)
        rmvObj.remove()
        assignData()

    }

    function assignData() {
        for (let i=0; i<myLibrary.length; i++){
            let info = document.querySelectorAll('.info')
            info[i].dataset.index = i
        }
    }
    
       
    // let x = document.createElement('button')
    // x.textContent = 'texttexttext'
    // container.appendChild(x)
    // x.addEventListener('click', ()=> {
    //     let info = document.querySelectorAll('.info')[3]
    //     info.childNodes[3].textContent = 'HELLO HELLO'
        
    // })


// myLibrary[x].read = read or not read
// let readToggle = element.target.parentElement
// click readToggle button
//readToggle[4] = read or not read

function readToggle(event){

    if (event.target.textContent === 'Read'){
        event.target.classList.remove('toggleRead')
        event.target.classList.toggle('toggleNotRead')
        event.target.textContent = 'Not Read';
    } else {
        event.target.classList.remove('toggleNotRead')
        event.target.classList.toggle('toggleRead')
        event.target.textContent = 'Read'
    }
}



