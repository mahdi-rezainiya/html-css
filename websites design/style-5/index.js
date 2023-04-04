const searchBox = document.querySelector('#search-books input');
const ul = document.querySelector('ul')
const link = document.querySelector('.button')
const delate = `<span class="delete">حذف</span>`;
const inputText = document.querySelector('#add-book input') ;
const checkbox = document.querySelector('#hide input') ; ;

searchBox.addEventListener('keyup' , function(e){
    for(let book of ul.children){
        if(book.firstElementChild.textContent.indexOf(searchBox.value) !== -1){
            book.style.display = 'block' ;
        }
        else{
            book.style.display = 'none' ; 
        }
    }
})

ul.addEventListener('click' , function(e){
    if(e.target.className === 'delete'){
        e.target.parentElement.remove();
    }
    removeFromLocalStorage(e.target.parentElement.children[0].textContent)
})

checkbox.addEventListener('change' , function(e){
    if(checkbox.checked){
        ul.style.display = 'none' ;
    }
    else{
        ul.style.display = 'block'
    }
    e.preventDefault()
})

link.addEventListener('click' , function(e){
    const spanName = document.createElement('span');
    spanName.className = 'name' ;
    spanName.textContent = inputText.value ;
    const li = document.createElement('li');
    li.appendChild(spanName);
    li.innerHTML += delate ;
    ul.appendChild(li);
    storeToLocalStorage(inputText.value);
    e.preventDefault()
    inputText.value = "" ;
})

var tasks ;
if(localStorage.getItem('inputText') === null){
    tasks = [] ;
}
else{
    tasks = localStorage.getItem('inputText').split(',')
}

function storeToLocalStorage(task){
    tasks.push(task);
    localStorage.setItem('inputText' , tasks)
}

document.addEventListener('DOMContentLoaded' , function(e){
    for(let item of tasks){
        const spanName = document.createElement('span');
        spanName.className = 'name' ;
        spanName.textContent = item ;
        const li = document.createElement('li');
        li.appendChild(spanName);
        li.innerHTML += delate ;
        ul.appendChild(li)  
    }
})

function removeFromLocalStorage(task){
    for(let i = 0 ; i < tasks.length ; i++){
        if(tasks[i] === task){
            tasks.splice(i , 1)
        }
    }
    if(tasks.length === 0){
        localStorage.clear();
    }
    else{
        localStorage.setItem('inputText' , tasks)
    }
}
















































































































































