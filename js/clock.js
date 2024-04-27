const clockTag = document.querySelector('.clock')



function random() {
    setInterval(() => {
        const newClock = new Date()
        let hours = newClock.getHours()
        if (hours.toString().length === 1) {
            hours = ['0', hours].join('')
        }
        let minutes = newClock.getMinutes()
        if (minutes.toString().length === 1) {
            minutes = '0' + minutes
        }
        let seconds = newClock.getSeconds()
        if (seconds.toString().length === 1) {
            seconds = '0' + seconds
        }
        clockTag.textContent = `${hours}:${minutes}:${seconds}`
    }), 500
}


random()

