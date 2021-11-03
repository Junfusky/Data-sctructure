const a = [2, 4, 6, 65, 24, 45, 24, 88, 57, 79, 32, 80, 96, 42];

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
};

function partition(array, l, r) {
    const pivot = array[r-1];
    let i = l, j = r-1;
    // range that less than pivot: [l, i)
    // has not been confirmed: [i, j)
    // range that greater than pivot: [j, r-1)
    while (i !== j) {
        if(array[i] <= pivot) {
            i++;
        }else {
            swap(array, i, --j);
        };
    };
    swap(array, j, r-1);
    return j;
};

function quickSort(array, l=0, r=array.length) {
    if(r-l <= 1) return;
    const p = partition(array, l, r);
    quickSort(array, l, p);
    quickSort(array, p+1, r);
};

quickSort(a);
console.log(a);