//----------------------------[Explication]----------------------------------
//  1 <--> 2 <--> 3 <--> 4 <--> 5 <--> null;



//---------------------------[Implementation]---------------------------------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
        value: value,
        next: null,
        prev: null,
        };
        this.tail = this.head;

        this.length = 1;
    };
    uppend(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this;
    };
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    };
    insert(index, value) {
        
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        //other direction:
        newNode.prev = firstPointer;
        holdingPointer.prev = newNode;

        this.length++;

        return this;
    };
    getTheIndex(index) {
        if(index < (this.length/2)){
            let counter = 0;
            let currentNode = this.head;
            while (counter !== index) {
                currentNode = currentNode.next;
                counter++;
            }
            return currentNode;
        }else{
            let counter = this.length - 1;
            let currentNode = this.tail;
            while (counter !== index) {
                currentNode = currentNode.prev;
                counter--;
            }
            return currentNode;
        }
    };
    remove(index){
        if (index >= this.length) {
            return undefined;
        }

        const firstPointer = this.getTheIndex(index - 1);
        firstPointer.next = firstPointer.next.next;
        firstPointer.next.prev = firstPointer;

        this.length--;

        return this;
    };
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);