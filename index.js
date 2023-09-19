var message = document.getElementById("message");

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#new-task input').value.length == 0){
        message.innerText = "Please Enter a Task* ";
    }
    else{
        document.querySelector('#tasks').innerHTML  
        += `
        <div class ="task">
            <span id="taskname">
                ${document.querySelector('#new-task input').value}
            </span>
            <button class = "delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            };
        };   
        
        document.querySelector("#new-task input").value = "";

    };
};

