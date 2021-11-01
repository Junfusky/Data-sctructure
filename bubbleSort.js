const arr = [2, 4, 6, 65, 24, 45, 24, 88, 57, 79, 32, 80, 96, 42];

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr) {
    for(let i=arr.length-1; i>=1; i--) {
        for(let j=1; j<=i; j++) {
            if(arr[j-1] > arr[j]) {
                swap(arr, j-1, j);
            }
        }
    }
}

bubbleSort(arr);
console.log(arr);