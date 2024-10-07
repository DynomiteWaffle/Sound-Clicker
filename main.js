var type = "stop"
// const click = new Audio("click.wav") //https://opengameart.org/content/click
const click = new Audio("selectNoise.wav") //https://opengameart.org/content/select-like-sound
click.volume = 1 // set max volume

function Irregular(){
    type= "irregular"
    document.getElementById("mode").innerText = type
}


function Regular(){
    type = "reqular"
    document.getElementById("mode").innerText = type
}

function Stop(){
    // loop()
    type = "stop"
    document.getElementById("mode").innerText = type
}
function Test(){
    click.play()
}


async function loop() {
    console.log("new loop")
    if(type=="stop"){
        await sleep(5 *1000)
        loop()
        return
    }
    // check if on time
    let time = (new Date()).getSeconds()
    time = 60-time
    await sleep(time*1000)

    if(type=="irregular"){
        // sleep for random time
        const time = 50 // max offset time
        let rand = Math.floor(Math.random()*time)
        await sleep(rand*1000)
    }
    // play sound
    click.play()
    // loop
    loop()
}

function sleep(ms) {
    console.log("waiting "+ms+" ms")
    return new Promise(resolve => setTimeout(resolve, ms));
}