/**
 * 快排，会在排序，有序数组时，退化成O(n^2)
 * 最后期望优化至接近O(nlogn)
 */

class QuickSort {
    constructor() {

    }

    static sortWrapper(arr) {
        let ram = Math.random();
        QuickSort.sort(arr, 0, arr.length - 1, ram);
        return arr;
    }

    static sort(arr, l, r, ram) {
        if (l >= r) {
            return;
        }
        let p = QuickSort.partition(arr, l, r, ram);
        QuickSort.sort(arr, l, p - 1, ram);
        QuickSort.sort(arr, p + 1, r, ram);
    }

    static partition(arr, l, r, ra) {

        // [l+1,...,j] < v
        // [j+1,...,i-1] >= v
        let j = l;
        let i = j + 1;
        // 随机索引[l,r]之间
        //        int ram = (int) (l + (Math.random() * (r - l + 1)));
        //        console.log(ram);
        // random 默认右边为开区间
        let ram = l + Math.floor(ra * (r - l + 1));
        QuickSort.swap(arr, ram, l);
        let v = arr[l];
        while (i <= r) {
            // arr[i] < v
            if (arr[i] < v) {
                j++;
                QuickSort.swap(arr, j, i);
            }
            i++;
        }
        QuickSort.swap(arr, l, j);
        return j;
    }


    /**
     * 双路快速排序算法
     *
     * @param arr
     * @param <E>
     * @return
     */
    static sort2waysWrapper(arr) {
        let ram = Math.random();
        QuickSort.sort2ways(arr, 0, arr.length - 1, ram);
        return arr;
    }

    static sort2ways(arr, l, r, ram) {
        if (l >= r) {
            return;
        }
        let p = QuickSort.partition2(arr, l, r, ram);
        QuickSort.sort2ways(arr, l, p - 1, ram);
        QuickSort.sort2ways(arr, p + 1, r, ram);
    }

    static partition2(arr, l, r, ra) {

        // 随机索引[l,r]之间
        // int ram = (int) (l + (Math.random() * (r - l + 1)));
        // console.log(ram);
        let ram = l + Math.floor(ra * (r - l + 1));
        QuickSort.swap(arr, ram, l);

        // arr[l + 1, i-1] <= v
        // arr[j+1,r] >= v

        let i = l + 1;
        let j = r;
        while (true) {
            // arr[i] < arr[l]
            while (i <= j && arr[i] < arr[l]) {
                i++;
            }
            while (j >= i && arr[j] > arr[l]) {
                j--;
            }
            if (i >= j) {
                break;
            }
            QuickSort.swap(arr, i, j);
            i++;
            j--;
        }
        QuickSort.swap(arr, l, j);
        return j;
    }


    /**
     * 三路快速排序算法
     * 对有大量相同元素的数据，更有优势，更快，达到O(n)
     *
     * @param arr
     * @param <E>
     * @return
     */
    static sort3waysWrapper(arr) {
        let ram = Math.random();
        QuickSort.sort3ways(arr, 0, arr.length - 1, ram);
        return arr;
    }

    static sort3ways(arr, l, r, ram) {
        if (l >= r) {
            return;
        }
        let p = QuickSort.partition3(arr, l, r, ram);
        let lt = p[0];
        let gt = p[1];
        QuickSort.sort3ways(arr, l, lt - 1, ram); // 对小于标定点的区间进行递归
        QuickSort.sort3ways(arr, gt, r, ram); // 对大于标定点的区间进行递归
    }

    static partition3(arr, l, r, ra) {

        // 随机索引[l,r]之间
        // int ram = (int) (l + (Math.random() * (r - l + 1)));
        // console.log(ram);
        let ram = l + Math.floor(ra * (r - l + 1));
        QuickSort.swap(arr, ram, l);

        // arr[l + 1, lt] < v
        // arr[lt + 1, i-1] == v  arr[l + 1, l]
        // arr[gt, r] > v

        // 初始时，数组集合元素都为空，左边界值比右边界值大
        let lt = l;
        let i = l + 1;
        let gt = r + 1;

        while (i < gt) {
            if (arr[i] < arr[l]) {
                lt++;
                QuickSort.swap(arr, lt, i);
                i++;
            } else if (arr[i] > arr[l]) {
                gt--;
                QuickSort.swap(arr, gt, i);
            } else { // arr[i] == arr[l]
                i++;
            }
        }
        QuickSort.swap(arr, l, lt);
        // after this step
        // arr[l, lt - 1] < v
        // arr[lt, gt-1] == v
        // arr[gt, r] > v

        return {
            lt,
            gt
        };
    }

    static swap(arr, i, j) {
        let TEMP = arr[i];
        arr[i] = arr[j];
        arr[j] = TEMP;
    }

    static main() {
        let arr = [4, 6, 8, 2, 3, 1, 0];
        QuickSort.sortWrapper(arr);
        console.log(arr);
    }

}

QuickSort.main()