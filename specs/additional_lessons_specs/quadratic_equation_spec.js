let a;
let b;
let c;

let d = Math.pow(b, 2) - 4 * a * c;

let x;
let x1;
let x2;

d > 0;
x1 = (-b + Math.sqrt(d)) / (2 * a);
x2 = (-b - Math.sqrt(d)) / (2 * a);

d = 0;
x = -b / (2 * a);

if(d > 0) {
    alert('x1 = ' + x1);
    alert('x2 = ' + x2);
} else {
    alert('x = ' + x);
} else {
    alert('fuck you!')
}

