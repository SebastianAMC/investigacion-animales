import {Aguila} from "./Aguila.js";
import {Leon} from "./Leon.js";
import {Lobo} from "./Lobo.js";
import {Oso} from "./Oso.js";
import {Serpiente} from "./Serpiente.js";

var add = document.getElementById("btnRegistrar");
var select = document.getElementById("animal");
var animals = [];
var id = 0;

//Vista previa
select.addEventListener("change", ()=>{
    document.getElementById("preview").innerHTML = "";
    conexion().then(
        response =>{
            for (let i=0; i<response.animales.length; i++){
                if (select.value == response.animales[i].name){
                    let img = response.animales[i].imagen
                    let preview = document.getElementById("preview");
                    let previewImg = document.createElement("img");

                    preview.appendChild(previewImg);
                    previewImg.setAttribute('src', './assets/imgs/'+img+'');
                    previewImg.setAttribute("class", "mx-auto d-block");
                    previewImg.setAttribute("style", "max-width:100%; max-height:100%;");
                    previewImg.setAttribute("id", "previewImg");
                }
            }
        }
    )
})

//Agregar un animal
add.addEventListener("click", function(){
    var nombre = document.getElementById("animal").value;
    var edad = document.getElementById("edad").value;
    var comentarios = document.getElementById("comentarios").value;
    document.getElementById("Animales").innerHTML = "";

    if (nombre == "Seleccione un animal" || edad == "Seleccione un rango de años" || comentarios == ""){
        alert("Complete todos los campos solicitados, por favor.");
    }else{
        conexion().then(
            response => {
                        for (let i=0;i<response.animales.length;i++){
                            if(nombre == response.animales[i].name){
                                let img = response.animales[i].imagen;
                                let sonido = response.animales[i].sonido;
                                
                                if(nombre == "Leon"){
                                    let leon = new Leon(nombre, edad, img, comentarios, sonido);
                                    animals.push(leon);
                                }
                                if (nombre == "Lobo"){
                                    let lobo = new Lobo(nombre, edad, img, comentarios, sonido);
                                    animals.push(lobo);
                                }
                                if (nombre == "Oso"){
                                    let oso = new Oso(nombre, edad, img, comentarios, sonido);
                                    animals.push(oso);
                                }
                                if (nombre == "Serpiente"){
                                    let serpiente = new Serpiente(nombre, edad, img, comentarios, sonido);
                                    animals.push(serpiente);
                                }
                                if (nombre == "Aguila"){
                                    let aguila = new Aguila(nombre, edad, img, comentarios, sonido);
                                    animals.push(aguila);
                                }
                                    
                                for (let a=0; a<animals.length;a++){
                                    agregarCard(animals[a], id);
                                    id++;
                                }
                                                                
                                clearForm();
                            }
                        }
                    }
               )
    }  
})

async function conexion(){
    try{
        let response = await fetch("animales.json");
        let datos = await response.json();
        return datos;
    } catch (e){
        console.log(e)
    }
}

function agregarCard(animal, id){
    let list = document.getElementById("Animales");
    let div = document.createElement("div");

    list.appendChild(div);

   div.innerHTML =  '<div class="card m-3" style="max-width: 10em;">'+
                    '<img src="./assets/imgs/'+animal.getImg()+'" id='+id+' class="card-img-top" data-bs-toggle="modal" data-bs-target="#exampleModal">'+
                        '<div class="card-body bg-secondary">'+
                            '<img src="./assets/imgs/audio.svg" id="sonido'+id+'" style="width:1em" class="card-title">'+
                        ' </div>'+
                  ' </div>'
    showModal(id);  
    playSound(id);
}

function playSound(id){
    let sound = document.getElementById("sonido"+id);
    sound.addEventListener("click", function(){
        if(animals[id].getNombre() == "Leon"){
            animals[id].rugir(animals[id].getSonido());
        }
        if(animals[id].getNombre() == "Lobo"){
            animals[id].aullar(animals[id].getSonido());
        }
        if(animals[id].getNombre() == "Oso"){
            animals[id].gruñir(animals[id].getSonido());
        }
        if(animals[id].getNombre() == "Serpiente"){
            animals[id].sisear(animals[id].getSonido());
        }
        if(animals[id].getNombre() == "Aguila"){
            animals[id].chillar(animals[id].getSonido());
        }
    })
}

function showModal(id){
    document.getElementById(id).addEventListener("click", () =>{
                        document.getElementById("modal-body").innerHTML = 
                                '<div class="card mx-auto">'+
                                        '    <img src="./assets/imgs/'+animals[id].getImg()+'" class="card-img-top">'+
                                        '<div class="card-body bg-dark text-center">'+
                                            '<h3 class="text-light">'+animals[id].getNombre()+'</h3>'+
                                        '</div>'+
                                        '<div class="card-body bg-dark text-center">'+
                                            '<h5 class="text-light">'+animals[id].getEdad()+'</h5>'+
                                        '</div>'+
                                        '<div class="card-body bg-dark text-center">'+
                                            '<h7 class="text-light">Comentarios:</h7>'+
                                        ' </div>'+
                                        '<div class="card-body bg-dark text-center">'+
                                            '<h7 class="text-light">'+animals[id].comentarios+'</h7>'+
                                       ' </div>'+
                                ' </div>'
    })
}

function clearForm(){
    document.getElementById("animal").selectedIndex = 0;
    document.getElementById("edad").selectedIndex = 0;
    document.querySelector("textarea").value = "";
    document.getElementById("previewImg").remove();
    id=0;
}