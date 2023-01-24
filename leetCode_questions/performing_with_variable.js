// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.



const performing_with_variable = (a) => {
        let sum = 0 ; 
        for(let i=0 ; i<=a.length ; i++){
            if(a[i] == "--X" || a[i] == "X--"){
                sum += -1;
            }
            else if(a[i] == "X++" || a[i] == "++X"){
                sum += 1 ; 
            }
        }

        return sum;
}


console.log(performing_with_variable(["++X","++X","X++"]));