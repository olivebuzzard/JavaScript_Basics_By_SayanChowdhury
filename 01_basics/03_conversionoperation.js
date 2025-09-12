let score = undefined

console.log (typeof score) //string
console.log (typeof (score))

let valueInNumber = Number(score);
console.log(typeof valueInNumber); 
console.log(valueInNumber)
 // if we do console.log(velueInNumber) i.e. without typeof this will give the output //NaN (not any number) 
 
 
 
 //if the number is 0 in the case of 33abc then we can have the output null

 //if we do undefined in the case of 33abc then the resule will be NaN

 //"33"=> 33
 //"33abc"=> NaN
 //true => 1; false => 0;

 let isLoggedIn = 1
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn)

 //1 => true;
 //0 => false
 //"hitesh" =>true

 let someNumber = 33
 let stringNumber = String(someNumber)
 console.log(stringNumber);
console.log(typeof stringNumber); 