// Replace method
let message = "25 times 25 is 625";
let binaryMessage = message.replace(/\d+/gu, (n) => parseInt(n).toString(2));

console.log(binaryMessage);
// 11001 times 11001 is 1001110001

