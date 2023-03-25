//--------------------------------[Example View]--------------------------------
//      10
//   4     20
// 2  8  17  170


//-------------------------------[Implementation]-------------------------------

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    };
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    };
    search(value){
        if(this.root === null){
            return undefined;
        }else{
            let currentNode = this.root;
            while(true){
                if(value === currentNode.value){
                    return currentNode;
                }else{
                    if(value < currentNode.value){
                        if(!currentNode.left){
                            return undefined;
                        }
                        currentNode = currentNode.left;
                    } else {
                        if(!currentNode.right){
                            return undefined;
                        }
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    };
    // // This is a diferent implementation to the search method (with recursion):
    // search(value, tree = this.root) {

    //     if (tree == null) {
    //         return"El elemento no se encuentra.";
    //     }
    //     elseif(value > tree.value) {
    //         returnthis.search(value, tree.right);
    //     }
    //     elseif(value < tree.value) {
    //         returnthis.search(value, tree.left);
    //     }
    //     else {
    //         return"¡El elemento ha sido encontrado!";
    //     }

    // }
}






// ----------------------------------[Test]--------------------------------------
const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(170);