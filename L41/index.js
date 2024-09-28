let a = 10;
let b = 15;
console.log(a * b);

a += 10;
console.log(a);

console.log(a > b);

let age = 25;
let status1 = (age > 18) ? 'I can vote' : 'I cant vote';
console.log(status1);

let ans = (true || false || true);
console.log(ans);

let x = 4;
console.log(4 << 1);

if(x > 4) {
    console.log('yes');
}
else {
    console.log('no');
}

let num = 3;
switch(num) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    case 4: console.log('D');
    break;
    default: console.log('F');
}