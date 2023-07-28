type sum = number;

const add = (a:sum , b:sum):sum=> {
    console.log(typeof a , typeof b);
    return a+b;
}

console.log(add(2,4));




function test(a: string | undefined): boolean | undefined {
    if (a === undefined)
      return undefined;
  
    return true;
  }

console.log(test("test"));
