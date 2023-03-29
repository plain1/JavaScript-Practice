let calculator ={
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a*this.b;
    },
    read(){
        this.a = +prompt("",0);
        this.b = +prompt("",0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


let ladder = {
    step : 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        alert(this.step);
        return this;
    }
};

ladder.up().down().up().down().showStep();
