const user={
    name: 'ajay',
    age:24,
    fun(){
        console.log(`Name is ${this}`);
    }
}
console.log(user.fun());
for(key in user){
    console.log(key,user[key]);
}

