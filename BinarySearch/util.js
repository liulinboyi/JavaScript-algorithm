class ArrayGenerator {
    constructor() {}

    static generateOrderArray(n) {
        let arr = new Array(n);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = i;
        }
        return arr;
    }

    static generateRandomArray(n, bound) {
        let random = Math.random();
        let arr = new Array(n);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Math.floor(random * bound);
        }
        return arr;
    }
}

exports.ArrayGenerator = ArrayGenerator