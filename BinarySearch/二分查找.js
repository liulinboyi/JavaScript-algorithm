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
     * 二分搜索前提就是数组是有序的单调的
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
        // 使用二分搜索，必须保证待查找集合是单调的
        const STATUS = {
            order: '有序单调',
            random: '随机无需'
        }
        const status = STATUS.random
        let count = 100000;
        let arr = []

        if (status === STATUS.order) {
            // 有序单调数组
            arr = ArrayGenerator.generateOrderArray(count);
        } else {
            // 无序数组，极有可能查询不到待查元素
            arr = ArrayGenerator.generateRandomArray(count, count);
        }

        // let arr = [-1, 0, 3, 5, 9, 12];
        const target = Math.floor(Math.random() * count)
        let startTime = new Date().valueOf()
        let result = -1
        for (let i = 0; i < 10000; i++) {
            result = BinarySearch.searchRWrapper(arr, target);
        }
        console.log(`result ${result}`)
        let endTime = new Date().valueOf()
        console.log(`BinarySearch time is ${endTime - startTime}ms`)
        startTime = new Date().valueOf()
        for (let i = 0; i < 10000; i++) {
            result = LinerSearch.search(arr, target)
        }
        console.log(`result ${result}`)
        endTime = new Date().valueOf()
        console.log(`LinerSearch time is ${endTime - startTime}ms`)
    }
}

BinarySearch.main()