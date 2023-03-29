function copySorted(arr){
    return arr.slice().sort();
}

let arr3 = ["html",'javascript','css'];
let sorted = copySorted(arr3);

alert(sorted);
alert(arr3);

