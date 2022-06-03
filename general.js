/* https://www.youtube.com/watch?v=LhEY3heuDzs */
let item = document.querySelector("#todo-item");
let list = document.querySelector("#todo-list");
const state={
  todoList:[]
};

const setState= obj =>{
   for (const key in obj) {
     if (obj.hasOwnProperty(key)) {
      state[key]=obj[key];
    }
  }
  render();
}
const template= () =>{
  if(state.todoList.length < 1){
    return `<p>Sin tareas por hacer...</p>`
  }
  let todos= state.todoList.map(item => `<li>${item}</li>`).join("");
  return todos;
}
const render= () =>{
  list.innerHTML=template();
}
const getState= () => JSON.parse(JSON.stringify(state));

document.addEventListener("submit",e => {
  if(!e.target.matches("#todo-form")) return false
  e.preventDefault();
  let item=document.querySelector("#todo-item");
  const lastState= getState();
  lastState.todoList.push(item.value);
  setState({todoList:lastState.todoList});
});

document.addEventListener("DOMContentLoaded", render);


