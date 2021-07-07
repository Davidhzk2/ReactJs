class Observable{
    constructor(){
        this.observers = [];
    }

    subscribe(observerClass){
        this.observers.push(observerClass);
    }

    unsubscribe(observerClass){
        this.observers.filter((observer)=> observer instanceof observerClass !== true);
    }

    notify(message){
        this.observers.forEach((observer) =>{
            observer.notify(message);
        });
    }
}

class channel extends Observable{
    constructor(){
        super();
    }
    
    increment(){

    }

}
class channel