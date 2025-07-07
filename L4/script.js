// const my1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("Assignment Complete by NAME");

//     })
// })


async function fetchProducts(){
    try{
    const products = await fetch("https://dummyjson.com/products");
    const data = await products.json()
    console.log(data);
    }
    catch(err){
        console.log("ERROR: ",err)
    }
}

fetchProducts()