const input = document.querySelector("input")
const addBtn = document.querySelector(".add-btn")
const List = document.querySelector(".list")

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTask(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function renderTask(){
    List.innerHTML = "";
    tasks.forEach((task,index)=>{
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = task.text;
        span.className = task.completed ? 'completed':'';
        span.contentEditable = true;
        span.addEventListener("blur",()=>{
        tasks[index].text = span.textContent.trim();
        saveTask();
        })

        span.addEventListener("click",()=>{
            tasks[index].completed = !tasks[index].completed;
            saveTask();
            renderTask();
        })

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click",()=>{
            tasks.splice(index,1);
            saveTask();
            renderTask();
        })

        li.appendChild(span);
        li.appendChild(deleteBtn);
        List.appendChild(li)
    })

}


addBtn.addEventListener("click",()=>{
    const text = input.value.trim();
    if(text){
        tasks.push({
            text,
            completed:false
        })
        input.value = '';
        saveTask();
        renderTask();
    }
})


renderTask();
