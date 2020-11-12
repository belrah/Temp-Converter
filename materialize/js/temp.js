//converting from fa to cel//formuler:(fa-32)*5/9
// var farToCel = function(fa) {
//     var cel = Math.round((fa - 32) * (5 / 9));
//     console.log(cel + "C");
// }
// farToCel(55);

// //converting fromcel to fa // fofrmular:cel*9/5+32
// var celToFar = function(cel) {
//     var fa = Math.round((cel * 9 / 5) + (32));
//     console.log(fa + "F");
// }
// celToFar(55);

var farToCel = function(fa) {
        var cel = Math.round((fa - 32) * (5 / 9));
        document.getElementById("cvalue").innerHTML = (cel);
    }
    // farToCel(75);

var celToFar = function(cel) {
        var fa = Math.round((cel * 9 / 5) + (32));
        document.getElementById("fvalue").innerHTML = (fa);
    }
    // celToFar(45);