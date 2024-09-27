import { Animal } from "./Animal.js";

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir(audio){
        let src = "./assets/sounds/"+audio;
        let play = new Audio(src);
        play.play();
    }
}
export {Leon};