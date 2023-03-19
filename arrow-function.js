// Es6 fat arrow function 

//normal function 
// function number() {
//     return 10;
// }
// console.log(number());


// arrow function 1
// const number = () => 10; 
// console.log(number());

// arrow function 2
// const sum = (a, b) => {
//     let sum = a + b;
//     return console.log(sum);
// }
// sum(10, 5);


// arrow function using this keyword 
// bairer this and foreach ar this duitai this alada refer kore .
const javaScript = {
    name: 'javaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function(){
        // self=this; eita use korte hobe normal function ar jonno . 
        this.libraries.forEach((a) =>{
            console.log(`${this.name} Loves ${a}`);
        })
    }
}

javaScript.printLibraries();

// global variable 
const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

// normal function that works perfectly
function show() {
    let self = this;
    display.innerHTML = this.value;
    setTimeout(function () {
        thanks.innerHTML = `you have type ${self.value}`;
    },3000);
}


// using arrow function
// const show = () => {
//     display.innerHTML = this.value;
//     setTimeout(() => {
//         thanks.innerHTML = `you have type ${this.value}`;
//     },2000);
// }

searchInput.addEventListener("keyup", show);