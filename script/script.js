
let num = 266219;
let str = num.toString().split('');
let com = 1;
for (let i = 0; i < str.length; i++) {
  com *= +str[i];
}
console.log(com);
console.log((com ** 3).toString().substr(0, 2));

