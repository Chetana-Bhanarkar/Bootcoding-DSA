# Bootcoding-DSA-linkedList

###### Bootcoding-DSA-linkedList


#  What is linked list ? 
#### A linked list is a data structure consisting of a group of nodes which together represent a sequence. Each node contains data and a reference to the next node in the sequence, or null if it is the last node. Linked lists are used to store data like strings, integers, or other objects, and allow for efficient insertion and removal of elements.


Example of linked list - 


 ![LINKED LIST](https://user-images.githubusercontent.com/114468530/206668549-6e63da14-8585-4c0a-a801-6d0d4d97ce73.png)

 1) Node is consist of data and the reference(link) of next node.
 2) The first node is called the head(starting node).
 3) The last node of a linked list has the reference(link) as NULL.


## How to create new linked list :

```

class Node{
            constructor(data){
                this.data = data;
                this.next = null;
            };
        }
            let head = new Node(10);
            let second = new Node(20);
            let third = new Node(30);
            let fourth = new Node(40);

            head.next = second;
            second.next = third;
            third.next = fourth;

            
            function printlist(head) {
               let temp = head;
               while(temp != null){
                console.log(temp.data);
                temp = temp.next
               }
            }

            printlist(head)
            
```

#### Output :-


![printLinkedlist](https://user-images.githubusercontent.com/114468530/206678480-84e308ff-5452-4a15-8af7-f92680cefb8f.png)



## How to insert node at the first position : 


![INSERTION NODE ](https://user-images.githubusercontent.com/114468530/206685794-a17c47de-2615-49e5-bd15-329d9b8d898b.png)



```
const firstinsert = (head) => {
            let NewNode = new Node(60)
            NewNode.next = head;
            head = NewNode;
        };
```

#### output : 
![output(insertionfirstNode)](https://user-images.githubusercontent.com/114468530/206688473-22d15313-f715-4c7c-a812-195dd4b3b04b.png)

