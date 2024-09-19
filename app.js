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


//show default todo list
const showTodoList = () => {
    toDoListValue = getTodoListFromLocalStorage();
    toDoListValue.forEach((curTodo) => {
        const LiElement = document.createElement('li');
        LiElement.textContent = curTodo;
        toDoLists.appendChild(LiElement);
    });
};

//function to remove todo list value
const removeTodoList = (e) => {
    console.log(e.target.textContent);
    let currentTodo = e.target;
    console.log(toDoListValue);

    let updatedTodoList = toDoListValue.filter(
        (curTodoValue) => curTodoValue !== currentTodo.textContent
    );
    // console.log(updatedTodoList);
    addTodoListLocalStorage(updatedTodoList);
    currentTodo.remove();
    // toDoLists.innerHTML="";
    // showTodoList();
    console.log(updatedTodoList);

};

//function to add todo list 
const addTodoList = () => {

    toDoListValue = getTodoListFromLocalStorage();

    let newTodo = listValue.value.trim();
    console.log(newTodo);

    listValue.value = "";

    if (newTodo.length != 0 && !toDoListValue.includes(newTodo)) {
        //  console.log(typeof toDoListValue);
        toDoListValue.push(newTodo);
        // toDoListValue =[...new Set(toDoListValue)];  remove duplicate from local storage



        addTodoListLocalStorage(toDoListValue);
        const LiElement = document.createElement('li');
        LiElement.textContent = newTodo;
        toDoLists.appendChild(LiElement);
    }
};

showTodoList();

//function on click add task list
document.querySelector('.btn').addEventListener('click', () => {
    addTodoList();
});

toDoLists.addEventListener('click', (e) => removeTodoList(e));