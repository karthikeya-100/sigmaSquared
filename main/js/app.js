// Variables 
let title = "Sigma Squared.py"
let app = document.querySelector('.main-title');
let typewriter = new Typewriter(app, {
    loop: true
});
main_title = document.querySelector(".main-title")
ball = document.querySelector(".side-shape")
guest1_button = document.querySelector(".first-button")
guest2_button = document.querySelector(".second-button")
guest3_button = document.querySelector(".third-button")
current_image_name = document.querySelector("#myImage")

// Code for Typewriting effect

start_type = ()=>{
    typewriter.typeString(title)
    .pauseFor(2500)
    .deleteAll()
    .typeString("Sigma Squared.R")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Written By")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Big Data Analytics Dept.")
    .pauseFor(2500)
    .deleteAll()
    .typeString("2016 Batch!!")
    .pauseFor(2500)
    .deleteAll()
    .typeString("And Successfully extended")
    .pauseFor(2500)
    .deleteAll()
    .typeString("By Other batches!")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Now it's Turn For!!")
    .pauseFor(2500)
    .deleteAll()
    .typeString("2021 Batch!!!!")
    .pauseFor(2500)
    .deleteAll()
    .start();
}

// Code for lighting lamps
swap_image=(event) =>{
    name_value = parseInt(event.target.attributes[1].nodeValue)
    switch(name_value){
        case 1:
            current_image_name.src = "./img/l2.png"
            event.target.disabled = true
            break;
        case 2:
            if(current_image_name.src.match("l2")){
                current_image_name.src = "./img/l3.png"
                event.target.disabled = true
            }
            break;
        case 3:
            if(current_image_name.src.match("l3")){
                current_image_name.src = "./img/l5.png"
                event.target.disabled = true
                main_title.style.display = "block"
                ball.style.display = "inline-block"
                start_type()
                document.querySelector(".sample1").style.display = "inline-block"
                document.querySelector(".sample2").style.display = "inline-block"
            }
        break;
        default:
            console.log("Error")
    }
}
guest1_button.addEventListener("click",(e)=>{
    swap_image(e)
})

guest2_button.addEventListener("click",(e)=>{
    swap_image(e)
})

guest3_button.addEventListener("click",(e)=>{
    swap_image(e)

})