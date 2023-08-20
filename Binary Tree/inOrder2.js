class Node{
    constructor(data,left,right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}


let root = new Node('10');
let b = new Node('29');
let c = new Node('87')
let d = new Node('63');
let e = new Node('4');
let f = new Node('25');
let g = new Node('85');
let h = new Node('73');
let i = new Node('58');
let j = new Node('68');
let k = new Node('100');


root.left = b
root.left.left = d 
root.left.left.left = h
root.left.left.right = i

root.right = c 
root.right.left = f;
root.right.right = g;
root.right.right.right = k ;

function InOrder(root) {
    if(root == null){
        return

    }

    InOrder(root.left);
    console.log(`${root.data} > `);
    InOrder(root.right);
}


InOrder(root);