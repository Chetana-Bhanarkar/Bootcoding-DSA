// class Node{
//     constructor(data){
//     this.data =  data ; 
//     this.next = null;
//     }
// }

// let head1 = new Node(10);
// let second = new Node(20);


// head1.next = second;


// let head2 = new Node(100);
// let second2 = new Node(200);

// head2.next =  second2

// const printlist = (head1) => {
//     let temp1 = head1 ; 
//     while(temp1 != null){
//         console.log(temp1.data);
//         temp1 = temp1.next;
//     }

// }

// const concat = (head1,head2) =>{
//     let temp1 = head1;
//     let temp2 = head2;
//     while(temp1.next != null){
//         // console.log(temp1.data);
//         temp1 = temp1.next
//     };
//     temp1.next = temp2;
//     // printlist(head1);
// }

// concat(head1,head2);



class Node{
    constructor(data){
        this.data = data ; 
        this.next = null;
    }
}

let head = new Node(10);
let second = new Node(20);
let third = new Node(30);

head.next = second ; 
second.next = third;

let head1 = new Node(100);
let fourth = new Node(200);
let fifth = new Node(300);

head1.next = fourth;
fourth.next = fifth;

const list = (head) => {
    let temp1 = head;
    while(temp1 != null){
        console.log(temp1.data);
        temp1 = temp1.next;
    }

}


const firstlist = (head1 , head2) =>{
    let temp1 = head1;
    let temp2 = head2;
    while(temp1.next != null){
        // console.log(temp1.data);
        temp1 = temp1.next;
    };
    temp1.next = temp2;
    list(head);
}

firstlist(head, head1);