import comsAuto from "./comandos";

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

  });
