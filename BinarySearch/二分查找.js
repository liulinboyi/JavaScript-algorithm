const {
    ArrayGenerator
} = require('./util')
const {
    LinerSearch
} = require('./线性查找')

class BinarySearch {
    constructor() {

    }

    /**
     * 二分搜索前提就是数组是有序的
     *
     * @param data
     * @param target
     * @param <E>
     * @return
     */
    static searchRWrapper(data, target) {
        return BinarySearch.searchR(data, 0, data.length - 1, target);
    }

    static searchR(data, l, r, target) {
        if (l > r) {
            return -1;
        }
        let mid = Math.floor(l + (r - l) / 2);

        if (target === data[mid]) {
            return mid;
        } else if (target > data[mid]) {
            // target > data[mid]
            return BinarySearch.searchR(data, mid + 1, r, target);
        } else { //  target < data[mid]
            return BinarySearch.searchR(data, l, mid - 1, target);
        }
    }

    static main() {
        let count = 100000;
        let arr = ArrayGenerator.generateOrderArray(count);
        // let arr = [-1, 0, 3, 5, 9, 12];
        const target = Math.floor(Math.random() * count)
        let startTime = new Date().valueOf()
        for (let i = 0; i < 10000; i++) {
            BinarySearch.searchRWrapper(arr, target);
        }
        let endTime = new Date().valueOf()
        console.log(`BinarySearch time is ${endTime - startTime}ms`)
        startTime = new Date().valueOf()
        for (let i = 0; i < 10000; i++) {
            LinerSearch.search(arr, target)
        }
        endTime = new Date().valueOf()
        console.log(`LinerSearch time is ${endTime - startTime}ms`)
    }
}

BinarySearch.main()