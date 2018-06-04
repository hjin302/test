window.onload = init;
var task_arr = []; // 전역변수
function init(){
    document.getElementById("myform").onsubmit = addTask;
}

function addTask(){
    var message = ''; //지역변수
    var task = document.getElementById("task").value; // 지역
    var output = document.getElementById("output"); // 지역

    if(task){
        task_arr[task_arr.length] = task; // task_arr.push(task);
        message = "해야 할 일" + task_arr.length + "개가 있습니다.";
        output.innerHTML = message;
        return false;    
    }
    
}