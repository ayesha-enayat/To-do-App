const toDoLists = document.querySelector('.toDoLists');
const listValue = document.querySelector('.todoValue');
let toDoListValue = [];


//function to get todoList in local strorage
const getTodoListFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('todoList') || '[]');

};

//function to set todoList in local strorage
const addTodoListLocalStorage = (todo) => {
    return localStorage.setItem('todoList', JSON.stringify(todo));
};
// console.log(typeof toDoListValue);


//show existing todo list
const showTodoList = () => {
    toDoListValue = getTodoListFromLocalStorage();
    toDoListValue.forEach((curTodo) => {
        const LiElement = document.createElement('li');
        LiElement.textContent = curTodo;

         // Create delete icon
         const deleteIcon = document.createElement('img');
         deleteIcon.src = 'images/icons8-delete-48.png';  // Your delete icon path
         deleteIcon.alt = 'Delete';
         deleteIcon.classList.add('delete-icon'); // Add class to style it
         deleteIcon.style.cursor = 'pointer';
 
         // Append delete icon to list item
        LiElement.appendChild(deleteIcon);

        toDoLists.appendChild(LiElement);
    });
};

//function to remove todo list value
const removeTodoList = (e) => {
    // console.log(e.target.textContent);
    // let currentTodo = e.target;
    if (e.target.classList.contains('delete-icon')) {
 // Get the text of the list item minus the "Delete" text from the icon
    const currentTodo = e.target.parentElement.textContent.replace('Delete', '').trim(); 
    console.log(toDoListValue);
    

    let updatedTodoList = toDoListValue.filter(
        (curTodoValue) => curTodoValue !== currentTodo
    );
    // console.log(updatedTodoList);

    //update local storage with the filtered list
    addTodoListLocalStorage(updatedTodoList);
    // currentTodo.remove();
    // toDoLists.innerHTML="";
    // showTodoList();

    // Update the in-memory list
    toDoListValue = updatedTodoList; 

    // Remove the list item from the DOM
    e.target.parentElement.remove();

    console.log(updatedTodoList);
    }
};

//function to add todo list 
const addTodoList = () => {

    toDoListValue = getTodoListFromLocalStorage();

    let newTodo = listValue.value.trim();
    console.log(newTodo);

    listValue.value = "";


    // Check if the input is not empty and is not already in the list
    if (newTodo.length != 0 && !toDoListValue.includes(newTodo)) {
        //  console.log(typeof toDoListValue);
        toDoListValue.push(newTodo);
        // toDoListValue =[...new Set(toDoListValue)];  remove duplicate from local storage


         // Add the new task to the list and update local storage
        addTodoListLocalStorage(toDoListValue);

        //create list item
        const LiElement = document.createElement('li');
        LiElement.textContent = newTodo;
        // Create delete icon
        const deleteIcon = document.createElement('img');
        deleteIcon.src = 'images/icons8-delete-48.png';  // Your delete icon path
        deleteIcon.alt = 'Delete';
        deleteIcon.classList.add('delete-icon');
        deleteIcon.style.cursor = 'pointer';

        // Append delete icon to list item
        LiElement.appendChild(deleteIcon);

        toDoLists.appendChild(LiElement);
    }
};

// Show existing tasks when the page loads
showTodoList();

//function on click add task list
document.querySelector('.btn').addEventListener('click', () => {
    addTodoList();
});

// Event listener for removing tasks
toDoLists.addEventListener('click', (e) => removeTodoList(e));



