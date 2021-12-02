import Bases from "./bases.js"
import Lista from "./lista.js"

let lista = new Lista ();

function clear(){
    document.getElementById("inpId").value ="";
    document.getElementById("inpName").value = "";
    document.getElementById("inpMin").value = "";
}

const btnFind= document.getElementById("btnFind");
btnFind.addEventListener(`click`, () =>{
    
    let id= document.getElementById("inpId").value;
    let base= lista.buscar(id);
    let text= document.getElementById("txt2");

    if(base ==  null){
        text.innerHTML = "Producto con `ID: " + id + "` ¡¡NO ENCONTRADO!!";
    } else{
        let nombre = base.getNombre();
        let minutos = base.getMinutos();

        text.innerHTML = "PRODUCTO BUSCADO: ID:" + id + " Nombre: " + nombre + " Minutos: " + minutos ;
    }

    clear();
})

const btnAdd= document.getElementById("btnAdd");
btnAdd.addEventListener(`click`, () =>{
    let id= document.getElementById("inpId").value;
    let nombre= document.getElementById("inpName").value;
    let minutos= document.getElementById("inpMin").value;
    let base = new Bases(id, nombre, minutos);
    let added= lista.agregar(base);
        if(added==null){
            clear();
            return
        } 
    let txt = document.getElementById("txt");
    txt.innerHTML += "<BR> ID:" + id + " Nombre: " + nombre + " Minutos: " + minutos ;
    console.log(lista);
    clear();
})

const btnDelete= document.getElementById("btnDelete");
btnDelete.addEventListener(`click`, () =>{
    let id= document.getElementById("inpId").value;
    let base = lista.buscar(id);
    if(base ==  null){
        txt.innerHTML = "El producto con `ID " + id + "` ¡¡NO EXISTE!!";
    } else{
        lista.eliminar(id);
        }
        
    let txt = document.getElementById("txt");
    txt.innerHTML = "PRODUCTO ELIMINADO ID: " + id + " Nombre: " + base.getNombre()  + " Minutos: " + base.getMinutos();
    clear();
    console.log(lista);
})

const btnGet= document.getElementById("btnGet");
btnGet.addEventListener(`click`, () =>{
    let info= document.getElementById("info");
    info.innerHTML = "<p> Listar: </p> " +lista.listar();
})

const btnGetInv= document.getElementById("btnGetInv");
btnGetInv.addEventListener(`click`, () =>{
    let info= document.getElementById("info");
    info.innerHTML = "<p> Listar Invertido: </p> " + lista.listarInv();
})

const btnTarjeta= document.getElementById("btnTarjeta");
btnTarjeta.addEventListener(`click`, () =>{
    console.log("hola");
    let base= document.getElementById("inpBase").value;
    let hora= document.getElementById("inpHora").value;
    let minutos= document.getElementById("inpMin2").value;
    let info= document.getElementById("info");
    info.innerHTML = lista.crearTarjeta(base, hora, minutos);
})
