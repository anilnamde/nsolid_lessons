const fs = require('fs')
function load(){
    const max = 100000;
    for(let i = 0; i < max; i++ ) {
        const pow = [Math.pow(i, 2), Math.sqrt(i), Math.random()]
        fs.appendFileSync(`test_file_${i}.txt`, pow.join('|'));
    }
}

load();
