// 3. Logical NOT !
let isBanned = false;
let canLogin = !isBanned;
console.log(canLogin);

let isCompleted = false;
let isPending = !isCompleted;
console.log(isPending);

let isOn = true;
let isOff = !isOn;
console.log(isOff);

let isActive = false;
let noPremium = !isActive;
console.log(noPremium);

let isReadOnly = false;
let canEdit = !isReadOnly;
console.log(canEdit);

// Additional NOT
let a = 0;
let b = 1;
console.log(!a, !b);

let x = "Hello";
let y = "";
console.log(!x, !y);

let val = 5;
let result = !val;
console.log(result);

a = 10;
b = 20;
result = !(a && b);
console.log(result);

x = 0;
y = 1;
result = !(x || y);
console.log(result);