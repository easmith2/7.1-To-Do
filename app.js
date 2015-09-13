;(function() {
  var stoopidForm = document.querySelector('[data-js="myStoopidForm"]');
  var taskEntered = document.querySelector('[data-js="taskEntry"]');
  var taskList = document.querySelector('[data-js="todoItems"]');
  var taskIndex = 0;

  stoopidForm.addEventListener('submit', function(e) {
    e.preventDefault();
  });

  taskEntered.addEventListener('keyup', function(e) {
    var key = e.which || e.keyCode; // might need `|| 0` at the end of this
    if(key === 13) {
      if(taskEntered.value.trim().length === 0) {
        alert('The force is weak with you. Try again.');
      } else {
        var defaultLi = document.querySelector('[data-js="defaultLi"]');
        // clear the default msg for empty lists
        if(defaultLi) {
          taskList.removeChild(defaultLi);
        };
        // create a new li to house the task
        var taskLi = document.createElement("li");
        taskLi.classList.add('todo__item');
        taskLi.setAttribute('data-js','todoLi');

        // create the task content
        taskIndex++;
        var id = "c" + taskIndex.toString();
        var taskInput = document.createElement("input");
        var taskLabel = document.createElement("label");
        var removeButton = document.createElement("button");

        // specify the input type and id
        taskInput.type = "checkbox";
        taskInput.id = id;

        // specify the label `for` attr and include the entered task
        taskLabel.htmlFor = id;
        taskLabel.innerHTML = taskEntered.value;

        // specify the button icon and functionality
        removeButton.className += 'todo__itemRemove';
        removeButton.innerHTML = '&#x2717';
        removeButton.addEventListener('click', function(e) {
          e.preventDefault();
          e.target.parentNode.parentNode.removeChild(e.target.parentNode);
          if(document.querySelectorAll('[data-js="todoLi"]').length === 0) {
            taskList.appendChild(defaultLi);
          };
        });

        // add the input, label, and button to the li
        taskLi.appendChild(taskInput);
        taskLi.appendChild(taskLabel);
        taskLi.appendChild(removeButton);

        // add the li to the task list
        taskList.appendChild(taskLi);
      }
      stoopidForm.reset();
    }
  });

})();
