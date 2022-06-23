class InsertSort {
    constructor() {

    }

    static swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    static sort(arr) {
        // 优化
        // 减少swap的次数，使用暂存值以及比较暂存值与索引j-1的值
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i]; // 暂存索引i的值
            let j; // 需要将索引i的值，赋值的索引
            for (j = i; j - 1 >= 0; j--) {
                if (temp < arr[j - 1]) { // 如果暂存的索引i的值比索引j-1小，将索引j-1的值赋值给j，此时索引j与索引j-1值相同
                    arr[j] = arr[j - 1];
                } else {
                    // 如果暂存的索引i的值比索引j -1的值大，则找到暂存值赋值的位置
                    break;
                }
            }
            arr[j] = temp;
        }
        return arr;
    }

    static sort2(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j - 1 >= 0; j--) {
                // 往前看一个元素
                if (arr[j] < arr[j - 1]) {
                    InsertSort.swap(arr, j - 1, j);
                } else {
                    break;
                }
            }
        }
        return arr;
    }

    static main() {
        let arr = [2, 3, 5, 7, 1, 8, 9, 0, 2];
        let res = InsertSort.sort2(arr)
        console.log(res)
        // let result = arr.sort();
        // console.log(result)
    }
}

InsertSort.main()