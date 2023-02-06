class Node{
    // Create constructor to initialize the variable
    constructor(data,left,right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

//Initialize the data to the variable
let root = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D'); // D is the left node of B
let e = new Node('E'); // E is the Right node of B
let f = new Node('F');
let g = new Node('G')


//Join the nodes 
root.left = b;
root.right = c;
b.left = d  // d is the left child of b
b.right = e // e is the right child of b
e.left = f
e.right = g


// Print the nodes or binary tree
console.log(`root A : ${root.data}`);
console.log(`A left : ${root.left.data}`);
console.log(`A right :  ${root.right.data}`);
console.log(`B left :  ${b.left.data}`);
console.log(`B right : ${b.right.data}`);
console.log(`E left : ${e.left.data}`);
console.log(`E right : ${e.right.data}`);

