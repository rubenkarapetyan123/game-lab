const words = getWords();
const visibleWords = [];
let currentWord = null;
let currentIndex = -1;
let round = 1;
let timeoutId;
let isFinished = false;
let backgroundMusic;
let startMusic = true;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    backgroundMusic = loadSound("./assets/sounds/background_music.mp3")
    play();
}

function mousePressed() {
    if(startMusic) {
        backgroundMusic.play();
        startMusic = false;
    }
}

function draw() {
    background(BACKGROUD_COLOR);
    fill(WORD_COLOR);
    for (let word of visibleWords) {
        const visibleText = word === currentWord ? word.text.slice(currentIndex): word.text;
        text(visibleText, word.x, Math.floor(word.y));
        word.y += WORD_SPEED;
    }

    const [firstWord] = visibleWords;
    if (visibleWords.length && firstWord.y > height) {
        lose();
    }
}

function keyTyped() {
    checkLetter(key);
}

function checkLetter(letter) {
    if (!currentWord) {
        selectWord(letter);
    } else {
        checkWordNextLetter(letter);
    }

    if (currentWord.text.length === currentIndex) {
        visibleWords.splice(visibleWords.indexOf(currentWord), 1);
        currentWord = null;
        currentIndex = -1;
    }
}

function selectWord(letter) {
    const word = visibleWords.find(item => {
        const [firstLetter] = item.text;
        return firstLetter === letter;
    });
    currentWord = word;
    currentIndex = 1;
}

function checkWordNextLetter(letter) {
    const expectedNextLetter = currentWord.text.charAt(currentIndex);
    if (letter === expectedNextLetter) {
        currentIndex++;
    }
}

function getWords() {
    const words = WORDS.filter(word => word.length <= MAX_LETTER_COUNT)

    return words.map((word) => ({
        text: word,
        x: Math.random() * MAX_WORD_X,
        y: 0,
    }));
}

function play() {
    let spawningInterval = INITIAL_SPAWNING_INTERVAL;
    function loop() {
        timeoutId = setTimeout(() => {
            addWord();
            if(spawningInterval > MIN_SPAWNING_INTERVAL) {
                spawningInterval -= SPAWNING_INTERVAL_ACCELERATION;
            }
            if(!isFinished) {
                timeoutId = setTimeout(loop, spawningInterval);
            }
        }, spawningInterval);
    }
    loop();
}

function addWord() {
    if(!words.length) {
        if(round < MAX_ROUNDS) {
            words.push(...getWords());
            round++;
        } else if(!visibleWords.length){
            win();
        }
    } else {
        visibleWords.push(words.pop());
    }
}
function finish() {
    isFinished = true;
    clearTimeout(timeoutId);
    noLoop();
}
function win() {
    finish();
    alert("You won");
}

function lose() {
    finish();
    alert("You lost");
}