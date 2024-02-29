//var cart=5;//op : 5 is within the scope in order to display as 6 convert it to reference data type

// function Update(cart){
//     cart++;
// }

// Update(cart);

// console.log(cart);

let obj={
    value: 5
};

function Update(obj){
    obj.value++;
}

Update(obj);
console.log(obj);