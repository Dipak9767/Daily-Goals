const form = document.getElementById("form");
const title = document.getElementById("title");
const decription = document.getElementById("description");
const container = document.getElementById("list");

const list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list') ) : [] ;

showList();

function showList(){
    container.innerHTML = "";
    list.forEach((value , idx) => {
    const item = document.createElement('div');
    const div = document.createElement('div');
    const h = document.createElement('h3');
    const p = document.createElement('p');
    const btn = document.createElement('button');
    btn.innerText = "remove";
    btn.setAttribute('id','remove')

    btn.addEventListener("click" , ()=>{
        list.splice(idx,1);
        localStorage.setItem("list" , JSON.stringify(list));
        showList();
    });

    item.classList.add('item');
    h.innerText = value.title;
    p.innerText = value.decription;
    
    container.appendChild(item);
    div.appendChild(h);
    div.appendChild(p);
    item.appendChild(div);
    item.appendChild(btn)


   })
}


form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    
    list.push({
        title : title.value,
        decription : decription.value
    })
    localStorage.setItem("list" , JSON.stringify(list));
    showList();

    // localStorage.setItem("list" , list);
})
