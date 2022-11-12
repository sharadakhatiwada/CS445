class User{
    name;
    constructor(name){
        this.name = name;
    }
}
class DecoratedUser{
    user;
    name;
    street;
    city;
    constructor(user, street, city){
        this.user = user;
        this.name = user.name;
        this.street = street;
        this.city = city;
    }
    logger(){
        console.log("name: " + this.name + " Address: "+this.street +" city: "+ this.city)
    }
}
const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();