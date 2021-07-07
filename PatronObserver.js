// creacion de la clase
class Observable {
    constructor(){
        this.observers =[];
    }
    // Agregar notificacion al observers
    subscribe(notifyingClass){
        this.observers.push(notifyingClass);
    }
    // Remover notificacion del observers
    unsubscribe(notifyingClass){
        this.observers = this.observers.filter(observer => observer instanceof notifyingClass !== true);
    }

    // Recorrer el observers por elemento y se actualiza 
    notify(model){
        this.observers.forEach(element => {
            observer =>{
                observer.notify(model);
            }
        });
    }

}

// Clase que heredad del observble, y lanzar las notioficaciones. 
class NumberExample extends Observable{
    constructor(){
        super();
        this.value = 0;
    }
    // Incrementador de la variable de uno a uno y notifica a los observadores
    increment(){
        this.value++;
        this.notify(this);
    }
    
}
// Mostrar el mensaje en español y la informacion actualizada y clase observadora 
class NumberExampleSpanish{
    notify(model){
        console.log(`El nuevo numero es :${model.value}`);
    }
}
// Mostrar el mensaje en Ingles 
class NumberExampleEnglish{
    notify(model){
        console.log(`The new number is :${model.value}`);
    }
}

// crear objeto de mi numberExample
let numberExample = new NumberExample();

numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleEnglish());

numberExample.increment();
numberExample.increment();

