class IceCreamFactory {
    constructor(){
        this.createIceCream = (flavor) => {
            let iceCream;
            if(flavor === 'chocolate'){
                iceCream = new Chocolate();
            }

            else if(flavor === 'mint'){
                iceCream = new mint();
            }

            else if(flavor === 'strawberry'){
                iceCream = new strawberry();
            }
            return iceCream;
        }
    }
}

class Chocolate{
    constructor() {
        this.iceCreamFlavor = "chocolate";
        this.message = () => {
            return `You chose the ${this.iceCreamFlavor} flavor.`;
        }
    }
}

class mint{
    constructor() {
        this.iceCreamFlavor = "mint";
        this.message = () => {
            return `You chose the ${this.iceCreamFlavor} flavor.`;
        }
    }
}

class strawberry{
    constructor() {
        this.iceCreamFlavor = "strawberry";
        this.message = () => {
            return `You chose the ${this.iceCreamFlavor} flavor.`;
        }
    }
}

const iceCreamFactory = new IceCreamFactory();
const chocolate = iceCreamFactory.createIceCream('chocolate');
const Mint = iceCreamFactory.createIceCream('mint');
const Strawberry = iceCreamFactory.createIceCream('strawberry');

console.log(chocolate.message());
console.log(Mint.message());
console.log(Strawberry.message());
