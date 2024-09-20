const kick = new Audio('kick.mp3');
const snare = new Audio('snare.mp3');
const hitHat =  new Audio('hit-hat.mp3');
const crash = new Audio('crash-cymbal.mp3');
const ride = new Audio('ride-cymbal.mp3');
const tom = new Audio('tom.mp3');
const clap = new Audio('clap.mp3');
const rim = new Audio('rimshot.mp3');
const cowbell = new Audio('cowbell.mp3');
const shaker = new Audio('shaker.mp3');
const tam = new Audio('tambourine.mp3');
const bass = new Audio('bass.mp3');

document.querySelector('.audio1').addEventListener('click', () => {
    kick.play();
});

document.querySelector('.audio2').addEventListener('click', () => {
    snare.play();
});

document.querySelector('.audio3').addEventListener('click', () => {
    hitHat.play();
});

document.querySelector('.audio4').addEventListener('click', () => {
    crash.play();
});

document.querySelector('.audio5').addEventListener('click', () => {
    ride.play();
});

document.querySelector('.audio6').addEventListener('click', () => {
    tom.play();
});

document.querySelector('.audio7').addEventListener('click', () => {
    clap.play();
});

document.querySelector('.audio8').addEventListener('click', () => {
    rim.play();
});

document.querySelector('.audio9').addEventListener('click', () => {
    cowbell.play();
});

document.querySelector('.audio10').addEventListener('click', () => {
    shaker.play();
});

document.querySelector('.audio11').addEventListener('click', () => {
    tam.play();
});

document.querySelector('.audio12').addEventListener('click', () => {
    bass.play();
});