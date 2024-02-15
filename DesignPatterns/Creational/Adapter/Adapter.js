class SimpleEarPhones{
    constructor(){
        this.attach = function(){
            console.log("Use Earphones with Type C phone");
        }
    }
}

class EarphoneAdpter extends SimpleEarPhones {
    constructor(typeCphone){
        super();
        this.attach = function(){
            typeCphone.attach();
        }
    }
}

class TypeCphone {
    constructor(){
        this.attach = function(){
            console.log("Earphones attached to type C phone");
        }
    }
}

var typeCphone = new TypeCphone();
var adapter = new EarphoneAdpter(typeCphone);
adapter.attach();