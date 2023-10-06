//inorder binary tree :-  L - ROOT - R 


class Node{
    constructor(data,left,right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
let root = new Node('A');
let b = new Node('B');
let c = new Node('C');
let p = new Node('P');
let q = new Node("Q");
let r = new Node("R");
let s = new Node("S");


root.left = b;
root.left.left = p;
root.left.right = q;
root.right = c;
root.right.left = r;
root.right.right = s;


function InOrder(root){
    if(root==null)
    {
        return
    }
    InOrder(root.left);
    console.log(`${root.data} -> `);
    InOrder(root.right);
}

InOrder(root);

// output :- P -> B -> Q -> A -> R -> C -> S
