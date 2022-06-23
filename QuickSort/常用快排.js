function sort(arr) {
    quickSort(arr, 0, arr.length - 1)
}

function quickSort(arr, l, r) {
    if (l > r) return;
    let p = partition(arr, l, r);
    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, r);
}

function partition(arr, l, r) {
    // [l/i,j.....r]
    // [l - i] < v
    // [i - j - 1] > v
    let i = l;
    let j = i + 1;
    let v = arr[l];
    while (j <= r) {
        // 小交换，大向前走
        if (arr[j] < v) { // 看索引j位置的成员是否小于v
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        j++;
    }
    [arr[l], arr[i]] = [arr[i], arr[l]];
    return i;
}

let arr = [4, 6, 8, 2, 3, 1, 0];
sort(arr);
console.log(arr);