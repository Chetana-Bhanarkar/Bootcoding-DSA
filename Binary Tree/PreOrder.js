//preOrder binary tree :-  Root - L - R


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


function preOrder(root){
    if(root==null){
        return
    }
    console.log(`${root.data} -> `);
    preOrder(root.left);
    preOrder(root.right);
}

preOrder(root);
