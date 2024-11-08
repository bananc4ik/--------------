let obj = {};
let n = +prompt("Число введи!");
for (let i = 0; i < n; i++) {
    let a = prompt("Ключ!");
    let b = prompt("Значение!");
    obj[a] = b; 
    
}
console.log(obj);
let key = prompt("Ключ!");
for (key in obj){
    console.log(obj[key]);
}



