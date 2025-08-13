const bells = new Audio('./sounds/bell.wav'); // Audio() constructor to create a new audio object
const startBtn = document.querySelector('.btn-start'); 
const session = document.querySelector('.minutes');
let myInterval;
let state = true;

const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent) // to convert a string into a number

    if (state) {
        state = false;
        let totalSeconds = sessionAmount * 60 // Convert minutes to seconds

        const updateSeconds = () => {
            const minuteDiv = document.querySelector('.minutes');
            const secondDiv = document.querySelector('.seconds');

            totalSeconds--;

            let minutesLeft = Math.floor(totalSeconds/60);
            let secondsLeft = totalSeconds % 60;

            if(secondsLeft < 10) {
                secondDiv.textContent ='0' + secondsLeft; // textContent() returns and changes the text content of the target element
            } else {
                secondDiv.textContent = secondsLeft;
            }
            minuteDiv.textContent = `${minutesLeft}`
            
            if (minutesLeft === 0 && secondsLeft === 0) {
                bells.play()
                clearInterval(myInterval); // stops the interval timer begun by setInterval()
            }

        }    
        myInterval = setInterval(updateSeconds, 1000); // A Web API function that runs a chosen function every decided interval of milliseconds
    } else {
        alert('Session has already started.');
    }
}

startBtn.addEvenetListener('click', appTimer());