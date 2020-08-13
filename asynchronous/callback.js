const todos = [
    { title: "Todo 1", description: "work 1" },
    { title: "Todo 2", description: "work 2" },
    { title: "Todo 3", description: "work 3" }
];

let todoListEl = document.getElementById("todoList");

function todoList() {
    setTimeout(() => {
        let todoItems = "";
        todos.forEach(item => {
            todoItems +=
                `<li>
                    <b>${item.title}</b>
                    <b>${item.description}</b>
                </li>`
        });
        todoListEl.innerHTML = todoItems
    }, 1000);
}

function createTodo(todo, callback) {
    setTimeout(() => {
        todos.push(todo);
        callback();
    }, 1100);
}

createTodo(
    {
        title: "Todo 4",
        description: "work 4"
    },
    todoList);

todoList();