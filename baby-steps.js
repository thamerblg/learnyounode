// "TODO: Write a program that accepts one or more numbers as command-line arguments
//  and prints the sum of those numbers to the console (stdout)."

let arr = process.argv;
var sum = 0;
for (let index = 2; index < arr.length; index++) {
  sum += Number(arr[index]);
}
console.log(sum);
