// 4. Mixed Logical Operators (&&, ||, !)
let isMember = true;
let isBanned = false;
let canEnter = isMember && !isBanned;
console.log(canEnter);

let isStudent = true;
let isSenior = false;
let isBanned2 = true;
let discount = (isStudent || isSenior) && !isBanned2;
console.log(discount);

let nameGiven = true;
let emailGiven = false;
let phoneGiven = true;
let formValid = nameGiven && (emailGiven || phoneGiven);
console.log(formValid);

let isAdmin = true;
let hasToken = false;
let isSuspended = false;
let access = (isAdmin || hasToken) && !isSuspended;
console.log(access);

let score = 1200;
let timeBonus = false;
let extraLife = true;
let levelOpen = (score > 1000) && (timeBonus || extraLife);
console.log(levelOpen);

// Additional Mixed
let a = 0;
let b = 10;
let c = 20;
let result = a || b && c;
console.log(result);

let p = true;
let q = false;
let r = true;
result = p && q || r;
console.log(result);

let x = 10;
let y = 20;
result = !(x && y) || (x > 5 && y < 30) && true;
console.log(result);

a = 5;
b = 0;
c = 10;
result = a && b || c;
console.log(result);

let val1 = false;
let val2 = true;
let val3 = false;
result = !(val1 || val2) && val3 || true;
console.log(result);