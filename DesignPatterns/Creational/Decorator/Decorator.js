class SuperHero {
    constructor(name, power){
        this.name = name;
        this.power = power;
    }
}

function SuperHeroWithSword(superhero){
    superhero.sword = true;
    superhero.hasSword = function(){
        return `${this.name}'s power is ${this.power}, and he also has a sword now`
    }
    return superhero;
}

function SuperHeroWithSuperSpeed(superhero){
    superhero.superSpeed = true;
    superhero.hasSuperSpeed = function(){
        return `${this.name}'s power is ${this.power}, and he also has super speed now.`;
    }
    return superhero;
}

function SuperHeroWithSuperSpeedAndSword(superhero){
    superhero.speedAndSword = true;
    superhero.hasSpeedAndSword = function(){
        return `${this.name}'s power is ${this.power}, and he also has super speed and a sword now.`;
    }
    return superhero;
}

var superhero1 = new SuperHero("Fire Man", "Fire");
SuperHeroWithSword(superhero1);
console.log(superhero1.hasSword());

var superhero2 = new SuperHero("Ice Man", "Ice");
SuperHeroWithSuperSpeedAndSword(superhero2);
console.log(superhero2.hasSpeedAndSword());