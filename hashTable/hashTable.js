//-------------------------------[Implementation]----------------------------------
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    };
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    };
    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
        this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    };
    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    };
    getAll(){
        return this.data;
    };
    getAllKeys(){
        const keys = [];
        this.data.forEach(bucket => {
            bucket.forEach((item, index) => {
                return keys.push(bucket[index][0]);
            })
        })
        return keys;
    };
    delete(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key){
                    const deletedItem = currentBucket[i];
                    currentBucket.splice(i, 1);

                    if (currentBucket.length === 0) {
                        this.data.splice(address, 1);
                    }

                    return deletedItem;
                }
            }
        }
        return undefined;
    };

}

const myHashTable = new HashTable(50);



//--------------------------[Tests]--------------------------------
console.log(myHashTable.set("Andrés", 1980));
console.log(myHashTable.set("Julian", 2007));
console.log(myHashTable.set("Caro", 1994));
console.log(myHashTable.set("Pepo", 1999));

console.log(myHashTable.get("Caro"));

//console.log("Deleted test", myHashTable.delete("Caro"));
console.log(myHashTable.getAll());
console.log(myHashTable.getAllKeys());