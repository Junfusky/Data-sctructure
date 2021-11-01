const arr = [2, 4, 6, 65, 24, 45, 24, 88, 57, 79, 32, 80, 96, 42];

function insert(arr, i, x) {
    let p = i-1;  // a pointer to the next element that need to be compare
    while(p >= 0 && arr[p] > x) {
        arr[p+1] = arr[p];
        p--;
    }
    arr[p+1] = x;
}

function insertSort(arr) {
    for(let i=1; i<arr.length; i++) {
        insert(arr, i, arr[i]);
    }
}

insertSort(arr)
console.log(arr);