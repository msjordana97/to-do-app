
//Algo

//3 Create a list element and add class 'task-item' 
//4 Create a input element and add class 'task-checkbox' 
//5 Create a p element and add class 'task-description'
//6 Create a div element and add class 'delete-task-icon'
//7 Inside 'delete-task-icon' add svg icon correspondent to it 
//8 To delete-task-icon add a function to delete the list element when is clicked
//8 Append all the elements to the parent

//Variables
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-icon');

//1 Button disable until input field has some content
taskInput.addEventListener('keyup', function() {
    if(taskInput.value !== "") {
        addTaskButton.disabled = false;
    } else {
        addTaskButton.disabled = true;
    }
})
//2 create element li and add class task-item
var todoContainer = document.querySelector('.todo-tasks-list');

addTaskButton.addEventListener('click', ()=> {
    
    //Create elements
    var listItem = document.createElement('li');
    var listItemCheckbox = document.createElement('input');
    listItemCheckbox.type = 'checkbox';
    var listItemDescription = document.createElement('p');
    var listItemDeleteIconWrapper = document.createElement('div')
    var listItemDeleteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    listItemDeleteIcon.setAttribute('viewBox', '0 0 24 24');
    listItemDeleteIcon.setAttribute('fill', 'none');
    listItemDeleteIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    listItemDeleteIcon.innerHTML = `
    <g id="Interface / Trash_Full">
      <path id="Vector" d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    `;

    //Add class to elements
    listItem.classList.add('task-item');
    listItemCheckbox.classList.add('task-checkbox');
    listItemDescription.classList.add('task-description');
    listItemDeleteIconWrapper.classList.add('delete-task-icon');

    //Add value
    var taskValue = taskInput.value;
    listItemDescription.textContent = taskValue;

    //Delete value of input box
    taskInput.value = '';

    //Appending elements
    todoContainer.appendChild(listItem);
    listItem.appendChild(listItemCheckbox);
    listItem.appendChild(listItemDescription);
    listItem.appendChild(listItemDeleteIconWrapper);
    listItemDeleteIconWrapper.appendChild(listItemDeleteIcon);

    //Changing decoration of task when Checkbox is checked 
    var checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const description = this.nextElementSibling;

            if(this.checked) {
                description.style.textDecoration = 'line-through';
            } else {
                description.style.textDecoration = 'none';
            }
        })
    })

    //Delete task when listItemDeleteIcon is clicked
    listItemDeleteIconWrapper.addEventListener('click', () => {
        listItem.remove();
    })

})




