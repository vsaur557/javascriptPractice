/* Square root
let  a = prompt('Enter a number');
    let b = Math.sqrt(a);
    console.log(b);

 //--- Area of triangle----
  var a=25;
  var b=25;
  var area = (a*b)/2
  console.log(' Area of  Triangle:'+area); 
  
//---- Area of Regular triangle---
  var a = 5;
  var b = 5;
  var c = 3;
  var s = (a*b*c)/2;
  var temp=s*(s-a)*(s-b)*(s-c);
  var sqrt = Math.sqrt(area);
  console.log(sqrt);

// two number swapping--
 
var a = prompt('Enter the frist number');
 var b = prompt('Enter the second number');
  console.log(`The value of first number:${a}, the value of  Second number:&{b}`);
  var temp;
  var temp =a;
  a=b;
  b=temp;
  console.log(`After Swapping \n The value of a is :${a}, \n The value of b is: &{b}`);*/

  /*
  var a = parseInt(prompt('Enter the frist number'));
 var b =parseInt(prompt('Enter the second number'));
  console.log(`The value of first number:${a}, the value of  Second number:&{b}`);
  a= a+b;
  b= a-b;
  a=a-b;
  console.log(`After Swapping \n The value of a is :${a}  \n The value of b is: ${b}`);*/

  /* --- Chack positive number or Nagative Number----
function check(){
  var value = document.getElementById('data').value;
  if(value >0){  
  res=`${value} is Positive number`;
  }
  else if (value < 0){
    res=`${value}  is Nagative number`;  
  }
  else if (value == 0){ 
  res =`${value} is zoro Number`;
  }
  else {
    res= `${value}  Value is Not Number;
  }

  document.getElementById('res').innerText = res; 
} */

/*--Random Number---
var  x = Math.random();
console.log("Before Calculation" +x);
x = x*(1000-1) * 1;
console.log("After Calculation" +x);
console.log( "Floor calalusation " + Math.floor(x));*/

/*---Even or add numebr---
let  n = prompt("Enter the Number is : ");
if(n%2==0){
  console.log(`${n} is an even Number`);
}
else{
  console.log(`${n} is an odd Number`);
}

---- Ternary optater --
var x =25;
var res = x%2 == 0 ? "even" : "odd";
console.log(`${x} is an ${res} number`);*/


/*--- Check Prime Number----
var number = prompt("Please enter number ");
if(number ==1){
  console.log(`${number}  is neither prime nor composite number`);
}
else if(number < 1){
  console.log(`${number} is not a prime  number`);
}
else{
  for(  var i=2; i<number; i++){

    if(number%i == 0){
      var res = `${number} is not a prime number`;
      break;
    }else{
      var res =`${number} is a prime number`;
    }
  }
  console.log(res);
} */

/* find largest number among three numbers--
function check(p,q,r){
  if(p>q  && p>=r){
    return p;
  }else if(q>=p && q>=r){
 return q;
  }else{
    return r;
      }    
  }

var  a =prompt("Please enter the frist number");
var b =prompt("Please enter the second number");
var c =prompt("Please enter the third number");
var x = Math.max(a,b,c);
console.log(`${a},${b},${c}: Largest = ${x}`);*/


/*----Find the factorial of a number---
 var a = prompt("Enter the value of factorial number");
 var fact= 1;
 if(a ==0){
  console.log(` The dactorial of ${a} is 1`);
 }else if (a < 0){
console.log(`The factorial of -ive number is not possible`);
 }else{
  for(var i=1; i<a; i++){
    fact = fact * i;
  }
    console.log(`The dactirial of ${a} is ${fact}`);
  
 }*/

 /*---Find the factorial of a number using Recursion----
var number = prompt("enter the number");
function fact(n){
if(n>number){
  return;
}
fact = fact *  n;
n++;
fact(n);
}
fact(1);*/

/*-----Table---
var number = 6;
  for(var i=1; i<=10;i++){
    var res= i*number;
    console.log(`${number}* ${i} = ${res}`);
  }*/

  /*---Switch---calculater--
  var num1 = prompt("Please Enter a 1st number");
  var num2 = prompt("Please Enter 2nd number");
  var opr = prompt("Please Enter Opr sng ");

  switch(opr){
    case ("+"):
    var res = parseFloat(num1) + parseFloat(num2);
    console.log(`${num1} + ${num2} = ${res}`)
    break;
    case ("-"):
      var res = parseFloat(num1) - parseFloat(num2);
      console.log(`${num1} - ${num2} = ${res}`)
      break;
      case ("*"):
        var res = parseFloat(num1) * parseFloat(num2);
        console.log(`${num1} * ${num2} = ${res}`)
        break; case ("/"):
        var res = parseFloat(num1) / parseFloat(num2);
        console.log(`${num1} / ${num2} = ${res}`)
        break;
    default:
      console.log("Invalid Operator");
  }*/

/*--If the number have Same Last Digit----

var a =prompt("Please Enter  fist number");
var b = prompt("Please Enter second number");
var c = prompt("please Enter third Number");

var resa = a%10;
var resb = b%10;
var resc= c%10;
if( resa===resb && resa===resc){
  console.log(`${a} ${b} ${c} have a same last digit`);
}else{
  console.log(`${a} ${b} ${c} have a not same last digit`);
}*/

/*---Fibonacci Series---

var a=0, b=1;
console.log(a);
console.log(b);
for(var i =0; i<=15;i++ ){
var temp=a +b;
console.log(temp);
a=b;
b=temp;
}
*/

/*---Armstrong Number---
var number=prompt("Please Enter the number");
var temp= number;
var noOfDigits = number.toString().length;
alert(noOfDigits); 
var sum =0;
while(temp>0){
  var digit =temp%10;
  sum += digit**noOfDigits;
  temp = parseInt(temp/10);
}
if (sum == number){
  console.log (`${number} this is  a armstrong number`);
}
else{
  console.log("This number is not a armstrong number");
}*/

/*--factorial---
var  number =prompt("Pelase enter the number");
for(var i=0; i<= number; i++){
  if(number%i==0){
    console.log(i);
  }
}--*/

/*---Sum of naturals Number using Recusion---
function sum (num){
  if(num>0){
    return num + sum(num-1)

  }else{
    return num;

  }
}

 var res=sum(1000);
 console.log(res);*/

 /*--Check palindrome using for loop---

 var string= prompt("please Enter the number");
 var len= string.length;
 var msg ='It is a palindrom number'
 for(var i =0; i<len/2; i++){
  if(string[i] != string[len-1-i]){
    msg='It is not a palindrome number';
  }
 }
 console.log(`${string}: ${msg}`);
*/

/*Programe to sort words in Alphabetical order in javascript---
var string=prompt("Please Enter a string");
var stringArray= string.split('');
var stringSort= stringArray.sort();
console.log(stringSort);
console.log(stringArray);*/

var string = "Mr. Red has a red car and a red bike";
console.log(string);
var reg = new RegExp('Red','blue')
var newString= string.replace(reg,'Blue');
console.log(newString);



































































