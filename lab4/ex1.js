class Regular{
    lumenLowerRange;
    lumenHigherRange;
    life;
    constructor(){
        this.lumenLowerRange = 50;
        this.lumenHigherRange = 100;
        this.life = 1 + " year";
    }
  
}
class Energy{
    lumenLowerRange;
    lumenHigherRange;
    life;
    color;
    constructor(color){
        this.lumenLowerRange = 5;
        this.lumenHigherRange = 40;
        this.life = 10 + " years";
        this.color = color ;
    }
    
}

class Factory{
    createBulb(type, color){
        let bulb;
        if(type === "regular"){
            bulb = new Regular();
        }
        else if(type === "energy"){
            bulb = new Energy(color);

        }
        bulb.type = type;
        return bulb;
    }
}
const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}
