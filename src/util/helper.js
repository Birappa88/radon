const d = function getMonth() {
today = new Date()
var day = today.getMonth();
    console.log(day);
}
d()


const D = function getDay() {
    today = new Date()
    var day = today.getDay();
        console.log(day);
    }
    D()


    const B = function getBatchInfo(){
        console.log("Roadon, W3D1, the topic for today is Nodejs module system")
    }
    B()

module.exports.d = d
module.exports.B = B
module.exports.D = D