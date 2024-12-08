function random(min, max) {
    let n=Math.random()*(max-min)+min
    n=parseInt(n)
    console.log("Random delay:",n)
    return n
}

function cambioColore(){
    sinistra.classList.replace("rosso","verde")
    centro.classList.replace("rosso","verde")
    destra.classList.replace("rosso","verde")
    suono.play
    pausa=true
    startTimer=Date.now();
}

function restart(){
    sinistra.classList.replace("verde","rosso")
    centro.classList.replace("verde","rosso")
    destra.classList.replace("verde","rosso")
    pausa=false
    inizio.disabled=false
}

let inizio=document.querySelector("#inizio")
let sinistra=document.querySelector("#sinistra")
let centro=document.querySelector("#centro")
let destra=document.querySelector("#destra")
let riflessi=document.querySelector("#riflessi")
let tempo=document.querySelector("#tempo")
let pausa=false
let startTimer
let tempoMigliore=Infinity
let suono = new Audio('static/sounds/beep-125033.mp3')

inizio.addEventListener("click",function(){
    if(!pausa){
       
        restart()
        let delay=random(1000, 3000)
        riflessi.innerHTML="Preparati..."
        setTimeout(cambioColore,delay)
    }else{
        let tempoDiReazione=(Date.now()-startTimer)/1000
        riflessi.innerHTML="Tempo di reazione: "+tempoDiReazione+" secondi"
        if (tempoDiReazione<tempoMigliore){
            tempoMigliore=tempoDiReazione
            tempo.innerHTML="Record personale: "+tempoMigliore+" secondi"
        }else{
            tempo.innerHTML="Record personale: "+tempoMigliore+" secondi"
        }
        inizio.disabled=true
        setTimeout(restart,3000)
    }
})