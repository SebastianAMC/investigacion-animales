import { Animal } from "./Animal.js";

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    chillar(audio){
        let src = "./assets/sounds/"+audio;
        let play = new Audio(src);
        play.play();
    }
}

export {Aguila};