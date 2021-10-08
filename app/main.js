
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
unorderedList.addEventListener('click',removeTask);

let listArr = [];
let  idx = 0;

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
        
        // ip.textContent = task.value;
        // ip.className = 'incomplete-task';

     
        var deleteTask = document.createElement("span");
        deleteTask.className = 'delete';
        deleteTask.textContent = "x";
        li.appendChild(deleteTask);
        
        task.value ='';

    }


        
    

    // window.addEventListener('load',showTasks);

    // function showTasks(){
    //     // for(let i = 0 ; i < listArr.length; i++){

        
    // }



    function removeTask(e){
        if(e.target.className === 'delete'){
                let li = e.target.parentElement;
                unorderedList.removeChild(li);
                
        }
        
        
    }
    function markcomp(e){
        e.className = 'completed-task';
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

    






