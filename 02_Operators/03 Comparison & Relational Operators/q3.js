// Strict Equality

// Q1
let strictStoredPass = 1234;
let strictEnteredPass = "1234";
console.log(strictStoredPass === strictEnteredPass); 

// Q2
let accountNum1 = 1234567890;
let accountNum2 = 1234567890;
console.log(accountNum1 === accountNum2);

// Q3
let featureFlagStatus = true;
let requiredFeatureState = 1;
console.log(featureFlagStatus === requiredFeatureState); 

// Q4
let dbCacheValue = null;
let localCacheValue = undefined;
console.log(dbCacheValue === localCacheValue); 

// Q5
let finalScore1 = 85;
let finalScore2 = 85;
console.log(finalScore1 === finalScore2);