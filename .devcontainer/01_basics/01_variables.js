const accountId = 14453
let accoountEmail = "hitest@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "hc@hc.com"

accountPassword = "21212121"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use vase
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail,accountPassword, accountCity, accountState])


