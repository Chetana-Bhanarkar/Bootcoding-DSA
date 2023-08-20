class Node{
    constructor(data,left,right){
        this.data = data ; 
        this.left = left ; 
        this.right = right;
    }
}


let root  = new Node(25);
let b = new Node(50);
let c = new Node(75);
let d = new Node(100);
let e = new Node(125);
let f = new Node(150);
let g = new Node(175)


root.left = b;
root.left.left = d;
root.left.right = e
root.right = c;
root.right.left = f;
root.right.right = g


const preOrd = (root) => {
    if(root == null){
        return
    }
    console.log(root.data);
    preOrd(root.left);
    preOrd(root.right);
}


preOrd(root);

