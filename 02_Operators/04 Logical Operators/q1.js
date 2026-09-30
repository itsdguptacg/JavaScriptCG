// 1. Logical AND &&
let storedUsername = "admin";
let storedPassword = 1234;
let enteredUsername = "admin";
let enteredPassword = 1234;
let isValid = (enteredUsername === storedUsername) && (enteredPassword === storedPassword);
console.log(isValid);

let isLoggedIn = true;
let hasPermission = true;
let canAccess = isLoggedIn && hasPermission;
console.log(canAccess);

let inStock = true;
let price = 800;
let canBuy = inStock && (price < 1000);
console.log(canBuy);

let marks = 75;
let attendance = 80;
let passed = (marks > 65) && (attendance > 70);
console.log(passed);

let isWeekend = true;
let isHoliday = false;
let party = isWeekend && isHoliday;
console.log(party);

// Additional AND
let a = 0;
let b = 10;
let result = a && b;
console.log(result);

let x = 5;
let y = 10;
result = (x > 3 && y) || 0;
console.log(result);

let p = "Hello";
let q = "";
let r = "World";
result = p && q && r;
console.log(result);

let val = 5;
let condition = val && (val = 0);
console.log(condition);
console.log(val);

x = 10;
y = 20;
result = (x && y) && (x > y);
console.log(result);