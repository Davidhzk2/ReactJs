// creacion de la clase observable 
class Observable {
    constructor(){
        this.observers =[];
    }
    // Agregar observer  al observers
    subscribe(notifyingClass){
        this.observers.push(notifyingClass);
    }
    // Remover observer  del observers
    unsubscribe(notifyingClass){
        this.observers = this.observers.filter(observer => observer instanceof notifyingClass !== true);
    }

    // Recorrer el observers por elemento y se actualiza 
     notify(message){
        this.observers.forEach((observer) =>{
            observer.notify(message);
        });
    }

}

// Clase que heredad del observable y va  ser observada , y lanzar las notioficaciones. 
class NumberExample extends Observable{
    constructor(){
        super();
        this.value = 0;
    }
    // Incrementador de la variable de uno a uno y notifica a los observadores, reacionen al cambio
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
// Mostrar el mensaje en Ingles y la informacion actualizada y clase observadora 
class NumberExampleEnglish{
    notify(model){
        console.log(`The new number is :${model.value}`);
    }
}

// crear objeto de la clase observeda.
let numberExample = new NumberExample();

// subscricion de los observadores al observavble 
numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleEnglish());

// invoca 2 veces la funcion increment, cambio del objeto que hace reacionar a los observadores 
numberExample.increment();
numberExample.increment();

