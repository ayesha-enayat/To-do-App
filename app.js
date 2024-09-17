const toDoLists = document.querySelector('.toDoLists');
const listValue = document.querySelector('.todoValue');
let toDoListValue = [];

const getTodoListFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('todoList') || '[]');

};


const addTodoListLocalStorage = (todo) => {
    return localStorage.setItem('todoList', JSON.stringify(todo));
};
console.log(typeof toDoListValue);

//function to add task list 
const addTodoList = () => {

    toDoListValue = getTodoListFromLocalStorage();

    let newTodo = listValue.value.trim();
    console.log(newTodo);

    if (newTodo.length != 0) {
         // console.log(typeof toDoListValue);
        toDoListValue.push(newTodo);


        addTodoListLocalStorage(toDoListValue);
        const LiElement = document.createElement('li');
        LiElement.textContent = listValue.value;
        toDoLists.appendChild(LiElement);
    }

};

//function on click add task list
document.querySelector('.btn').addEventListener('click', () => {
    addTodoList();
});