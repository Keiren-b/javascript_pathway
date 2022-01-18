





let myLibrary = [];


// book_1 = new Book('The Hobbit', 'J.R.R Tolkien', "295", 'Not Read')
// book_2 = new Book('Harry Potter', 'J.K Rowling', '600', 'Read')
// book_3 = new Book('The Lion, the Witch and the Wardrobe', 'C. S. Lewis', '135', 'Read')
// book_4 = new Book('The Da Vinci Code', 'Dan Brown', '531', 'Not Read')
// book_5 = new Book('The Catcher in the Rye', 'J. D. Salinger', '130', 'Not Read')
// book_6 = new Book('To Kill a Mockingbird', 'Harper Lee', '1358', 'Read')


// myLibrary.push(book_1)
// myLibrary.push(book_2)
// myLibrary.push(book_3)
// myLibrary.push(book_4)
// myLibrary.push(book_5)
// myLibrary.push(book_6)



const container = document.getElementById('cardContainer')

const addBook = (ev) => {
    ev.preventDefault()

    let title = document.getElementById('title').value;

    // checks if title is already present in array. If so, stops function.
for (let i=0; i<myLibrary.length; i++){
    if (myLibrary[i].title == title) {
        alert (title)
        return
    }
}

// or?? for (let i=0; i<myLibrary.length; i++){
//     if (myLibrary.includes(title){
//         alert (title)
//         return
//     }
// }

    // if title is not present in array, function continues and book is added
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').value
    let book = new Book(title, author, pages, read)
    myLibrary.push(book);


    // creates info div to store information and assigns each info div a data attribute corresponding to its index in the myLibrary array
    for (let i=0; i<myLibrary.length; i++){
        let title = document.getElementById('title').value;
        if (myLibrary.includes(title)) {
            return
        }
        else {
        const info = document.createElement('div')
        info.classList.add('info')
        info.setAttribute('data-index', i)
    
 
        //creates divs for card information
       const titleCard = document.createElement('h2')
       titleCard.textContent=myLibrary[i].title;
       titleCard.style.fontStyle = 'italic'
       const authorCard = document.createElement('h2')
       authorCard.textContent = myLibrary[i].author;
       let pagesCard = document.createElement('h2')
       pagesCard.textContent='Number of Pages: ' + myLibrary[i].pages
       let readCard = document.createElement('h2')
       readCard.textContent = myLibrary[i].read

       // creates remove button
       let rmv = document.createElement('button')
       rmv.classList.add('rmv')
       rmv.textContent='Remove'

       
    //    how to do this remove function????

       rmv.addEventListener('click', (element)=> {
        let rmvObj = element.target.parentElement
        // for (let i=0; i<myLibrary.length; i++){
        //   document.getElementsByClassName('info')[i].setAttribute('data-index', i)
          
        // }
     
        rmvObj.remove()
        
        
       })
    //    document.getElementsByClassName('info')[1].dataset.index

      

       container.appendChild(info)
       info.appendChildren = function (){
            for (let j=0; j< arguments.length; j++){
                this.appendChild(arguments[j]);
            }
       }

       info.appendChildren(titleCard, authorCard, pagesCard, readCard, rmv)
    //    info.appendChild(title, author, pages, read)
   }}}

    document.querySelector('form').reset()
    



document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn').addEventListener('click', addBook)
})


function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// function openForm() {
//     document.getElementById("formContainer").style.display = "block";
//   }
//   document.getElementById('add').addEventListener('click', openForm)

//   function closeForm() {
//     document.getElementById("formContainer").style.display = "none";
//   }

//   document.getElementById('btn').addEventListener('click', closeForm)

//

// 