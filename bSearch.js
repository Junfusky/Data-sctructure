const arr = [2, 4, 5, 8, 17, 34, 53, 79, 122, 234, 424, 517, 835];

function bSearch(arr, target) {
    let left = 0,  // left boudary
        right = arr.length - 1,  // right boundary
        middle;  // guess
    while(left <= right) {
        middle = Math.floor((left + right) / 2);
        if(arr[middle] === target) {
            return middle;
        }else if(arr[middle] < target) {
            left = middle + 1;
        }else {
            right = middle - 1;
        }
    }
    return -1;
}

console.log(bSearch(arr, 17));