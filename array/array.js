// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    //get the value in index
    get(index) {
        return this.data[index];
    }
    //put item in the "array"
    push(item) {
        this.data[this.length++] = item;    //save the data in the length position, after that, increment the length in 1
        return this.data;
    }
    //remove the last item of the array
    pop(){
        const lastItem = this.data[String(this.length-1)];
        delete this.data[String(this.length-1)];    //delete the last item
        this.length--;
        return lastItem;
    }
    //shift the index
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
          this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    };
    //remove the value in the index
    delete(index){
        //This is other way to do it but without the shiftIndex method:
        // //Guardamos el item a eliminar
        // const itemToDelete = this.data[index];
        // //Eliminamos el item
        // delete this.data[index];
        // //Recorremos el objeto
        // for (const key in this.data) {
        //     if (Object.hasOwnProperty.call(this.data, key)) {
        //         //Si el item actual estaba adelante del eliminado...
        //         if(key > index){
        //             //Guardamos el value
        //             const element = this.data[key];
        //             //Eliminamos esa propiedad
        //             delete this.data[key];
        //             //Creamos la propiedad pero con el nuevo nombre (key-1)
        //             this.data[Number(key)-1] = element;
        //         }
        //     }
        // }
        // this.length--;
        const item = this.data[index];
        this.shiftIndex(index);
    
        return item;
    };
    //put the item at the beginning of the "array"
    unshift (item) {
        this.length++;
        for (let i = this.length-1; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        return this.length;
    };
    //remove the first item
    shift(){
        if (this.length !== 0) {
            const firstItem = this.data[0];
            this.shiftIndex(0);
            return firstItem;
        } else {
            return undefined;
        }
    };
}

const myArray = new MyArray();


// Tests
console.log(myArray);
myArray.push("Hola");
myArray.push("Qué hace");
myArray.push("Chauuuuuu");
myArray.push("Test");
console.log(myArray);
//myArray.pop();
//myArray.delete(1);
//console.log(myArray.shift());
//myArray.unshift("Llegué último y soy el primero jua jua juaa")
console.log(myArray);