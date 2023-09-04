function verificarFormatoAuto(comandos){
    var result = false;
    if(typeof comandos == "string"){
        result = true;
    }
    return result;
}


function comsAuto(comandos){
    var coms;
    if(verificarFormatoAuto(comandos)){
        coms = comandos;
    }
    else{
        coms = "Formato incorrecto";
    }
    return coms;
}
export default comsAuto;