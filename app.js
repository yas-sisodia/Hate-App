const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = [
    'do your job',
    'Im good you little homeboi',
    'leave me alone',
    'How are you',
    'Namaste'
]

const weather = [
    'weather is fine',
    'you need a tan'
]

recognition.onstart = function(){
console.log("voice is activated, you can now talk to microphone");
};

recognition.onresult = function(event){
// console.log(event)
const current = event.resultIndex;
const transcript = event.results[current][0].transcript;
content.textContent = transcript;
readOutLoud(transcript);
};

//adding event listener to the btn
btn.addEventListener("click", () => {
    recognition.start();
})

function readOutLoud(message) {
const speech = new SpeechSynthesisUtterance();
const initiall = ['Milind Mohan is Madarchod']
speech.text = initiall[Math.floor(Math.random()*initiall.length)];

if(message.includes('how are you')){
    const finalText= greetings[Math.floor(Math.random()*greetings.length)];
    speech.text = finalText;
}
else if(message.includes('weather')){
    const finalText = weather[Math.floor(Math.random()*weather.length)];
    speech.text = finalText;
}
else


speech.rate = 1;
speech.volume = 1;
speech.pitch = 1;

window.speechSynthesis.speak(speech);
}
