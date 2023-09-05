import {comsAuto,ejecutarComando} from "./comandos";
import auto from "./auto";

describe("Comandos para mover el auto", () => {
    it("Deberia mostrar los comandos para el movimiento del auto(Avanzar, Derecha, Izquierda)", () => {
      expect(comsAuto("ADI")).toEqual("ADI");
    });
    it("Solo deja ingresar elementos tipo cadena", () => {
        expect(comsAuto(45)).toEqual("Formato incorrecto");
    });
    it("Da error en caso de letras que no sean A,D,I", () => {
        expect(comsAuto("KDFDJKA")).toEqual("Formato incorrecto");
    });
    it("Solo permite el formato establecido(solo mayusculas y letras I, D, A)", () => {
        expect(comsAuto("ADIAAI")).toEqual("ADIAAI");
    });
    it("Ejecuta el comando I", () => {
        const automovil = new auto("5,8N");
        ejecutarComando("I",automovil);
        expect(automovil.getOrientacion).toEqual("O");
    });
    it("Ejecuta el comando I incorrectamente", () => {
        const automovil = new auto("5,8N");
        ejecutarComando("Z",automovil);
        expect(automovil.getOrientacion).toEqual("N");
    });
    it("Ejecuta el comando I con una pos inicial de 5,8E", () => {
        const automovil = new auto("5,8E");
        ejecutarComando("I",automovil);
        expect(automovil.getOrientacion).toEqual("N");
    });
    it("Ejecuta el comando D", () => {
        const automovil = new auto("5,8O");
        ejecutarComando("D",automovil);
        expect(automovil.getOrientacion).toEqual("N");
    });
    it("Ejecuta el comando D con coordenadas 5,8N, deberia moverse al E", () => {
        const automovil = new auto("5,8EN");
        ejecutarComando("D",automovil);
        expect(automovil.getOrientacion).toEqual("E");
    });
    it("Ejecuta el comando A con orientacion N", () => {
        const automovil = new auto("5,8N");
        ejecutarComando("A",automovil);
        expect(automovil.getPosY).toEqual(9);
    });
    it("Ejecuta el comando A con una orientacion desconocida ", () => {
        const automovil = new auto("5,8Z");
        ejecutarComando("A",automovil);
        expect(automovil.getPosY).toEqual(8);
    });
    it("Ejecuta el comando A con orientacion E", () => {
        const automovil = new auto("5,8E");
        ejecutarComando("A",automovil);
        expect(automovil.getPosX).toEqual(6);
    });
    it("Ejecuta el comando A con orientacion S", () => {
        const automovil = new auto("5,8S");
        ejecutarComando("A",automovil);
        expect(automovil.getPosY).toEqual(7);
    });
    it("Ejecuta el comando A con orientacion O", () => {
        const automovil = new auto("5,8O");
        ejecutarComando("A",automovil);
        expect(automovil.getPosX).toEqual(4);
    });
    it("Ejecuta una serie de comandos", () => {
        const automovil = new auto("1,1N");
        ejecutarComando("ADDIAADI",automovil);
        expect(automovil.getPosX).toEqual(3);
        expect(automovil.getPosY).toEqual(2);
        expect(automovil.getOrientacion).toEqual("E");
    });
    it("Ejecuta comandos estando en el N sin limites en x e y (-1,-1)", () => {
        const automovil = new auto("1,1N");
        ejecutarComando("ADDIAADI",automovil);
        expect(automovil.getPosX).toEqual(3);
        expect(automovil.getPosY).toEqual(2);
        expect(automovil.getOrientacion).toEqual("E");
    });
    it("Se prueba los limites en y", () => {
        const automovil = new auto("1,1N","1,3");
        ejecutarComando("AAAAAA",automovil);
        expect(automovil.getPosX).toEqual(1);
        expect(automovil.getPosY).toEqual(3);
        expect(automovil.getOrientacion).toEqual("N");
    });
    it("Se prueba los limites en y", () => {
        const automovil = new auto("1,1S","1,3");
        ejecutarComando("AAAAAA",automovil);
        expect(automovil.getPosX).toEqual(1);
        expect(automovil.getPosY).toEqual(0);
        expect(automovil.getOrientacion).toEqual("S");
    });
    it("Se prueba los limites en x", () => {
        const automovil = new auto("1,1E","3,1");
        ejecutarComando("AAAAAA",automovil);
        expect(automovil.getPosX).toEqual(3);
        expect(automovil.getPosY).toEqual(1);
        expect(automovil.getOrientacion).toEqual("E");
    });
    it("Se prueba los limites en x", () => {
        const automovil = new auto("1,1O","3,1");
        ejecutarComando("AAAAAA",automovil);
        expect(automovil.getPosX).toEqual(0);
        expect(automovil.getPosY).toEqual(1);
        expect(automovil.getOrientacion).toEqual("O");
    });
    




    
  });
