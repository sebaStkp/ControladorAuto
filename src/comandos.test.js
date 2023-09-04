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
        expect(ejecutarComando("I",automovil)).toEqual("O");
    });
  });
