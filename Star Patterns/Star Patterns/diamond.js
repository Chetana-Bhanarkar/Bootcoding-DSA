const diamond = (n) => {
let string = "";

for (let i = 1; i <= n; i++) {

  for (let j = n; j > i; j--) {
    string += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    } 
    string += "\n";
  }
return string;

}

console.log(diamond(5))
