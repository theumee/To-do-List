
let unorderedList = document.getElementById('myTaskList');
let newTask = document.getElementById("submit-task"); 

newTask.addEventListener('submit',addTask);
unorderedList.addEventListener('click',removeTask);


function addTask(e){

        e.preventDefault();
        var task = document.getElementById("task");
        var li = document.createElement("li");
        if(task.value.trim() === ''){
            window.alert("Empty input!");
            task.value ='';
            return;
        }
        
        
        li.className = "incomplete-task";
        li.setAttribute("onclick","markcomp(this)");
        li.textContent = task.value;
        unorderedList.appendChild(li);
        

     
        var deleteTask = document.createElement("span");
        deleteTask.className = 'delete';
        deleteTask.textContent = "x";
        li.appendChild(deleteTask);
        
        task.value ='';
    }



    function removeTask(e){
        if(e.target.className === 'delete'){
                let li = e.target.parentElement;
                unorderedList.removeChild(li);
                
        }
        
        
    }
    function markcomp(e){
        if(e.className === 'incomplete-task'){
            e.className = 'completed-task';
        }
        else{
            e.className = 'incomplete-task';
        }
    }



    




