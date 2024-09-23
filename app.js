// const formEl=document.querySelector(".form")
// const inputEl=document.querySelector(".input")
// const ulEl=document.querySelector(".list")

// let list=JSON.parse(localStorage.getItem("list"))
// // list.forEach(task=>{
// //     toDoList(task)
// // })

// formEl.addEventListener("submit",(event)=>{
//     event.preventDefault()    /*ingane ezhuthiyal input box il enthengilum type cheyth enter koduthal page refresh avilla*/ 
//     toDoList()
 
// })

// function toDoList(task){
//     let newTask=inputEl.value 
//     if(task){
//         newTask=task.name
//     }
//     const liEl=document.createElement("li")
//     liEl.innerText=newTask
//     ulEl.appendChild(liEl)
//     inputEl.value=""
//     const checkBtnEl=document.createElement("div")
//     checkBtnEl.innerHTML=`<i class="fas fa-check-square">`
//     liEl.appendChild(checkBtnEl)
//     const trashBtnEl=document.createElement("div")
//     trashBtnEl.innerHTML=`<i class="fas fa-trash">`
//     liEl.appendChild(trashBtnEl)

//     checkBtnEl.addEventListener("click",()=>{
//         liEl.classList.toggle("checked")
//         updateLocalStorage()
//     })
    

//     trashBtnEl.addEventListener("click",()=>{
//         liEl.remove()
//         updateLocalStorage()
//     })
//     updateLocalStorage()
 

// }

// function updateLocalStorage(){
//     const liEls=document.querySelectorAll("li")
//     list=[]
//     liEls.forEach(liEl=>{
//         list.push({
//             name:liEl.innerText,
//             checked:liEl.classList.contains("checked")
//         })
//     })
//     localStorage.setItem("list",JSON.stringify(list))
// }


let todos = [];

// Add new task
document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    todos.push(taskText);  // Add task to the list
    taskInput.value = '';  // Clear input field
    displayTodos();        // Update displayed list
  }
}

// Display all tasks
function displayTodos() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';  // Clear current displayed list

  todos.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('todo-item');
    taskItem.innerHTML = `
      <span>${task}</span>
      <button class="edit-btn" onclick="editTask(${index})">Edit</button>
      <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
    `;
    todoList.appendChild(taskItem);
  });
}

// Edit task
function editTask(index) {
  const newTask = prompt('Edit task:', todos[index]);  // Show a prompt to edit task
  if (newTask !== null && newTask.trim() !== '') {
    todos[index] = newTask.trim();  // Update task in the array
    displayTodos();                 // Re-render the list
  }
}

// Delete task
function deleteTask(index) {
  todos.splice(index, 1);  // Remove task from the array
  displayTodos();          // Re-render the list
}

// Display initial empty state
displayTodos();
