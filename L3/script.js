let cart=["shoes","shirt","wallets"]

function orderDetail(cart){
    //1. Total no of products
    //2. Total Amount of Products nos*1000
    let totalProducts = cart.length;
    let totalAmount = totalProducts * 1000;
    return { totalProducts, totalAmount };
}

function orderSummary(){
    // total price and total product
    // then generate orderId
    const { totalProducts, totalAmount } = orderDetail(cart);
    const orderId = "ORD" + Math.floor(Math.random() * 10000);
    return { orderId, totalProducts, totalAmount };
}

function paymentGateway(){
    // order Id, product details and price.. Payment is successful
    const { orderId, totalProducts, totalAmount } = orderSummary();
    console.log(`Payment successful for Order ID: ${orderId}`);
    console.log(`Products: ${cart.join(", ")}`);
    console.log(`Total Amount Paid: ₹${totalAmount}`);
    return { orderId, totalProducts, totalAmount, products: cart };
}

function successfulOrder(){
    // it will give all the details about the payment product name and everything
    const orderInfo = paymentGateway();
    console.log("🎉 Order placed successfully!");
    console.log("Order Details:");
    console.log(`Order ID: ${orderInfo.orderId}`);
    console.log(`Products: ${orderInfo.products.join(", ")}`);
    console.log(`Quantity: ${orderInfo.totalProducts}`);
    console.log(`Amount Paid: ₹${orderInfo.totalAmount}`);
}

Array.prototype.mapReplica = function(logic){
    let output = []
    for(var i=0; i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}

function doubleValue(x){
    return x*2;
}


const initialValue=0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,initialValue,
);

console.log(sumWithInitial);