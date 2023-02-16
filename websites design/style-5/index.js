const inputText = document.querySelector('#add-book input') ;
const link = document.querySelector('.button') ;
const ul = document.querySelector('ul') ;
const delate = `<span class = "delete">حذف</span>`
const checkbox = document.querySelector('#hide input') ;
const inputSearch = document.querySelector('#search-books input') ;

//

link.addEventListener('click' , function(e){
    const spanName = document.createElement('span') ;
    spanName.className = 'name' ;
    spanName.textContent = inputText.value ; 

    const li = document.createElement('li') ;
    li.appendChild(spanName) ;
    li.innerHTML += delate ;
    
    ul.appendChild(li) ;

    storeToLocalStorage(inputText.value) ;

    inputText.value = "" ;
    e.preventDefault() ;
})

let tasks ;
if(localStorage.getItem('inputText') === null){
    tasks = [] ;
}
else {
    tasks = localStorage.getItem('inputText').split(',') ;
}

function storeToLocalStorage(task){
    tasks.push(task) ;
    localStorage.setItem('inputText' , tasks) ;
}

document.addEventListener('DOMContentLoaded' , function(e){
    for(let item of tasks){
        const spanName = document.createElement('span') ;
        spanName.className = 'name' ;
        spanName.textContent = item ;
        
        const li = document.createElement('li') ;
        li.appendChild(spanName) ;
        li.innerHTML += delate ;
        ul.appendChild(li) ;
    }
})

////

checkbox.addEventListener('change' , function(e){
    if(checkbox.checked){
        ul.style.display = 'none' ;
    }
    else{
        ul.style.display = 'block' ;
    }
})

////

ul.addEventListener('click' , function(e){
    if(e.target.className === 'delete' ){
        e.target.parentElement.remove() ;
        removeFromLocalStorage(e.target.parentElement.children[0].textContent) ;
    }   
})

function removeFromLocalStorage(task){
    for(let i = 0 ; i < tasks.length ; i++){
        if(tasks[i] === task){
            tasks.splice(i , 1)
        }
    }

    if(tasks.length === 0){
        localStorage.clear() ;
    }
    else{
        localStorage.setItem('inputText' , tasks)
    }
}

////

inputSearch.addEventListener('keyup' , function(e){
    for(let book of ul.children){
        if(book.firstElementChild.textContent.indexOf(inputSearch.value) !== -1 ){
            book.style.display = 'block' ;
        }
        else{
            book.style.display = 'none' ;
        }
    }
})

// localStorage.clear() ;