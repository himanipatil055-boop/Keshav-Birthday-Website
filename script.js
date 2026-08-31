const btn = document.getElementById("Opensurprise");
function celebration(){
    confetti({
        particleCount:600,
        spread:120,
        origin:{y:0.6}
    });
    confetti({
        particleCount:600,
        angle:60,
        spread:80,
        origin:{x:0}
    });
    confetti({
        particleCount:440,
        angle:120,
        spread:80,
        origin:{x:1}
    });
}
setTimeout(()=>{
    celebration();
},4000);
btn.addEventListener("click",()=>{
    btn.classList.add("clicked");
    setTimeout(()=>{
        window.location.href="dream.html";
    },700);
});
const container = document.body;

const fireworks = new Fireworks.default(container,{
    rocketsPoint:{
        min:50,
        max:50
    }
});

setTimeout(()=>{

    fireworks.start();

    setTimeout(()=>{
        fireworks.stop();
    },5000);

},4000);
