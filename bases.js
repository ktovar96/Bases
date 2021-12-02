export default class Bases {
    constructor  (id, nombre, minutos){
        this.id = id;
        this.nombre = nombre;
        this.minutos = minutos;
        this.siguiente = null;
        this.anterior = null;
    }
    
    getId (){
        return this.id;
    }

    getNombre (){
        return this.nombre;
    }

    getMinutos(){
        return this.minutos;
    }

    info(){
        return 'ID: ' + this.id + 'Nombre: ' + this.nombre + "<br>";
    }
}