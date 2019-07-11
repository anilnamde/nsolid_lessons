const task = () => {
    const EventEmmiter = require('events');
    const emitter = new EventEmmiter();

    function loadGenerator() {
        let i = 0, x = [];
        let max = 100000;
        for(i= 0; i< max; i++){
            x.push('Power generation ', Math.pow(i))
            x.push('Sqrt generation ', Math.sqrt(i))
        }
    }

    emitter.addListener('ping', loadGenerator)

    let intevalTime = 100;
    let interval = setInterval(function requestWork() {
        emitter.emit('ping')
    }, intevalTime)

    setTimeout(function () {
        clearInterval(interval)
    }, 200000)
}


task();

