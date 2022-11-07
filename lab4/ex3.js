class Info{
    logging(consoleValue){
        console.log(consoleValue);
    }
}
class Warn{
    logging(consoleValue){
        console.log(consoleValue);
    }
}
class Error{
    logging(consoleValue){
        console.log(consoleValue);
    }
}
class Table{
    logging(consoleValue){
        console.log(consoleValue)
    }
}
class Strategy{
   logger;
    setStrategy(logger){
        this.logger =logger;
    }
    logging(consoleValue){
        this.logger.logging(consoleValue);
    }
}
const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);