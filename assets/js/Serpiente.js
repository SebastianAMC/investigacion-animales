import { Animal } from "./Animal.js";

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    sisear(audio){
        let src = "./assets/sounds/"+audio;
        let play = new Audio(src);
        play.play();
    }
}

export {Serpiente};