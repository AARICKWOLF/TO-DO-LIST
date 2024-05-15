// script.js

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  const todoText = todoInput.value.trim(); // Get input value and trim whitespace
  
  if (todoText !== '') { // Check if input value is not empty
    addTodoItem(todoText); // Add new to-do item
    todoInput.value = ''; // Clear input field
  }
});

// Function to add a new to-do item
function addTodoItem(todoText) {
  const todoItem = document.createElement('li');
  todoItem.textContent = todoText;
  
  // Event listener for clicking on a to-do item to mark as completed
  todoItem.addEventListener('click', function() {
    this.classList.toggle('completed');
  });
  
  // Event listener for clicking on the delete button to remove the to-do item
  const deleteButton = document.createElement('span');
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event from bubbling up to the parent li element
    todoItem.remove(); // Remove the todoItem when the delete button is clicked
  });
  
  todoItem.appendChild(deleteButton); // Append delete button to todoItem
  todoList.appendChild(todoItem); // Append todoItem to todoList
}