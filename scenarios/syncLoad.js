const fs = require('fs')

function load() {
    const max = 100000;
    for (let j = 0; j < max; j++) {
        console.log(j);
        const pow = [
            Math.pow(j, 2),
            Math.pow(j, 3),
            Math.pow(j, 4),
            Math.pow(j, 5),
            Math.pow(j, 6),
            Math.sqrt(j),
            Math.random()
        ];
        for (let x = 1; x < 2000; x++) {
            console.log(x, pow.join(','))
            // fs.appendFileSync(`./tmp/test_file_${j}.txt`, x + pow.join('|'),);
        }

    }
}


setTimeout(()=> {
    load();
}, 5000)
