//CALL

// function welcomeStudents(welcomeMessage,goodbyeMessage){
//     console.log(welcomeMessage +" "+this.studentName+" is a student of class "+this.studentClass+". "+goodbyeMessage);
// }

// const student1 = {
//     studentName:"Shreya",
//     studentClass:"G4"
// }

// const student2 = {
//     studentName:"Ishika",
//     studentClass:"G12A"
// }


// welcomeStudents.call(student1,"Good Morning,","Hi");
// welcomeStudents.call(student2,"Good Evening,","Bye");

//APPLY

// welcomeStudents.call(student1,["Good Morning,","Hi"]);
// welcomeStudents.call(student2,["Good Evening,","Bye"]);

//BIND

// function welcomeStudents(welcomeMessage,goodbyeMessage){
//     return ${welcomeMessage} ${this.studentName} is a student of class ${this.studentClass} ${goodbyeMessage};
// }

// const student1 = {
//     studentName:"Shreya",
//     studentClass:"G4"
// }

// const student2 = {
//     studentName:"Ishika",
//     studentClass:"G12A"
// }

// const s1 = welcomeStudents.bind(student1,"Good Morning","Hi");
// const s2 = welcomeStudents.bind(student2,"Good Evening","Bye");

// console.log(s1());
// console.log(s2());

//CURRYING IN JS
//that we are not passing every arguement at a same time.

function sumOfThree(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}

console.log(sumOfThree(10)(20)(30));

//EVENT BUBBLING AND EVENT CAPTURING

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click",()=>{
    console.log("GRANDPARENT CLICKED!");
})

parent.addEventListener("click",()=>{
    console.log("PARENT CLICKED!");
})

child.addEventListener("click",()=>{
    console.log("CHILD CLICKED!");
})
// This behaviour of bottom to top is called event bubbling