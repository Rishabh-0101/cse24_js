var num = 10;
console.log(num);
console.log(typeof(num));
num = false;
console.log(typeof(num));
num = "Rishabh";
console.log(typeof(num));
num = undefined;
console.log(typeof(num));

const sym1 = Symbol(4);
console.log(sym1);
const sym2 = Symbol(4);
console.log(sym2);
if(sym1 == sym2){
    console.log("true");
}else{
    console.log("false");
}