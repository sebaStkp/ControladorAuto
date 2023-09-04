class auto{
    constructor(cadena){
        //saca la orientacion, posx y posy
        var orientacion = cadena[cadena.length-1];
        var cad = cadena + "";
        cad = cad.substring(0, cad.length - 1);
        var coordenadas = cad.split(",");
        var posX = coordenadas[0];
        var posY = coordenadas[1];
        posX = parseInt(posX);
        posY = parseInt(posY);
        //atributos clase
        this.posX=posX;
        this.posY=posY;
        this.orientacion = orientacion;
    }
    get getPosX(){
        return this.posX;
    }
    get getPosY(){
        return this.posY;
    }
    set setPosX(aumento){
        this.posX += aumento;
    }
    set setPosY(aumento){
        this.posY += aumento;
    }


}

export default auto;



