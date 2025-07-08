// Promises are the object in js that take care of async operation

//status: pending, fullfiled/rejected

// const promise1 = new Promise((resolve,reject)=>{
//     console.log("This is promise object");
//     resolve("Promise Resolved");
// })

// console.log(promise1);

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("this is promise object");
//         resolve("promise solved");
//     },3000)
// })


// promise1.then((res)=>console.log(res));
// promise1.catch((err)=>console.log("ERROR: ",err))

// promise1
// .then((res)=>console.log(res))
// .then(()=> setTimeout(()=>{
//     console.log("p2")
// },2000))
// .then(()=> setTimeout(()=>{
//     console.log("p3")
// },5000))
// .then(()=> setTimeout(()=>{
//     console.log("p4")
// },1000))
// .catch((err)=> console.log(err));


// function somethingSomething(message,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("promise resolved",message);
//         },delay)
//     })
// }

// promise1.then((res)=>console.log(res))
// .then(()=>{
//     return somethingSomething("P2",4000);
// }).then(()=>{
//     return somethingSomething("P3",3000);
// }).then(()=>{
//     return somethingSomething("P4",1000);
// })
// .catch((err)=> console.log(err));

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("this is promise object");
        resolve("promise solved");
    },3000)
})

promise1
.then((res)=>console.log(res))
.then(()=> setTimeout(()=>{
    console.log("p2")
},2000))
.catch((err)=> console.log(err))
.then(()=> setTimeout(()=>{
    console.log("p3")
},5000))
.then(()=> setTimeout(()=>{
    console.log("p4")
},1000))
// .catch((err)=> console.log(err));