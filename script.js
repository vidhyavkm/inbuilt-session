const num = 5;
let n = num.toExponential();
console.log(n);

let a = new Date();
let m = a.toLocaleString();
console.log(m)

let numb =0.1234;
let c= numb.toPrecision(1);
 let v =numb.toPrecision(10);
console.log(c);
console.log(v);

let text = "hello guvi";
let res = text.valueOf();
console.log(res);

let r = "hello world";
let result = r.charCodeAt(10);
console.log(result);

let foo = "hello i am in guvi, RAIN, main, spain";
let f = foo.match(/aine/gi);
console.log(f);

let alphabets = ["g","a","y","b"];
let arr = alphabets.sort();
console.log(arr);

let numbers = [20, 100, 1, 3, 10];
let p = numbers.sort();
p.sort(
    function (a,b){
        return a-b
    }
)
console.log(p);

const d = new Date();
const minutes = d.getMinutes();
console.log(minutes);

let z = Math.ceil(4.2);
let z1 = Math.round(4.6);
let z2 = Math.floor(4.6);
let ab = Math.abs(5+4)
let power = Math.pow(3,5)
let root = Math.sqrt(300)

console.log(z);
console.log(z1);
console.log(z2);
console.log(ab);
console.log(power);
console.log(root)





