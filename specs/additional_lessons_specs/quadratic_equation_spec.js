let a = prompt('a =', '');
let b = prompt('b =', '');
let c = prompt('c =', '');
let d = Math.pow(b, 2) - 4 * a * c;
let x1 = (-b + Math.sqrt(d)) / (2 * a);
let x2 = (-b - Math.sqrt(d)) / (2 * a);
let x = -b / (2 * a);

let answer = (d > 0) ? 'x1 = ' + x1 + '; x2 = ' + x2 :
  (d == 0) ? 'x = ' + x :
  'Discriminant: D = ' + d +'; D < 0';
alert(answer);

// let a = prompt('a =', '');
// let b = prompt('b =', '');
// let c = prompt('c =', '');
// let d = Math.pow(b, 2) - 4 * a * c;

// if(d > 0) {
//     let x1 = (-b + Math.sqrt(d)) / (2 * a);
//     let x2 = (-b - Math.sqrt(d)) / (2 * a);
//     alert('x1 = ' + x1 + '; x2 = ' + x2);
// } else if (d == 0) {
//     let x = -b / (2 * a);
//     alert('x = ' + x);
// } else {
//     alert('Discriminant: D = ' + d +'; D < 0');
// };




