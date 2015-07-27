;(function() {
  var stoopidForm = document.querySelector('[data-js="myStoopidForm"]');
  var taskEntered = document.querySelector('[data-js="taskEntry"]');
  var taskList = document.querySelector('[data-js="todoItems"]');

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
        if(defaultLi) {
          taskList.removeChild(defaultLi);
        }
        var node = document.createElement("LI");
        console.log(node);
        var removeButton = "<button class='todo__itemRemove'>&#x2717;</button>";
        node.classList.add('todo__item');
        node.innerHTML = "<input type='checkbox' /><label>" + taskEntered.value + "</label>" + removeButton;
        taskList.appendChild(node);
      }
      stoopidForm.reset();
    }
  });
})()
