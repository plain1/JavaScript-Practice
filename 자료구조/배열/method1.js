function camelize(str){
    return str
        .split('-')
        .map(
            (word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

console.log(camelize("background-color"))

let arr2 = [5,2,1,-10,8];
arr2.sort((a,b)=>b-a);
alert(arr2);

let john = {name:"John", age:25};
let pete = {name:"Pete", age:30};
let mary = {name:"Mary", age:28};

let users = [john,pete,mary];
let names = users.map(item => item.name);

alert(names);