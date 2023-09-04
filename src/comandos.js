import auto from "./auto";

function verificarFormatoAuto(comandos){
    var result = false;
    if(typeof comandos == "string"){
        var formatoComs = /^[IDA]+$/;
        if(formatoComs.test(comandos)){
            result = true;
        }
    }
    return result;
}
export function ejecutarComando(comandos, automovil){
    const puntosCardinales = "NOSE";
    var coms = comandos + "";
    for(var i = 0; i < coms.length; i++){
        if(coms[i] == "I"){
            var posBusqueda = puntosCardinales.indexOf(automovil.getOrientacion);//busca en puntosCardinales la posicion donde esta la letra indicada(en este caso I)
            if(posBusqueda != puntosCardinales.length-1){
                automovil.setOrientacion = puntosCardinales[posBusqueda+1]+"";
            }
            else{
                automovil.setOrientacion = puntosCardinales[0]+"";
            }
        }
        else if(coms[i] == "D"){
            var posBusqueda = puntosCardinales.indexOf(automovil.getOrientacion);
            if(posBusqueda != 0){
                automovil.setOrientacion = puntosCardinales[posBusqueda-1]+"";
            }
            else{
                automovil.setOrientacion = puntosCardinales[puntosCardinales.length-1]+"";
            }
        }
    }
    return automovil.getOrientacion;
}

export function comsAuto(comandos){
    var coms;
    if(verificarFormatoAuto(comandos)){
        coms = comandos;
    }
    else{
        coms = "Formato incorrecto";
    }
    return coms;
}
