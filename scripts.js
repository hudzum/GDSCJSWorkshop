function addTask(){
    const input = document.getElementById("taskInput");
    const newTask = input.value;//Getting the words from the text box in String
    if(newTask !="")
    {
        const task = document.createElement("li"); //Creating the List Element
        task.textContent = newTask; //Giving the list element the name of task
        
        task.onclick = function(){
            //Cross out the text
            this.classList.toggle("checked"); //Changes the className of List Element
        }
        task.ondblclick = function(){
            this.remove(); //On double click we remove the elements
        }

       const ToDoList= document.getElementById("todoList");//Getting the ToDoListElement
       ToDoList.appendChild(task); //Adding the List Element as a child
    }
    else{
        alert("Please Enter a real task");//No task was inputted
    }

}