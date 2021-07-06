class Observable {
    constructor(){
        this.observers =[];
    }

    subscribe(notifyingClass){
        this.observers.push(notifyingClass);
    }

    unsubscribe(notifyingClass){
        this.observers = this.observers.filter(observer => observer instanceof notifyingClass !== true)
    }

    notify(model){
        this.observers.forEach(element => {
            observer =>{
                observer.notify(model);
            }
        });
    }

}

class NumberExample extends Observable{
    constructor(){
        super();
        this.value = 0;
    }

    increment(){
        this.value++;
        this.notify(this);
    }
    
}

class NumberExampleSpanish{
    notify(model){
        console.log(`El nuevo numero es :${model.value}`);
    }
}

class NumberExampleEnglish{
    notify(model){
        console.log(`The new number is :${model.value}`);
    }
}

let numberExample = new NumberExample();

numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleEnglish());

numberExample.increment();
numberExample.increment();
