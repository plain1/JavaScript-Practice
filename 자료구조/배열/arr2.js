function getMaxSubSum(arr){
    let ar = arr;
    let sum = [];
    for(let i = 0; i < ar.length; i++){
        let num = 0;
        for(let j = i; j < ar.length; j++){
            if(ar[j]<0 || j==(ar.length-1)){
                sum.push(num);
                break;
            }
            else{
                num+=ar[j];
            }
        }
    }
    let m = 0;
    for(let i in sum){
        if(m<i){
            m = i;
        }
    }
    return m;
}







