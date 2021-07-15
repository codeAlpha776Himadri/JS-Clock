const hour_hand = document.querySelector('.hour-hand');
const minute_hand = document.querySelector('.minute-hand');
const second_hand = document.querySelector('.second-hand');

const audio = document.querySelector('.audio');
const digital_time = document.querySelector('.digital-date')

const screen_btn = document.querySelector('.btn')
const screen = document.querySelector('.screen')

screen_btn.addEventListener('click', () => {

    screen.classList.add('screen-collapse-anim');

    setTimeout(() => {

        function setDate() {

            const now = new Date()

            const seconds = now.getSeconds()
            const secondsInDegrees = (seconds * 6) + 90;
            second_hand.style.transform = `rotate(${secondsInDegrees}deg)`;

            const minutes = now.getMinutes();
            const minutesInDegress = (minutes * 6) + 90;
            minute_hand.style.transform = `rotate(${minutesInDegress}deg)`;

            const hours = now.getHours()
            const hoursInDegress = (hours * 6) + 90;
            hour_hand.style.transform = `rotate(${hoursInDegress}deg)`;

            if (secondsInDegrees == 0 || minutesInDegress == 0 || hoursInDegress == 0) {
                console.log('RESET')
                hour_hand.style.transition = null;
                minute_hand.style.transition = null;
                second_hand.style.transition = null;
            }

            if (secondsInDegrees == 450 || minutesInDegress == 450 || hoursInDegress == 450) {
                console.log('RESET')
                hour_hand.style.transition = null;
                minute_hand.style.transition = null;
                second_hand.style.transition = null;
            }

            audio.currentTime = 0; //reset ticking sound 
            audio.play();

            const time = `${hours}  :  ${minutes}  :  ${seconds}`

            digital_time.textContent = time;

        }
        setInterval(setDate, 1000)

    }, 1500);


})


