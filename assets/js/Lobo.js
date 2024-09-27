import { Animal } from "./Animal.js";

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    aullar(audio){
        let src = "./assets/sounds/"+audio;
        let play = new Audio(src);
        play.play();
    }
}
export {Lobo};