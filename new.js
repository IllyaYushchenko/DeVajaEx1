let log = console.log;
let birds = "AbraKadabra";
//log (birds.slice(birds.length - 1));
document.addEventListener('DOMContentLoaded', init);
let triger = 1;

function init(){
    document.getElementById('drop').innerHTML=birds;
    document.body.addEventListener('keydown', anyKey);
    
}

function anyKey(ev){
    let char = ev.char || ev.charCode || ev.which;
    let s = String.fromCharCode(char).toLowerCase(); 
    
   if (birds.length && triger===1) {
   if (s === birds[0] || s === birds[0].toLowerCase()) {
    let re = RegExp(s, 'gi');   
    let res = birds.replace(re,"");
    document.getElementById('drop').innerHTML=res;
    birds = res;
    triger = 0;
    
    log (s);
    log (birds[0]);
    log (res);
   }
} else if (birds.length && triger===0) {
        if (s===birds.slice(birds.length - 1) || s===birds.slice(birds.length - 1).toLowerCase()) {
            let re = RegExp(s, 'gi');   
            let res = birds.replace(re,"");
            document.getElementById('drop').innerHTML=res;
            birds = res;
            triger = 1;
        }

}

}

