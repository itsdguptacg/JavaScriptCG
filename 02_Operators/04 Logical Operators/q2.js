// 2. Logical OR ||
let passwordCorrect = true;
let otpValid = false;
let loginAllowed = passwordCorrect || otpValid;
console.log(loginAllowed);

let isMember = false;
let hasCoupon = true;
let discount = isMember || hasCoupon;
console.log(discount);

let age = 16;
let height = 155;
let entry = (age > 18) || (height > 150);
console.log(entry);

let emailGiven = true;
let phoneGiven = false;
let formValid = emailGiven || phoneGiven;
console.log(formValid);

let score = 900;
let timeBonus = true;
let levelOpen = (score > 1000) || timeBonus;
console.log(levelOpen);

// Additional OR
let a = 0;
let b = false;
let c = "";
let d = null;
let e = 42;
let result = a || b || c || d || e;
console.log(result);

let x = "Hello" || 0;
let y = 0 || "Hi";
console.log(x, y);

a = 10;
b = 20;
result = (a < 5) || (b > 15);
console.log(result);

let val = 5;
let condition = val || (val = 0);
console.log(condition);
console.log(val);

x = "" || 0 || false || null || undefined || "OK";
console.log(x);