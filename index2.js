// Задание №1
// let obj = {};
// let n = +prompt("Число введи!");
// for (let i = 0; i < n; i++) {
//     let a = prompt("Ключ!");
//     let b = prompt("Значение!");
//     obj[a] = b; 
    
// }

// let key = prompt("Ключ!");
// if (key in obj) {
//     console.log(obj[key]);  
// }
// else {
//     console.log("Контакт не найден");
// }

// Задание №2
let colors = ["red","orange","yellow","green","blue","purple"];

let obj = {
    size:{
        width:20,
        height:10
    }
};

for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    obj["color"] = element;
    obj.size.width *= 2;
    obj.size.height *= 2;
    console.log(element,obj.size.width,obj.size.height);   
}




