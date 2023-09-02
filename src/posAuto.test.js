import posAuto from "./posicionAuto";

describe("Posicion del auto", () => {
    it("Deberia mostrar en coordenadas x, y la posicion del auto", () => {
      expect(posAuto("1,2")).toEqual("1,2");
    });


  });
  

 