
// var count = 0;
// var unorderedList = document.querySelector("ul");

// var addTaskBtn = document.getElementById("addTask").addEventListener('click',addTask);

// function addToStorage(){
//     var task = document.getElementById("task").value;

// }


// function addTask(){

//     var task = document.getElementById("task").value;
//     var elm = document.createElement("li");
//     count++;
//     elm.id = "task" + count;
//     elm.textContent = task;
//     unorderedList.appendChild(elm);

//     // var compeleted = document.createElement("button");
//     // compeleted.type = "button";
//     // compeleted.id = "comp-btn"  + count;
//     // compeleted.setAttribute('onclick','markAsCompleted(count)');
//     // compeleted.textContent = "✓";
//     // elm.appendChild(compeleted);

//     var deleteTask = document.createElement("button");
//     deleteTask.type = "button";
//     deleteTask.id = "del-btn";
//     deleteTask.textContent = "❌";
//     elm.appendChild(deleteTask);

// }
// // var markAsCompletedBtn = document.getElementById("comp-btn").addEventListener('click',markAsCompleted);
// function markAsCompleted(c){
//     document.getElementById('task' + c).className = "completed-task"; 
// }

// function deleteTaskBtn(){
//     document.getElementById("task" + count ).remove();
//     document.getElementById("del-btn" + count ).remove();
//     document.getElementById("comp-btn" + count ).remove();

// }

let unorderedList = document.getElementById('myTaskList');
let newTask = document.getElementById("submit-task"); 

newTask.addEventListener('submit',addTask);
unorderedList.addEventListener('click',removeTaskOrMark);

let taskArr = [];
function addTask(e){

        e.preventDefault();
        var task = document.getElementById("task");
        var elm = document.createElement("li");
        elm.innerHTML = `<input type='checkbox' value="${task.value}" id='chkBox'>`;
        if(task.value.trim() === ''){
            window.alert("Empty input!");
            task.value ='';
            return
        }
        
        unorderedList.appendChild(elm);
        
        let ip = document.getElementById('chkbox')
        // ip.textContent = task.value;
        // ip.className = 'incomplete-task';

        taskArr.push(task.value); 
     
        var deleteTask = document.createElement("button");
        deleteTask.type = "button";
        deleteTask.className = 'delete';
        deleteTask.textContent = "❌";
        elm.appendChild(deleteTask);
        
        task.value ='';


        
    }



    function removeTaskOrMark(e){
        if(e.target.classList.contains('delete')){
                let li = e.target.parentElement;
                unorderedList.removeChild(li);

            
        }
        else{
            let li = e.target;;
            if(li.className === 'incompleted-task')
                li.className = 'completed-task';
                li.className = 'incompleted-task';
        }

    }



    // LEFt for Later
    // document.querySelector('.taskList').addEventListener('mouseenter',displayDelBtn);
    // document.querySelector('.taskList').addEventListener('mouseleave',dontDisplayDelBtn);

    // function displayDelBtn(){
    //     console.log("i m here");
    //     document.querySelector('.delete').style.display = 'inline';
    // }

    // function dontDisplayDelBtn(){
    //     console.log("i m here");
    //     document.querySelector('.delete').style.display = 'none';
    // }

    

let totalTasks = document.getElementById('totalTasks');
totalTasks.textContent = `You have ${taskArr.length}  tasks left.`;    
console.log(taskArr);



