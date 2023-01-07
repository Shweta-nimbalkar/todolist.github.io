var todoArray = [];

function saveTodo(){
    let data = document.getElementById("title").value;
    todoArray.push(data);
    localStorage.setItem("Todos", todoArray.toString());
    fetchTodos();
    document.getElementById("title").value = " ";
}
function fetchTodos() {
    let str = localStorage.getItem("Todos");
    todoArray = str.split(",");
    let htmlstring = `
    <tr>
        <th> Sr.No </th>
        <th> Title </th>
        <th> Actions </th>
    </tr>
    `;
    let counter = 0 ;
    todoArray.forEach((ele)=> {
        counter++;
        htmlstring += `
        <tr>
            <td> ${counter} </td>
            <td> ${ele} </td>
            <td>
            <button class=" btn btn-outline-warning" onclick= "editTodo(${counter-1})"> Edit</button>
            
            <button class=" btn btn-outline-danger" onclick= "deleteTodo(${counter-1})"> Delete</button>
            </td>
         </tr>   
        `

    })
    
    document.getElementById("table1").innerHTML = htmlstring;
}

function editTodo(index) {
     let newValue = prompt("Do you want to change title " , todoArray[index]);
     if( newValue != "" && newValue != null){
        todoArray[index] = newValue;
        localStorage.setItem("Todos", todoArray.toString());
        fetchTodos();
     }
}
function deleteTodo(index) {

    let c = confirm("Do you want to delete");
    if(c){
       todoArray.splice(index, 1);
       localStorage.setItem("Todos", todoArray.toString());
       fetchTodos();
    }
}
