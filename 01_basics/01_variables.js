const accountId = "1558654"
let accountEmail = "sayan@yahoo.com"
var accountPassword = "5545560"
accountCity = "Kolkata"

//accountId = 2 //not allowed

accountEmail = "accountsc@sc.com"
accountPassword = "123456789"
accountCity = "Bengaluru"


console.log(accountId);
/*Prefer not to use var because issue in block scope is functional scope*/
console.table({accountId, 
    accountPassword, 
    accountCity })