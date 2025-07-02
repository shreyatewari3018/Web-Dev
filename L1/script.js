// console.log("Hello World");

// var a=123;

// console.log(a);

// function abc(){
//     console.log("This is function abc");

//     function hgf(){
//         console.log("This is hgf");
//     }
//     hgf();
// }

// abc();


// var a =200;
// console.log(a);

// // xyz();

// // var xyz=()=>{
// //     console.log("xyz function called");
// // }

// var b=300;

// console.log(b);

// {
//     //Compound Statement
//     //GrandParent
//     var a = 100;
//     var b = 200;
//     var c = 300;

//     console.log(d);

//     console.log(a);
//     console.log(b);
//     console.log(c);
//     {
//         //Parent
//         console.log(a);
//         console.log(b);
//         console.log(c);

//         {
//             //Child

//             var d=2000;

//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//     }
// }

// function abc(){
//     var a = 100;
//     var b = 200;
//     var c = 300;
//                 console.log(d);

//     function def(){
        
//         var d=400;

//         function ijk(){
//             console.log(a);
//             console.log(b);
//             console.log(c);

//         }
//         ijk();
//     }
//     def();
// }
// abc();


//Closures

// for(var i=0;i<=5;i++){
//     function closures(i){
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }
// closures(i);
// }

//HOF

function xyz(cb){
    console.log("I am xyz function");
    cb();
}

function cb(){
    console.log("I am cb function");
}
xyz(cb);


