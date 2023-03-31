let user = {
    firstName: "John",
    sayHi(){
        alert(`Hello,${this.firstName}!`);
    }
};

let sayHi = user.sayHi.bind(user);

sayHi();

setTimeout(sayHi,1000);

user = {
    sayHi() {alert("another");}
};

