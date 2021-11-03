const a = [2, 4, 6, 65, 24, 45, 24, 88, 57, 79, 32, 80, 96, 42];

function merge(arr, p, q, r) {// p:left start, q:right start, r:right over  左闭右开
    let a1 = arr.slice(p, q);  //temparory space that store the left
    let a2 = arr.slice(q, r); //temparory space that store the right

    a1.push(Number.MAX_SAFE_INTEGER);
    a2.push(Number.MAX_SAFE_INTEGER);  // guard

    for(let k = p, i = 0, j = 0; k < r; k++) {
        //k : the next number that need to be written back
        //i : the number in a1 needs to be written back
        //j : the number in a2 needs to be written back
        arr[k] = a1[i] < a2[j] ? a1[i++] : a2[j++];
    };
}

function mergeSort(A, p, r) {
    if(r - p < 2) {
        return;
    };
    const q = Math.ceil((p+r) / 2);
    mergeSort(A, p, q);
    mergeSort(A, q, r);
    merge(A, p, q, r);
}

mergeSort(a, 0, a.length);
console.log(a);