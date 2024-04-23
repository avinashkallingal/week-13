class hashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total = total + key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value) {
        let index = this.hash(key);
        this.table[index] = value;
    }
    get(key) {
        let index = this.hash(key);
        console.log(this.table[index])
    }
    remove(key) {
        let index = this.hash(key);
        this.table[index] = undefined
    }
    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(this.table[i])
            }

        }
    }
}
const table1=new hashTable(10);
table1.set("avi","avinash")
table1.set("place","kanhangad")
table1.remove("place")

table1.get("avi")
table1.display();