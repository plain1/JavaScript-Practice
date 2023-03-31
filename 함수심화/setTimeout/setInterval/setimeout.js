setInterval(function printNumbers(from,to){
    for(let i = from; i <= to; i++){
        alert(i);
    }
},1000);


setTimeout(function printNumbers(from,to){
    if(from <= to){
        alert(from);
    }
    setTimeout(printNumbers(from++,to),1000);
},1000);