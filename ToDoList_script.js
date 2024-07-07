const inputForm = document.querySelector("#inputform");
const taskList = document.querySelector("#tasklist");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputVal = document.querySelector("#input").value.trim();
  //CONDITIONAL STATEMENT FOR WRONG INPUT
  if (!inputVal) {
    alert("Please enter an item.");
  }

  else if (inputVal.length > 5) {
    alert("Below 5 letters only!");
  }
  //CALLING A FUNCTION STATEMENT
  else {
    input.style.borderColor = "";
    addToList(inputVal);
    document.querySelector("#input").value = "";
  }

});



//FUNCTION ADD TO LIST
function addToList(inputVal) {
  let newListItem = document.createElement("li");
    newListItem.classList.add("list-group-item","d-flex","justify-content-between","align-items-center");

  let taskSpan = document.createElement("span");
    taskSpan.textContent = inputVal;
    newListItem.appendChild(taskSpan);

  let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("btn-group");

  //DONE BUTTON
  let doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.classList.add("btn", "btn-success", "btn-sm", "me-2");
    doneButton.addEventListener("click", function (e) { e.preventDefault();
    taskSpan.style.textDecoration = "line-through";
    });
  buttonContainer.appendChild(doneButton);

  //DELETE BUTTON
  let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.addEventListener("click", function () { taskList.removeChild(newListItem);
    });
    
  buttonContainer.appendChild(deleteButton);
  newListItem.appendChild(buttonContainer);
  taskList.appendChild(newListItem);
}

