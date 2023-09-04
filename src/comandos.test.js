import comsAuto from "./comandos";

describe("Comandos para mover el auto", () => {
    it("Deberia mostrar los comandos para el movimiento del auto(Avanzar, Derecha, Izquierda)", () => {
      expect(comsAuto("ADI")).toEqual("ADI");
    });
    it("Solo deja ingresar elementos tipo cadena", () => {
        expect(comsAuto(45)).toEqual("Formato incorrecto");
    });
    
  });
