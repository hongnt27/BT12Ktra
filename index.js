var readlineSync = require('readline-sync');
const fs = require('fs');
const { NONAME } = require('dns');
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

let array = [
    { name: "Tung", age: 27, },
    { name: "Khoa", age: 20, },
    { name: "Triet", age: 18,},
    { name: "Hong", age: 15, },
    { name: "Tring", age: 10,},
];
// fs.writeFileSync("data.txt", array)
var showMenu = function () {
    console.log("               Student Managerment                  ");
    console.log("====================================================");
    console.log(" 1.Show all student ");
    console.log(" 2.Create student and return Menu");
    console.log(" 3.Delete student");
    console.log(" 4.Edit student");
    console.log(" 5.Find student by name");
    console.log(" 6.Sort student by name ascending");
    console.log(" 7.Sort student by age ascending");
    console.log(" 8.Delete all student");
    console.log(" 9. Sum student age");
    console.log(" 10.Exit");
  };
let showAll = function(){
    console.log(array);
}
var createStu = function(){
    var name = readlineSync.question('name? ');
    var age = readlineSync.question('age? ');
    array.push({name:+name, age:+age})
    console.log(array);
}
var deleteStu = function(){
    var index = readlineSync.question('Ban muon xoa hoc sinh thu bn? ');
    array.splice(index,1);
}
var editStu = function(){
    var index = readlineSync.question('Ban muon sua hoc sinh thu bn? ');
    var name = readlineSync.question('name? ');
    var age = readlineSync.question('age? ');
    array[index].name = name
    array[index].age = age
}

var findStu = function(){
    var namehs = readlineSync.question('Ban muon tim hoc sinh nao? ');

    for (let index = 0; index < array.length; index++) {
        if(array[index].name === namehs){
            console.log(array[index]);
            break;
        }
    }
}
var sortStuByName = function(){
    console.log(array.sort((a, b) => (a.name > b.name) ? 1 : -1));
}
var sortStuByAge = function(){
    console.log(array.sort((a, b) => (a.age > b.age) ? 1 : -1));
}
var deleteAllStu = function(){
    console.log(array => (array = [])); 
}
var sumAgeStu = function(){
    let test = 0
    let sum = array.reduce((a, b) => {
    return a + b.age;
    },test);
    console.log(sum);
}
var Exit = function(){
    return;
}

showMenu()
var key = readlineSync.question('Chon 1 chuc nang? ');
switch (key) {
    case "1":
        showAll()
        break;
    case "2":
        createStu()
        showAll()
        break;
    case "3":
        deleteStu()
        break; 
    case "4":
        editStu()
        break;
    case "5":
        findStu()
        break; 
    case "6":
        sortStuByName()
        break;
    case "7":
        sortStuByAge()
        break;
    case "8":
        deleteAllStu()
        break; 
    case "9":
        sumAgeStu()
        break;
    default:
        Exit()
        break;
}
