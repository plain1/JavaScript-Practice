let styles = ['Jazz','Blues'];
styles.push('Rock-n-Roll');
styles[parseInt((styles.length-1)/2)] = 'Classics';
alert(styles.shift());
styles.unshift("Rap","Reggae");

function sumInut(){
    let arr =[];
    while(true){
        let a = prompt("",0);
        if(a ==="" || a === null || !isFinite(a)) break;
        arr.push(+a);
    }
    let sum =0;
    for(let key in arr){
        sum+=key;
    }
    return sum;
}


