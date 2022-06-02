let arr = [1,2,3,5,6,7]
    let n = arr.length;

function getMissingNo(a, n) {
  
    let total = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++)
        total = a[i];
    return total;
}

let miss = getMissingNo(arr, n);
    console.log(miss);