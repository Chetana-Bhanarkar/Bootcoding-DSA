
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

### Algorithm

- Define a new node i.e let newNode = new Node(50). 
- New node is initialised as new head and previous head is next node as ```newNode.next = head and head = newNode```.
- Print method is called to print new linked list.


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


## How to insert node at the last position :

### Algorithm 
- Create a new node. i.e ```let lastNode = new Node(500)```. 
- Initialise head in any temporary variable. i.e. ```let temp = head``` and traverse the linked list using while loop till last node.
- As the last node is identified assign newly created node to last node of linked list. i.e ```temp.next = lastNode```
- printlist() method is called to print newly modified list.

![NewNodeinLastPosition](https://user-images.githubusercontent.com/114468530/206837791-2daeec02-48f0-4b11-9a77-b4a15c6cdeb1.png)


```
const lastInsert = (head) => {
            let temp = head;
            let lastNode = new Node(500);
            while(temp.next != null){
                temp = temp.next
            }
            temp.next = lastNode;
            printlist(head);
        }
```

#### Output :-


![output(insert last node)](https://user-images.githubusercontent.com/114468530/206838088-8c7672ab-4429-463b-af14-299e09d56362.png)


## How to delete node at the first position : 

### Algorithm 
- Assigning head to second node. i.e ```Head = head.next``` (Head will become Second Node).

![206683651-5e44cbd3-4690-48cb-8068-41ac5dcfa9ca](https://user-images.githubusercontent.com/114468530/206838162-d66ab7a3-87a6-4df9-88f6-183b5c60bfc7.png)


```
const firstDelete = (head) => {
                let temp = head;
                head = head.next;
                printlist(head);
            }
            
   firstDelete(head)
```

## How to delete node at the last position : 


![206678792-62e1edea-f4e6-48b8-979a-0b2a093b5a39](https://user-images.githubusercontent.com/114468530/206838307-18374f71-1530-4dc3-911f-fb7ae66fda61.png)

### Algorithm 
- Initialise head(first node) in temp variable. i.e. ```temp = head```. 
- Traversing a linked list till the last node of list.
- If condition checks the next two nodes starting from head to be null i.e. ```temp.next.next == null```.
- If condition satisfies it would stores next element to be null i.e ```temp.next = null``` which eventually eliminates the next node

```
function deletion(head) {
            let temp = head;
            while(temp != null){
                if(temp.next != null && temp.next.next == null){
                    temp.next = null
                }
                console.log(temp.data);
                temp = temp.next;
            }
        }

        deletion(head);
```

