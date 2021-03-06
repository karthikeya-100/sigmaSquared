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
guest4_button = document.querySelector(".fourth-button")
current_image_name = document.querySelector("#myImage")

// Code for Typewriting effect

start_type = () => {
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
swap_image = (event) => {
    name_value = parseInt(event.target.attributes[1].nodeValue)
    switch (name_value) {
        case 1:
            current_image_name.src = "./img/l2.png"
            event.target.disabled = true
            break;
        case 2:
            if (current_image_name.src.match("l2")) {
                current_image_name.src = "./img/l3.png"
                event.target.disabled = true
            }
            break;
        case 3:
            if (current_image_name.src.match("l3")) {
                current_image_name.src = "./img/l4.png"
                event.target.disabled = true
            }
            break;
        case 4:
            if(current_image_name.src.match("l4")){
                current_image_name.src = "./img/l5.png"
                event.target.disabled = true
                if (current_image_name.src.match("l5")) {
                    main_title.style.display = "block"
                    ball.style.display = "inline-block"
                    start_type()
                    document.querySelector(".flower1").style.display = "block"
                    for (let i of document.querySelectorAll(".flower1 > *")){
                            i.style.display = "block"
                    }
                    document.querySelector(".flower2").style.display = "block"
                    for(let i of document.querySelectorAll(".flower2 > *")){
                        i.style.display = "block"
                    }
                }
            }
        default:
            console.log("Error")
    }
}
guest1_button.addEventListener("click", (e) => {
    swap_image(e)
})

guest2_button.addEventListener("click", (e) => {
    swap_image(e)
})

guest3_button.addEventListener("click", (e) => {
    swap_image(e)

})
guest4_button.addEventListener("click",(e)=>{
    swap_image(e)
})