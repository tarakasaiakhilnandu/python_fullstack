// console.log("hello world")
// write a function to square the number
function squareNumber(num){
    return num * num;
}
x=squareNumber(5);
console.log("Square of 5 is:",x)
// write a function to odd or even number
function checkOddEven(num){
    if (num%2==0) {
        return "Even";
     } else{
        return "Odd";
     }
}
console.log("check if 7 is Odd or Even:", checkOddEven(7));