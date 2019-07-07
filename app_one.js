const task = () => {
    const EventEmmiter = require('events');
    const emitter = new EventEmmiter();

    function loadGenerator() {
        let i = 0, x = [];
        console.log('.')
        let max = 10000;
        for(i= 0; i< max; i++){
            x.push('Power generation ', Math.pow(i))
            x.push('Sqrt generation ', Math.sqrt(i))
        }
    }

    emitter.addListener('ping', loadGenerator)

    let intevalTime = 50;
    let interval = setInterval(function requestWork() {
        emitter.emit('ping')
    }, intevalTime)

    setTimeout(function () {
        clearInterval(interval)
    }, 10000)
}


task();

