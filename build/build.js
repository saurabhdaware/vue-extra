const fse = require('fs-extra');

fse.copy('src','dist')
    .then(() => console.log("...Build succeeed"))
    .catch(console.error);