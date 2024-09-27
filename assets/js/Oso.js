import { Animal } from "./Animal.js";

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    gruñir(audio){
        let src = "./assets/sounds/"+audio;
        let play = new Audio(src);
        play.play();
    }
}

export {Oso};