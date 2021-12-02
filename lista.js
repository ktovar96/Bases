export default class Lista {
    constructor(){
        this.inicio = null;
    }
    
    agregar(nuevo){

        if (this.inicio == null){
            this.inicio = nuevo;
            nuevo.siguiente = nuevo;
            nuevo.anterior = nuevo;
        } else if (this.buscar(nuevo.getId() )== null){
            let ultimo = this.inicio.anterior;
            nuevo.siguiente = this.inicio;
            nuevo.anterior = ultimo;
            ultimo.siguiente = nuevo;
            this.inicio.anterior = nuevo;
            return nuevo;
        } else {
            return null;
        }
        return nuevo;
    }
    
    eliminar(id){
        let temp = this.inicio;
        let buscado =this.buscar(id);
        console.log(buscado);
            do {
            
            if (buscado.getId() == temp.getId()){
                temp.anterior.siguiente = temp.siguiente;
                temp.siguiente.anterior = temp.anterior;
                temp.siguiente = null;
                temp.siguiente = null;
                return buscado;
                } 
                temp = temp.siguiente;
            }while (temp != this.inicio);
           
        
        return null;
    }

    buscar(id){
        let temp = this.inicio;
            do {
                if (temp.getId() == id){
                return temp;
            } 
            temp = temp.siguiente;
        } while (temp != this.inicio)
        return null;
    }

    listar(){
        let res = '';
        if (this.inicio != null){
            let temp = this.inicio;
            do {
            res += temp.info();
            temp = temp.siguiente;  
            } while (temp != this.inicio);
        }
        return res;
    }

    listarInv(){
        let res = '';
        if (this.inicio != null){
            let temp = this.inicio;
            do {
            res = temp.info() + res;
            temp = temp.siguiente;  
            } while (temp != this.inicio);
        }
        return res;
    }

    _encontrarBase(nombre){
        let temp = this.inicio;

        while (temp.siguiente != this.inicio){
            if (temp.getNombre() == nombre){
                return temp;
            } 
            temp = temp.siguiente;
        }
        return null;
    }

    crearTarjeta(base, hora, minutos){
        let temp = this._encontrarBase(base);
        console.log(temp.info());
        let sum = 0;
        let txtMinutos = '';
        let tarjeta = '';
        let cont= 0;
        minutos = parseInt(minutos);
        while (sum < minutos){
            console.log('suma' + sum + ' , ' + minutos);
            sum += parseInt(temp.getMinutos());
            cont += parseInt(temp.getMinutos());
            if (cont> 59){
                hora += 1;
                cont = cont  - 60;
                if (cont < 10){
                    txtMinutos = "0" + cont;
                } else{
                    txtMinutos = cont;
                }
            } else {
                if (cont < 10){
                    txtMinutos = "0" + cont;
                } else{
                    txtMinutos = cont;
                }
            }
            
            let txtHora = hora + ":" + txtMinutos;
            tarjeta += "BASE:  " + temp.getNombre() + " HORA: " + txtHora + "\n";
            console.log(tarjeta);
            temp = temp.siguiente;
        }
        return tarjeta;
    }
}