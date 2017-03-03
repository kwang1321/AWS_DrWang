(function() {
    const fs = require('fs');

    module.exports.readfile = function(res) {
        fs.readFile('myOutput.txt', function(err, data) {
            if (err) {
                throw err;
            }
            // console.log(data.toString());
            var str = data.toString();
            var result = str.split(";");
            console.log(result[0]);
            console.log(result[1]);
            console.log(result[2]);
            console.log(result[3]);
            console.log(result[4]);
            // return result[0];
            res.json(result);
        })
    };
})()
