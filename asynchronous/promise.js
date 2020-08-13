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

function createTodo(todo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const e = true;

            if (e) {
                resolve();
            } else {
                reject("Error in promise");
            }

            todos.push(todo);
        }, 2000);
    })
}

createTodo(
    {
        title: "Todo 4",
        description: "work 4"
    })
    .then(response => {
        todoList();
    })
    .catch(e => {
        console.log("New List", response);
    });

// Promise ALL
const p1 = Promise.resolve("P1");
const p2 = new Promise((resolve, reject) => setTimeout(resolve("Promise 2"), 2000, "Test"));
const p3 = 24061999;
const p4 = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

Promise.all([p1, p2, p3, p4]).then(promises => {
    console.log("promises", promises);
});