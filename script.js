const inc = document.getElementById("add")
const btn = document.getElementById("btn")


btn.addEventListener("click", ()=>{
    
    let val = parseInt(inc.innerText)
val++;

inc.innerText = val;

    console.log(val);
    
    
    
})