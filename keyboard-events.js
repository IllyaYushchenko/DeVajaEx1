let birdsList = ["Parrot", "Owl", "Hummingbird", "Penguin", "Swallow", "Finches", "Toucan", "Woodpecker", "Potoo", "Tit"];

let currentBird;
let isCheckFromStart;

document.addEventListener('DOMContentLoaded', nextWord);

function nextWord() {
    currentBird = birdsList.shift();
    if (typeof currentBird === "undefined") {
        document.getElementById('drop').innerHTML = "<h4>Thank you!</h4>";
        document.getElementById('drop2').innerHTML = "<h4>Game over</h4>";
        return;
    }
    isCheckFromStart = 1;
    document.getElementById('drop').innerHTML = currentBird;
    document.getElementById('drop2').innerHTML = "Press first letter of the bird please";
    document.body.addEventListener('keydown', processLetter);
}

function processLetter(e) {
    
    let char = e.char || e.charCode || e.which;
    let pressedKeyStr = String.fromCharCode(char).toLowerCase();
  // let pressedKeyStr = e.key; - other possible implementation

    if (currentBird.length) {
        let letter = isCheckFromStart ? currentBird.slice(0, 1) : currentBird.slice(-1);
        
        if (pressedKeyStr === letter.toLowerCase()) {
            currentBird = currentBird.replace(RegExp(pressedKeyStr, 'gi'), "");
            document.getElementById('drop').innerHTML = currentBird;
            isCheckFromStart = !isCheckFromStart;
            
            let advice = isCheckFromStart ? "Press first letter of the bird please" : "Press last letter of the bird please";
            document.getElementById('drop2').innerHTML = advice;
        }
    }

    if (currentBird.length == 0) {
        nextWord();
    }

}

