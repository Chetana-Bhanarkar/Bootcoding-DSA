const diamond = (n) => {
let string = "";
// Upside pyramid
for (let i = 1; i <= n; i++) {

  for (let j = n; j > i; j--) {
    string += " ";
  }
  string += "\n";
 
return string;

}

console.log(diamond(5))
