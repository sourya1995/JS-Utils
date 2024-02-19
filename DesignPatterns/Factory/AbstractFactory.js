// Abstract class for creating ice cream objects.
class IceCream {
    constructor() {
        this.iceCreamFlavor = null;
    }

    // Abstract method that must be implemented by subclasses.
    message() {
        throw new Error("Abstract method not implemented.");
    }
}

// Concrete class for creating chocolate ice cream objects.
class Chocolate extends IceCream {
    constructor() {
        super();
        this.iceCreamFlavor = "chocolate";
    }

    // Override the message() method to return a message for chocolate ice cream.
    message() {
        return `You chose the ${this.iceCreamFlavor} flavor.`;
    }
}

// Concrete class for creating mint ice cream objects.
class Mint extends IceCream {
    constructor() {
        super();
        this.iceCreamFlavor = "mint";
    }

    // Override the message() method to return a message for mint ice cream.
    message() {
        return `You chose the ${this.iceCreamFlavor} flavor.`;
    }
}

// Concrete class for creating strawberry ice cream objects.
class Strawberry extends IceCream {
    constructor() {
        super();
        this.iceCreamFlavor = "strawberry";
    }

    // Override the message() method to return a message for strawberry ice cream.
    message() {
        return `You chose the ${this.iceCreamFlavor} flavor.`;
    }
}

// Factory class for creating ice cream objects.
class IceCreamFactory {
    constructor() {
        this.createIceCream = (flavor) => {
            let iceCream;
            switch (flavor) {
                case "chocolate":
                    iceCream = new Chocolate();
                    break;
                case "mint":
                    iceCream = new Mint();
                    break;
                case "strawberry":
                    iceCream = new Strawberry();
                    break;
                default:
                    throw new Error("Invalid flavor specified.");
            }
            return iceCream;
        };
    }
}

// Create an instance of the IceCreamFactory class.
const iceCreamFactory = new IceCreamFactory();

// Create an instance of the Chocolate ice cream object.
const chocolate = iceCreamFactory.createIceCream("chocolate");

// Create an instance of the Mint ice cream object.
const mint = iceCreamFactory.createIceCream("mint");

// Create an instance of the Strawberry ice cream object.
const strawberry = iceCreamFactory.createIceCream("strawberry");

// Print the messages for each ice cream object.
console.log(chocolate.message());
console.log(mint.message());
console.log(strawberry.message());
