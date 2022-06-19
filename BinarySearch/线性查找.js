const {
    ArrayGenerator
} = require('./util')

class LinerSearch {
    constructor() {

    }

    static search(data, target) {
        for (let i = 0; i < data.length; i++) {
            // == 判断的是引用相等 data[i] == target
            // equals 值相等
            // String 是一个包装类，比较应该用 equals比较，不要 使用 ==
            if (data[i] === target) {
                return i;
            }
        }
        return -1;
    }

    static main() {
        // let data = [24, 18, 12, 9, 16, 66, 32, 4];
        let data = [1000000, 10000000];
        for (let n of data) {
            let count = 100;
            let data = ArrayGenerator.generateOrderArray(n);
            let startTime = new Date().valueOf();
            for (let i = 0; i < count; i++) {
                LinerSearch.search(data, n);
            }
            let endTime = new Date().valueOf(); // 毫秒
            let runTime = (endTime - startTime) / 1000; // 秒
            console.log("n = " + n + ", 100 runs : " + runTime + " s");
        }
    }
}

exports.LinerSearch = LinerSearch

// LinerSearch.main()