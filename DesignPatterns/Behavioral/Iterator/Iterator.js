class Iterator {
    constructor(elements){
        this.index = 0;
        this.elements = elements;
        this.backIndex = this.elements.length - 1;

    }

    next(){
        return this.elements[this.index++];
    }

    previous(){
        if(this.index >= 0){
            return this.elements[this.index - 1];
        } else {
            return null;
        }
    }

    hasNextElement(){
        return this.index <= this.elements.length;
    }

    hasPrevElement(){
        return this.backIndex >= 0
    }

    first(){
        this.index = 0;
        return this.next();
    }

    last(){
        this.index = this.elements.length - 1;
        return this.elements[this.index];
    }
}

function iterate(){
    var items = ['Yellow', 'Green', 'Blue'];
    var iter = new Iterator(items);
    for(var i = iter.first(); iter.hasNextElement(); i=iter.next()){
        console.log(i);
    }
}