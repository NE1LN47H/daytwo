let formatName = require('./formatName');
let userInfo = require('./userInfo');

function display() {
    console.log(`name: ${userInfo.userInfo.name}, hobby: ${userInfo.userInfo.hobby.toUpperCase()}, length of hobby: ${userInfo.userInfo.hobby.length}`)
}

display();